import type {PieceMeta, PieceType} from "../../content/types.ts";
import {sortMetaEntries} from "../dateUtil.ts";
import styles from "./PiecesSubpage.module.css";
import PieceCard from "./PieceCard.tsx";

function chunkArray<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

function sortedEntries({ type } : { type: PieceType }) {

    const modules = Object.values(import.meta.glob('../../content/pieces/*.meta.ts', { eager: true }))
        .filter((x: any) => x.default.type == type);

    const all = sortMetaEntries<PieceMeta>(Object.values(modules).map((m: any) => m.default));
    return chunkArray(all, 1000);
}

export default function Entries({ type } : { type: PieceType }) {
    const groups = sortedEntries({ type })

    return (<>
        {
            groups.map((group: PieceMeta[], groupIndex: number) => (
                <div key={groupIndex} className={styles.pieceContainer}>
                {group.map((piece, i) => (
                        <PieceCard
                            key={piece.id}
                            y={piece.y ?? i * 20}
                            img={piece.image}
                        />
            ))}
                </div>
            ))
        }
    </>);
}