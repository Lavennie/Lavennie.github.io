import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

type BubbleProps = {
    x: number;
    y: number;
    z?: number;
    size?: number;
};

export default function Bubble({x, y, z=5, size = 0.5}: BubbleProps) {
    const ref = useRef<THREE.Sprite>(null);
    const texture = useTexture("./bubble.png");

    // random offsets and speed per bubble
    const { offsetX, offsetY, speedX, speedY, scale } = useMemo(() => {
        return {
            speedX: 0.2 + Math.random() * 0.4,
            speedY: 0.2 + Math.random() * 0.4,
            offsetX: Math.random() * Math.PI * 2.0,
            offsetY: Math.random() * Math.PI * 2.0,
            scale: size * (0.4 + Math.random() * 0.3),
        };
    }, [x, y]);

    // bubble movement
    useFrame((state) => {
        if (!ref.current) return;

        const t = state.clock.getElapsedTime();

        ref.current.position.x = x + Math.sin(t * speedX + offsetX) * 0.1;
        ref.current.position.y = y + Math.cos(t * speedY + offsetY) * 0.1;
        ref.current.position.z = z;
        ref.current.rotation.y += 0.1;
        ref.current.scale.x = scale + Math.cos(t) * 0.01;
        ref.current.scale.y = scale + Math.sin(t) * 0.01;

    });

    return (
        <sprite ref={ref} position={[x, y, 0]}>
            <spriteMaterial map={texture} transparent={true} toneMapped={false} />
        </sprite>
    );
}
