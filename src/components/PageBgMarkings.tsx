import * as React from "react";

type PageBgMarkingsProps = {
    imageUrl: string;
    targetHeight: number; // px
    imageHeight?: number; // px
    effectiveImageHeight?: number; // px
    topOffset?: string; // px, %, rem, etc.
    className?: string;
    style?: React.CSSProperties;
};

function cssValueToPx(value: string, reference = 0, rootFontSize = 16) {
    if (value.endsWith("px")) return parseFloat(value);
    if (value.endsWith("%")) return (parseFloat(value) / 100) * reference;
    if (value.endsWith("rem")) return parseFloat(value) * rootFontSize;
    if (value.endsWith("em")) return parseFloat(value) * rootFontSize;
    if (value.endsWith("vh")) return (parseFloat(value) / 100) * window.innerHeight;
    if (value.endsWith("vw")) return (parseFloat(value) / 100) * window.innerWidth;
    if (value.endsWith("vmin")) return (parseFloat(value) / 100) * Math.min(window.innerWidth, window.innerHeight);
    if (value.endsWith("vmax")) return (parseFloat(value) / 100) * Math.max(window.innerWidth, window.innerHeight);
    return parseFloat(value);
}

export default function PageBgMarkings({
                                           imageUrl,
                                           targetHeight,
                                           imageHeight = 1920,
                                           effectiveImageHeight = 1920,
                                           topOffset = "0px",
                                           className = "",
                                           style = {},
                                       }: PageBgMarkingsProps) {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [count, setCount] = React.useState(1);
    const [gap, setGap] = React.useState(0);

    React.useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const update = () => {
            const topOffsetPx = cssValueToPx(topOffset, targetHeight);
            const availableHeight = targetHeight - topOffsetPx - (imageHeight - effectiveImageHeight);

            // Determine max number of images that fit
            const maxCount = Math.floor(availableHeight / effectiveImageHeight);
            const finalCount = Math.max(1, maxCount);

            // Compute dynamic gap so images + gaps fill targetHeight exactly
            const totalGap = availableHeight - finalCount * effectiveImageHeight;
            let gapPx = totalGap / (finalCount + 1); // +1 for before first and after last

            setCount(finalCount);
            setGap(gapPx);
        };

        update();

        const observer = new ResizeObserver(update);
        observer.observe(el);
        return () => observer.disconnect();
    }, [imageHeight, topOffset, targetHeight, effectiveImageHeight]);

    return (
        <div
            ref={containerRef}
            className={`bg-drawing ${className}`}
            style={{
                position: "absolute",
                pointerEvents: "none",
                ...style,
            }}
        >
            {Array.from({ length: count }).map((_, i) => {
                // position = topOffset + (gap before first + images*gap)
                const top = `calc(${topOffset} + ${(i + 1) * gap}px + ${i * effectiveImageHeight}px)`;

                return (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            top,
                            height: `${imageHeight}px`,
                            width: "100%",
                            left: "50%",
                            transform: `translateX(-50%) scaleX(${i % 2 === 1 ? -1 : 1})`,
                            backgroundImage: `url(${imageUrl})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right",
                            backgroundSize: "contain",
                            pointerEvents: "none",
                            zIndex: 0,
                        }}
                    />
                );
            })}
        </div>
    );
}