import type {CreationMeta, CreationType} from "../../content/types.ts";
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

function sortedEntries({ type } : { type: CreationType }) {

    const modules = Object.values(import.meta.glob('../../content/pieces/*.meta.ts', { eager: true }))
        .filter((x: any) => x.default.type == type);

    const all = sortMetaEntries<CreationMeta>(Object.values(modules).map((m: any) => m.default));
    return chunkArray(all, 1000);
}

export default function Entries({ type } : { type: CreationType }) {
    const groups = sortedEntries({ type })

    return (<>
        {
            groups.map((group: CreationMeta[], groupIndex: number) => (
                <div key={groupIndex} className={styles.pieceContainer}>
                {group.map((creation, i) => (
                        <PieceCard
                            key={creation.id}
                            y={creation.y ?? i * 20}
                            img={creation.image}
                        />
            ))}
                </div>
            ))
        }
    </>);
}