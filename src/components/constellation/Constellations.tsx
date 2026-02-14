import './Constellations.module.css'
import React, { useRef, useEffect } from "react";

type Node = { id: number; x: number; y: number };
type Edge = { from: number; to: number };

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
function bfs(startId : number, edges : Edge[]) : Edge[][] {
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
function dfs(startId: number, edges: Edge[]) : Edge[][] {
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
function edgesByLength(nodes: Node[], edges: Edge[], reverse : boolean): Edge[][] {
    // Create a map for fast node lookup
    const nodeMap = new Map<number, Node>();
    nodes.forEach(n => nodeMap.set(n.id, n));

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

    const starSprite = new Image();
    starSprite.src = "constellation_star.png";
    const starGlowSprite = new Image();
    starGlowSprite.src = "constellation_star_glow.png";

    let startTime = performance.now();
    const stretchDuration = 500;
    const betweenDelay = 1000;
    const fadeDelay = 500;

    const nodes : Node[] = [
        { id: 1, x: 100, y: 100 },
        { id: 2, x: 300, y: 200 },
        { id: 3, x: 1300, y: 250 },
    ];
    const edges : Edge[] = [
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 1 },
    ];
    const animGraph = edgesByLength(nodes, edges, true);

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
        function draw(time) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);


            // draw nodes
            nodes.forEach((n) => {
                ctx.save();

                // glow
                ctx.globalCompositeOperation = "lighter"; // additive blending
                const glowSize = 70;
                ctx.globalAlpha = 0.6;
                ctx.drawImage(
                    starGlowSprite,
                    0, 0, 128, 128,          // source rect
                    n.x - glowSize/2, n.y - glowSize/2, glowSize, glowSize // destination
                );

                // star sprite
                ctx.globalAlpha = 1;
                ctx.globalCompositeOperation = "source-over";
                ctx.drawImage(
                    starSprite,
                    0, 0, 128, 128,
                    n.x-10, n.y-10, 20, 20
                );

                ctx.restore();
            })
            // draw edges
            animGraph.forEach((list, i) => {
                // list is a collection of edges that expand in a single step
                list.forEach((e) => {
                    // a single edge
                    const from = nodes.find((n) => n.id === e.from);
                    const to = nodes.find((n) => n.id === e.to);
                    const elapsed = time - startTime - i * stretchDuration;
                    const t = Math.min(Math.max(elapsed / stretchDuration, 0), 1);
                    const alpha = 1 - Math.max((time - startTime - animGraph.length * stretchDuration - betweenDelay) / fadeDelay, 0);
                    ctx.beginPath();
                    ctx.moveTo(from.x, from.y);
                    ctx.lineTo(lerp(from.x, to.x, t), lerp(from.y, to.y, t));
                    ctx.strokeStyle = `rgba(122, 183, 255, ${alpha})`; //"#7AB7FF";
                    ctx.lineWidth = 1;
                    ctx.stroke();
                })
            })

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

    return <canvas ref={canvasRef} id="canvas" />;
};
