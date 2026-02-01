import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei"
import * as THREE from "three";


export default function Axolotl() {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/axolotl.glb");
  
  const diffuse = useTexture("/axolotl_diffuse.png")
  diffuse.flipY = false
	
  scene.traverse((obj) => {
    if ((obj as THREE.Mesh).isMesh) {
      const mesh = obj as THREE.Mesh
		mesh.material = new THREE.MeshToonMaterial({
			map: diffuse,
			side: THREE.BackSide
		})
    }
  })
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.01;
  });

  return <primitive ref={ref} object={scene} scale={0.5} />;
}