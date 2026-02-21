import styles from './PiecesSubpage.module.css'

type PieceCardProps = {
    x?: number;
    y?: number;
    img: string;
};

export default function PieceCard({ x = 0, y = 0, img } : PieceCardProps) {
    return (<>
        <a className={styles.piece} style={{ left: x, top: y }} href={`${img}`}>
            <div style={{backgroundImage: `url(${img}`}}/>
        </a>
    </>);
}