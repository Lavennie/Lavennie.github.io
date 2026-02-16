import type { Node, Edge } from "./types";

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

export function bfs(startId: number, _nodes : Record<number, Node>, edges: Edge[]) : Edge[][] {
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
            const current = queue.shift();
            if (current === undefined || visited.has(current)) continue;
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
export function dfs(startId: number, _nodes : Record<number, Node>, edges: Edge[]) : Edge[][] {
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
export function edgesByLengthIncrease(startId: number, nodes : Record<number, Node>, edges: Edge[]) : Edge[][]{
    return edgesByLength(startId, nodes, edges, false);
}
export function edgesByLengthDecrease(startId: number, nodes : Record<number, Node>, edges: Edge[]) : Edge[][]{
    return edgesByLength(startId, nodes, edges, true);
}
function edgesByLength(_startId: number, nodes : Record<number, Node>, edges: Edge[], reverse : boolean): Edge[][] {
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