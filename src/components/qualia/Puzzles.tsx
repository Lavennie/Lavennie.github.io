import { useMemo } from 'react';
import type {PuzzleMeta} from "../../content/types.ts";
import styles from "./Puzzles.module.css";
import PuzzleCard from "./PuzzleCard.tsx";

const modules = import.meta.glob('../../content/puzzles/*.meta.ts', { eager: true });

export default function Puzzles() {
    console.log(modules);
    //  load & shuffle quotes
    const allPuzzles: PuzzleMeta[] = useMemo(() => {
        const quotes = Object.values(modules)
            .map((m: any) => m.default as PuzzleMeta)
            .filter((q) => q);
        return shuffle(quotes);
    }, []); // empty deps = compute once per mount

    console.log(allPuzzles.length);
    if (allPuzzles.length === 0) return null;

    return (
        <div className={styles.puzzlesScroll}>
            {allPuzzles.map((puzzle, idx) => (
                <PuzzleCard key={idx} img={puzzle.image} size={puzzle.size} orientation={puzzle.orientation} />
            ))}
        </div>
    );
}

function shuffle<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}