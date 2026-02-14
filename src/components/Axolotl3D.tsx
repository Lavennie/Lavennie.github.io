import {useEffect, useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {useGLTF, useAnimations} from "@react-three/drei";
import {useTexture} from "@react-three/drei"
import * as THREE from "three";

import fragmentShader from "./fragment.glsl";

export default function Axolotl3D() {
    const ref = useRef<THREE.Group>(null);
    const materialRef = useRef<THREE.MeshStandardMaterial>(null)
    const {scene, animations} = useGLTF("/axolotl.glb");
    const {actions, names} = useAnimations(animations, ref);
    const diffuse = useTexture("/axolotl_diffuse.png")
    diffuse.flipY = false // UV was flipped, a hack fix

    useEffect(() => {

        // Traverse all meshes and assign the ShaderMaterial
		scene.traverse((obj) => {
			if ((obj as THREE.Mesh).isMesh) {
				const mesh = obj as THREE.Mesh
				const material = new THREE.MeshStandardMaterial({map: diffuse, side: THREE.BackSide})
				materialRef.current = material
				material.onBeforeCompile = (shader) => {
					// inject uniforms
					shader.uniforms.lightDir = {value: new THREE.Vector3(0, 1, 0).normalize()}
					shader.uniforms.overlayWeight = {value: 0.858}
					shader.uniforms.color1 = {value: new THREE.Color("#3C2A3E").convertLinearToSRGB()}
					shader.uniforms.color2 = {value: new THREE.Color("#5564BE").convertLinearToSRGB()}

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

				mesh.material = material
			}
		});

    }, [scene, diffuse])

    useEffect(() => {
        if (!actions || names.length === 0) return;

        const action = actions[names[0]];
        if (!action) return;

        // Play first animation by default
        action.reset();
        action.time = 0;
        action.play();

        return () => {
            action?.fadeOut(0.5);
        };
    }, [actions, names]);

    return <primitive ref={ref} object={scene} scale={1}/>;
}

useGLTF.preload("/axolotl.glb")