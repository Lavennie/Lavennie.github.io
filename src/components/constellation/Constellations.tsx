import './Constellations.module.css'
import React, { useRef, useEffect, useState } from "react";

type Node = {
    constel?: string;
    x: number;
    y: number;
    popup?: HTMLImageElement;
};
type Constellation = {
    x: number;
    y: number;
    size: number;
    img: HTMLImageElement;
};
type Edge = {
    from: number;
    to: number
};

function buildAdjacencyList(edges : {from: number, to: number}[]) {
    const graph : Record<number, number[]> = {};

    edges.forEach(({ from, to }) => {
        // Ensure nodes exist
        if (!graph[from]) graph[from] = [];
        if (!graph[to]) graph[to] = [];

        graph[from].push(to);
        graph[to].push(from);
    });

    return graph;
}
function bfs(startId: number, nodes : Record<number, Node>, edges: Edge[]) : Edge[][] {
    const visited = new Set();
    const queue = [];
    const nextQueue = [startId];
    const animatedEdges : Edge[][] = [];
    const graph = buildAdjacencyList(edges) ;

    while (nextQueue.length > 0) {
        queue.push(...nextQueue);
        nextQueue.length = 0;
        const step = [];
        while (queue.length > 0) {
            const current = queue.shift() || -1;
            if (current < 0) break;
            visited.add(current);

            for (const neighbor of graph[current]) {
                if (!visited.has(neighbor)) {
                    nextQueue.push(neighbor);

                    step.push({
                        from: current,
                        to: neighbor
                    });
                }
            }
        }
        animatedEdges.push(step);
        queue.length = 0;
    }

    return animatedEdges;
}
function dfs(startId: number, nodes : Record<number, Node>, edges: Edge[]) : Edge[][] {
    const visited = new Set<number>();
    const stack = [startId];
    const animatedEdges: Edge[][] = [];
    const graph = buildAdjacencyList(edges);

    while (stack.length > 0) {
        const current = stack.pop()!;
        if (visited.has(current)) continue;
        visited.add(current);

        for (const neighbor of graph[current] ?? []) {
            if (!visited.has(neighbor)) {
                // Push neighbor onto stack for DFS
                stack.push(neighbor);

                // Record edge for animation
                animatedEdges.push([{
                    from: current,
                    to: neighbor
                }]);
            }
        }
    }

    return animatedEdges;
}
function edgesByLengthIncrease(startId: number, nodes : Record<number, Node>, edges: Edge[]) : Edge[][]{
    return edgesByLength(startId, nodes, edges, false);
}
function edgesByLengthDecrease(startId: number, nodes : Record<number, Node>, edges: Edge[]) : Edge[][]{
    return edgesByLength(startId, nodes, edges, true);
}
function edgesByLength(startId: number, nodes : Record<number, Node>, edges: Edge[], reverse : boolean): Edge[][] {
    // Create a map for fast node lookup
    const nodeMap = new Map<number, Node>();
    for (const [id, n] of Object.entries(nodes)) {
        nodeMap.set(Number(id), n);
    }

    // Compute distance for each edge
    const edgesWithLength = edges.map(e => {
        const from = nodeMap.get(e.from);
        const to = nodeMap.get(e.to);

        if (!from || !to) {
            throw new Error(`Invalid edge: ${e.from} -> ${e.to}`);
        }

        const dx = from.x - to.x;
        const dy = from.y - to.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        return { ...e, length: dist };
    });

    // Sort edges by distance (shortest first)
    if (reverse){
        edgesWithLength.sort((a, b) => b.length - a.length);
    }
    else {
        edgesWithLength.sort((a, b) => a.length - b.length);
    }

    // Return as animation steps: one edge per step
    return edgesWithLength.map(e => [{ from: e.from, to: e.to }]);
}





