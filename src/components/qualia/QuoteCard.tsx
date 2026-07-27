import styles from './Quotes.module.css';

export interface QuoteCardProps {
    text: string;
    source: string;
    speaker: string;
    page: string;
    img: string;
}

export default function QuoteCard({ text, source, speaker, page, img }: QuoteCardProps) {
    const parts = text.split('||');
    return (
        <div
            className={styles.card}
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className={styles.overlay}>
                <blockquote className={styles.text}>
                    &ldquo;{parts.map((part, idx) => (
                    <span key={idx}>
                        {part}
                        {idx < parts.length - 1 && <br />}
                    </span>
                    ))}&rdquo;
                </blockquote>
                <div className={styles.meta}>
                    <span className={styles.speaker}>{speaker}</span>
                    <span className={styles.source}>{source}</span>
                    <span className={styles.page}>{page}</span>
                </div>
            </div>
        </div>
    );
}