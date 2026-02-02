import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei"
import * as THREE from "three";

import fragmentShader from "./fragment.glsl";

export default function Axolotl() {
  const ref = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null)
  const { scene } = useGLTF("/axolotl.glb");
  const diffuse = useTexture("/axolotl_diffuse.png")
  diffuse.flipY = false // UV was flipped, a hack fix
  
  useEffect(() => {
    diffuse.colorSpace = THREE.SRGBColorSpace

    // Traverse all meshes and assign the ShaderMaterial
    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh
		const material = new THREE.MeshStandardMaterial({ map: diffuse, side: THREE.BackSide })
		materialRef.current = material
		material.onBeforeCompile = (shader) => {
			// inject uniforms
            shader.uniforms.lightDir = { value: new THREE.Vector3(0, 1, 0).normalize() }
			shader.uniforms.overlayWeight = { value: 0.858 }
			shader.uniforms.color1 = { value: new THREE.Color("#3C2A3E").convertLinearToSRGB() }
			shader.uniforms.color2 = { value: new THREE.Color("#5564BE").convertLinearToSRGB() }
			
			// uniform chuncks don't get imported since the default fragment shader doesn't use them, 
			shader.vertexShader = shader.vertexShader.replace(
			  "#include <common>",
			  "#include <common>\nvarying vec2 vUv;"
			)
			shader.vertexShader = shader.vertexShader.replace(
			  "#include <uv_vertex>",
			  "#include <uv_vertex>\nvUv = uv;"
			)

			// replace fragment shader with custom code, keeping vertex shader
			shader.fragmentShader = fragmentShader
		}
		
        /*mesh.material = new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader,
          uniforms: {
            map: { value: diffuse },
            color1: { value: new THREE.Color("#ffffff") },
            color2: { value: new THREE.Color("#eeeeee") },
            lightDir: { value: new THREE.Vector3(1, 1, 1).normalize() },
            overlayWeight: { value: 0.858 },
            time: { value: 0 },
          },
			side: THREE.BackSide
        })*/
		mesh.material = material
        //materialRef.current = mesh.material as THREE.ShaderMaterial
      }
    })
  }, [scene, diffuse])
	
  /*scene.traverse((obj) => {
    if ((obj as THREE.Mesh).isMesh) {
      const mesh = obj as THREE.Mesh
		mesh.material = new THREE.MeshToonMaterial({
			map: diffuse,
			side: THREE.BackSide
		})
    }
  })*/
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.01;
  });

  return <primitive ref={ref} object={scene} scale={0.5} />;
}

useGLTF.preload("/axolotl.glb")