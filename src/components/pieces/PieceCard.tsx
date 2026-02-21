import styles from './PiecesSubpage.module.css'

type PieceCardProps = {
    y: number;
    img: string;
};

export default function PieceCard({ y, img } : PieceCardProps) {
    return (<>
        <a className={styles.piece} style={{ top: y }} href={`${img}`}>
            <div style={{backgroundImage: `url(${img}`}}/>
        </a>
    </>);
}