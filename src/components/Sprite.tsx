import { useRef, useEffect, useMemo } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

type SpriteProps = {
    texturePath: string;
    x: number;
    y: number;
    z?: number;
    size?: number;
    alpha?: number;
};

export default function Sprite({texturePath, x, y, z=5, size = 1, alpha = 1}: SpriteProps) {
    const ref = useRef<THREE.Sprite>(null);
    const texture = useTexture(texturePath);

    const aspect = useMemo(() => {
        if (!texture.image) return 1; // fallback
        const img = texture.image as HTMLImageElement;
        return img.width / img.height;
    }, [texture]);

    useEffect(() => {
        if (!ref.current) return;

        ref.current.position.x = x;
        ref.current.position.y = y;
        ref.current.position.z = z;
        ref.current.scale.x = size * aspect;
        ref.current.scale.y = size;
    }, [x, y, z, size]);


    return (
        <sprite ref={ref} position={[x, y, 0]}>
            <spriteMaterial map={texture} transparent={true} toneMapped={false} opacity={alpha} />
        </sprite>
    );
}
