import styles from './Puzzles.module.css';
import { useRef } from 'react';

export interface PuzzleCardProps {
    img: string;
    size: number;
    orientation: "horizontal" | "vertical";
}

export default function PuzzleCard({ img, size, orientation }: PuzzleCardProps) {
    const textRef = useRef<HTMLParagraphElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={cardRef}
            className={styles.card}
            style={{ backgroundImage: `url(${img})`, aspectRatio: `${orientation === "horizontal" ? 4 / 3 : 3 / 4}` }}
        >
            <div className={styles.overlay}>
                <p ref={textRef} className={styles.text}>{size}</p>
            </div>
        </div>
    );
}