import styles from './Quotes.module.css';
import { useEffect, useRef } from 'react';

export interface QuoteCardProps {
    text: string;
    source: string;
    firstname: string;
    middlename: string;
    lastname: string;
    page: string;
    img: string;
}

export default function QuoteCard({ text, source, firstname, middlename, lastname, page, img }: QuoteCardProps) {
    const parts = text.split('||');
    const textRef = useRef<HTMLParagraphElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const textElement = textRef.current;
        const cardElement = cardRef.current;
        if (!textElement || !cardElement) return;

        const fitText = () => {
            const textElement = textRef.current;
            const cardElement = cardRef.current;
            if (!textElement || !cardElement) return;

            // Temporarily remove constraints to measure full content
            const originalOverflow = textElement.style.overflow;
            const originalMaxHeight = textElement.style.maxHeight;
            textElement.style.overflow = 'visible';
            textElement.style.maxHeight = 'none';

            // Reset to base size
            textElement.style.fontSize = '1.25rem';

            // Get available space
            const cardHeight = cardElement.clientHeight;
            const metaElement = cardElement.querySelector(`.${styles.meta}`) as HTMLElement;
            const metaHeight = metaElement?.clientHeight || 100;
            const padding = 32; // Approximate padding from .text
            const availableHeight = cardHeight - metaHeight - padding - 50;

            // Check if text overflows
            let fontSize = 1.25;
            textElement.style.fontSize = `${fontSize}rem`;

            while (
                textElement.scrollHeight > availableHeight &&
                fontSize > 0.6
                ) {
                fontSize -= 0.05;
                textElement.style.fontSize = `${fontSize}rem`;
                void textElement.offsetHeight;
            }

            // Restore constraints
            textElement.style.overflow = originalOverflow || 'hidden';
            textElement.style.maxHeight = originalMaxHeight || 'calc(100% - 120px)';
        };

        // Run after render
        requestAnimationFrame(fitText);

        // Also run on resize just in case
        window.addEventListener('resize', fitText);
        return () => window.removeEventListener('resize', fitText);
    }, [text]);

    return (
        <div
            ref={cardRef}
            className={styles.card}
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className={styles.overlay}>
                <p ref={textRef} className={styles.text}>
                    {parts.map((part, idx) => (
                    <span key={idx}>
                        {part}
                        {idx < parts.length - 1 && <br />}
                    </span>
                    ))}
                </p>
                <div className={styles.meta}>
                    <span className={styles.speaker}>{firstname} {middlename} {lastname}</span>
                    <span className={styles.source}>{source}</span>
                    <span className={styles.page}>{page}</span>
                </div>
            </div>
        </div>
    );
}