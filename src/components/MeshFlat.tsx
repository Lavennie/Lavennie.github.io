import {useEffect, useRef, useMemo} from "react";
import {useFrame, useThree} from "@react-three/fiber";
import {useGLTF, useAnimations} from "@react-three/drei";
import * as THREE from "three";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils.js";

import fragmentShader from "./frag_flat.glsl";

type MeshFlatProps = {
    meshPath: string;
    side: string;
    colorLight: string;
    colorMid: string;
    colorShade: string;
	x : number;
	y : number;
    z : number;
    scale : number;
};

export default function MeshFlat({meshPath, side, colorLight, colorMid, colorShade, x, y, z, scale}: MeshFlatProps) {
    const ref = useRef<THREE.Group>(null);
    const materialRef = useRef<THREE.MeshStandardMaterial>(null)
    const {scene, animations} = useGLTF(meshPath);
    const {actions, names} = useAnimations(animations, ref);
    const { viewport } = useThree();

    useEffect(() => {
        // Traverse all meshes and assign the ShaderMaterial
        scene.traverse((obj) => {
            if ((obj as THREE.Mesh).isMesh) {
                const mesh = obj as THREE.Mesh
                const material = new THREE.MeshStandardMaterial({side: THREE.FrontSide})
                materialRef.current = material
                material.onBeforeCompile = (shader) => {
                    // inject uniforms
                    shader.uniforms.lightDir = {value: new THREE.Vector3(0, 1, -0.3).normalize()}
                    shader.uniforms.overlayWeight = {value: 0.858}
                    shader.uniforms.colorShade = {value: new THREE.Color(colorShade).convertLinearToSRGB()}
                    shader.uniforms.colorMid = {value: new THREE.Color(colorMid).convertLinearToSRGB()}
                    shader.uniforms.colorLight = {value: new THREE.Color(colorLight).convertLinearToSRGB()}

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
        })
    }, [scene])


    useEffect(() => {
        if (!actions || !names) return;

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

    useFrame(() => {
        if (!ref.current) return;

        let baseX;
        if (side === "left") {
            baseX = -viewport.width / 4;
        }
        else if (side === "right") {
            baseX = viewport.width / 4;
        }
        else {
            baseX = 0;
        }
        ref.current.position.x = baseX + x;
        ref.current.position.y = y;
        ref.current.position.z = z;
    });
    const outline = useMemo(() => {
        const cloned = SkeletonUtils.clone(scene);

        cloned.traverse((obj) => {
            if ((obj as THREE.Mesh).isMesh) {
                const mesh = obj as THREE.Mesh;

                mesh.material = new THREE.MeshBasicMaterial({
                    color: "black",
                    side: THREE.BackSide,
                    depthWrite: false
                });
            }
        });
        cloned.scale.multiplyScalar(1.05);

        return cloned;
    }, [scene]);

    return <primitive ref={ref} object={scene} scale={scale}/>
}

useGLTF.preload("/axolotl.glb")