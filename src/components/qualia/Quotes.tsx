import { useMemo } from 'react';
import QuoteCard from './QuoteCard.tsx';
import type {QuoteMeta} from "../../content/types.ts";
import styles from './Quotes.module.css';

const modules = import.meta.glob('../../content/quotes/*.meta.ts', { eager: true });

export default function Quotes() {
    //  load & shuffle quotes
    const allQuotes: QuoteMeta[] = useMemo(() => {
        const quotes = Object.values(modules)
            .map((m: any) => m.default as QuoteMeta)
            .filter((q) => q && q.description);
        return shuffle(quotes);
    }, []); // empty deps = compute once per mount

    if (allQuotes.length === 0) return null;

    return (
        <div className={styles.quotesScroll}>
            {allQuotes.map((quote, idx) => (
                <QuoteCard
                    key={idx}
                    text={quote.quotes ? `“${quote.description}”` : quote.description}
                    source={quote.source}
                    page={quote.page}
                    firstname={quote.firstname}
                    middlename={quote.middlename ?? ""}
                    lastname={quote.lastname ?? ""}
                    img={quote.image}
                />
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