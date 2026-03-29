import * as React from "react";

type PageBgMarkingsProps = {
    imageUrl: string;
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

function getImageSize(url: string): Promise<{ width: number; height: number }> {
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = () => {
            resolve({
                width: img.naturalWidth,
                height: img.naturalHeight
            });
        };

        img.onerror = reject;

        img.src = url;
    });
}

export default function PageBgMarkings({
                                           imageUrl,
                                           topOffset = "0px",
                                           className = "",
                                           style = {},
                                       }: PageBgMarkingsProps) {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [count, setCount] = React.useState(1);
    const [gap, setGap] = React.useState(0);
    const [imageSize, setImageSize] = React.useState<{ width: number; height: number }>({width: 0, height: 0});

    React.useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const update = () => {
            getImageSize(imageUrl).then(size => {
                setImageSize({width: size.width, height: size.height})
                const bgParent = document.getElementsByClassName("site-container")[0] as HTMLElement;
                const canvasHeight = bgParent.getBoundingClientRect().height - cssValueToPx(topOffset);
                const numOfImages = Math.floor(canvasHeight / size.height);
                if (numOfImages == 0){
                    const scale = canvasHeight / size.height;
                    setImageSize({width: size.width * scale, height: size.height * scale})
                    setCount(1);
                    setGap(0);
                }
                else {
                    setCount(numOfImages);
                    setGap((canvasHeight - numOfImages * size.height) / (numOfImages + 1));
                }
            });
        };

        update();

        const observer = new ResizeObserver(update);
        observer.observe(el);
        return () => observer.disconnect();
    }, [topOffset]);

    console.log(imageSize);
    return (
        <div
            ref={containerRef}
            className={`bg-drawing ${className}`}
            style={{
                position: "absolute",
                pointerEvents: "none",
                height: `calc(100% - ${topOffset})`,
                top: topOffset,
                ...style,
            }}
        >
            {Array.from({ length: count }).map((_, i) => {
                // position = topOffset + (gap before first + images*gap)
                const top = `calc(${(i + 1) * gap}px + ${i * imageSize.height}px)`;

                return (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            top,
                            height: `${imageSize.height}px`,
                            width: "100%",
                            left: "50%",
                            transform: `translateX(-50%) scaleX(${i % 2 === 1 ? -1 : 1})`,
                            backgroundImage: `url(${imageUrl})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: `${count == 1 ? "center" : "right"}`,
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