import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";


export default function Axolotl() {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/axolotl.glb");
	
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.01;
  });

  return <primitive ref={ref} object={scene} scale={0.5} />;
}