export default function Constellations() {
    const canvasRef = useRef(null);
    const hoveredRef = useRef<number | null>(null);

    const starSprite = Object.assign(new Image(), { src: "constellation_star.png" });
    const starGlowSprite = Object.assign(new Image(), { src: "constellation_star_glow.png" });
    const constelGenshin = Object.assign(new Image(), { src: "constellations/constellation_genshin.png" });
    const constelStarRail = Object.assign(new Image(), { src: "constellations/constellation_star_rail.png" });
    const starRailEvilDromas = Object.assign(new Image(), { src: "constellations/starrail_evil_dromas.png" });

    let startTime = performance.now();
    const stretchDuration = 500;
    const betweenDelay = 1000;
    const fadeDelay = 500;

    const constellations : Record<string, Constellation> = {
        "genshin": {x: 200, y: 100, size: 500, img: constelGenshin },
        "starrail" : { x: 1100, y: 400, size: 600, img: constelStarRail }
    };
    const nodes : Record<number, Node> = {
        1 : {constel: "genshin", x: 0, y: 0, popup: starRailEvilDromas},
        2 : {x: 300, y: 200},
        3 : {constel: "starrail", x: 0, y: 0, popup: starRailEvilDromas},
    };
    const edges : Edge[] = [
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 1 },
    ];
    function nodePosX(node : Node) {
        return (node.constel) ? constellations[node.constel].x + constellations[node.constel].size / 2 + node.x : node.x;
    }
    function nodePosY(node : Node) {
        return (node.constel) ? constellations[node.constel].y + constellations[node.constel].size / 2 + node.y : node.y;
    }

    const animGraph = edgesByLengthDecrease(1, nodes, edges);
    const [hovered, setHovered] = useState<number | null>(null);

    function handleMouseMove(e: React.MouseEvent<HTMLCanvasElement>) {
        const canvas = canvasRef.current!;
        const rect = canvas.getBoundingClientRect();

        // Convert screen → canvas coordinates
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;

        const mouseX = (e.clientX - rect.left) * scaleX;
        const mouseY = (e.clientY - rect.top) * scaleY;

        const hitEntry = Object.entries(nodes).find(([id, n]) =>
            Math.hypot(nodePosX(n) - mouseX, nodePosY(n) - mouseY) <= 20);
        hoveredRef.current = (hitEntry) ? Number(hitEntry[0]) : null;
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        // Set canvas size to match window
        const ctx = canvas.getContext("2d");

        function lerp(a, b, t) {
            return a + (b - a) * t; // t ∈ [0,1]
        }
        function resizeCanvas() {
            canvas.width = 2000;
            canvas.height = document.getElementById("canvas").parentElement.clientHeight / window.innerWidth * 2000;

            draw();
        }
        function drawConstellationImage(img, color : string, x : number, y : number, size : number) {
            ctx.drawImage(
                img,
                0, 0, 512, 512,
                x, y, size, size
            );
            ctx.fillStyle = color;
            ctx.globalCompositeOperation = "source-atop"; // only affects existing pixels
            ctx.fillRect(x, y, size, size);

// Reset composite mode
            ctx.globalCompositeOperation = "source-over";
        }
        function draw(time) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // constellation images
            for (const c of Object.values(constellations)) {
                drawConstellationImage(c.img, "#1b1b1e", c.x, c.y, c.size);
            }

            // nodes
            for (const n of Object.values(nodes)) {
                ctx.save();

                // glow
                ctx.globalCompositeOperation = "lighter"; // additive blending
                const glowSize = 70;
                ctx.globalAlpha = 0.6;
                const x = nodePosX(n);
                const y = nodePosY(n);
                ctx.drawImage(
                    starGlowSprite,
                    0, 0, 128, 128,          // source rect
                    x - glowSize/2, y - glowSize/2, glowSize, glowSize // destination
                );

                // star sprite
                ctx.globalAlpha = 1;
                ctx.globalCompositeOperation = "source-over";
                ctx.drawImage(
                    starSprite,
                    0, 0, 128, 128,
                    x - 10, y - 10, 20, 20
                );

                ctx.restore();
            };
            // edges
            animGraph.forEach((list, i) => {
                // list is a collection of edges that expand in a single step
                list.forEach((e) => {
                    // a single edge
                    const from = Object.entries(nodes).find(([id, _]) => Number(id) === e.from)[1];
                    const to = Object.entries(nodes).find(([id, _]) => Number(id) === e.to)[1];
                    const elapsed = time - startTime - i * stretchDuration;
                    const t = Math.min(Math.max(elapsed / stretchDuration, 0), 1);
                    const alpha = 1 - Math.max((time - startTime - animGraph.length * stretchDuration - betweenDelay) / fadeDelay, 0);
                    ctx.beginPath();
                    ctx.moveTo(nodePosX(from), nodePosY(from));
                    ctx.lineTo(lerp(nodePosX(from), nodePosX(to), t), lerp(nodePosY(from), nodePosY(to), t));
                    ctx.strokeStyle = `rgba(122, 183, 255, ${alpha})`; //"#7AB7FF";
                    ctx.lineWidth = 1;
                    ctx.stroke();
                })
            });
            // hovered popup
            if (hoveredRef.current){
                const n = Object.entries(nodes).find(([id, _]) => Number(id) === hoveredRef.current)[1];
                if (n.popup) {
                    const height = 200;
                    const width = height * n.popup.width / n.popup.height;
                    const y = nodePosY(n);
                    ctx.drawImage(n.popup,
                        Math.min(Math.max(nodePosX(n) - width/2, 0), canvas.width - width),
                        (y >= height + 20) ? y - height - 20 : y + 20,
                        width, height);
                }
            }

            if (time - startTime - animGraph.length * stretchDuration > betweenDelay + fadeDelay + betweenDelay) {
                startTime = performance.now();
            }
            requestAnimationFrame(draw);
        }

        // Start animation once images are loaded
        let loadedCount = 0;
        function onImageLoad() {
            loadedCount += 1;
            if (loadedCount === 2) {
                resizeCanvas();
                requestAnimationFrame(draw);
            }
        }

        starSprite.onload = onImageLoad;
        starGlowSprite.onload = onImageLoad;

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
    }, []);

    return <canvas ref={canvasRef} id="canvas" onMouseMove={handleMouseMove} onMouseLeave={() => setHovered(null)}/>;
};
