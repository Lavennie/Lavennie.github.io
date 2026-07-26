import QuoteCard from './QuoteCard.tsx';
import type {QuoteMeta} from "../../content/types.ts";

export default function Quotes() {
    //  load & shuffle quotes
    const modules = import.meta.glob('../../content/quotes/*.meta.ts', { eager: true });

    const allQuotes: QuoteMeta[] = shuffle(
        Object.values(modules)
            .map((m: any) => m.default as QuoteMeta)
            .filter((q) => q && q.description)
    );

    if (allQuotes.length === 0) return null;

    return (
        <>
            {allQuotes.map((quote, idx) => (
                <QuoteCard
                    key={idx}
                    text={quote.description}
                    source={quote.source}
                    page={quote.page}
                    speaker={quote.speaker}
                    img={quote.image}
                />
            ))}
        </>
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