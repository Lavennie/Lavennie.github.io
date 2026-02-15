import type { Node, Edge } from "./types";

function connectRoots(nodes: Record<number, Node>, edges: Edge[]) {
    // connect all multiples of 1000 to root 0
    const multiplesOf1000 = Object.keys(nodes)
        .map(Number)
        .filter(id => id % 1000 === 0 && id > 0);

    for (const id of multiplesOf1000) {
        edges.push({ from: 0, to: id });
    }
}
function constellationGroups(nodes: Record<number, Node>) {
    const constelGroups: Record<string, number[]> = {};

    Object.entries(nodes).forEach(([key, node]) => {
        if (!node.constel) return;
        if (!constelGroups[node.constel]) constelGroups[node.constel] = [];
        constelGroups[node.constel].push(Number(key));
    });

    return constelGroups;
}

export function generateEdgesComplete(nodes: Record<number, Node>): Edge[] {
    const edges: Edge[] = [];

    connectRoots(nodes, edges);
    const constelGroups = constellationGroups(nodes);

    for (const group of Object.values(constelGroups)) {
        for (let i = 0; i < group.length; i++) {
            for (let j = i + 1; j < group.length; j++) {
                edges.push({ from: group[i], to: group[j] });
            }
        }
    }

    return edges;
}
export function generateEdgesTree(nodes: Record<number, Node>): Edge[] {
    const edges: Edge[] = [];

    connectRoots(nodes, edges);
    const constelGroups = constellationGroups(nodes);

    for (const group of Object.values(constelGroups)) {
        for (let i = 1; i < group.length; i++) {
            // connect each node to the previous node - creates a simple path/tree
            edges.push({ from: group[i - 1], to: group[i] });
        }
    }

    return edges;
}
export function generateEdgesTreeShortest(nodes: Record<number, Node>): Edge[] {
    const edges: Edge[] = [];

    connectRoots(nodes, edges);
    const constelGroups = constellationGroups(nodes);

    for (const group of Object.values(constelGroups)) {
        if (group.length <= 1) continue;

        const connected = new Set<number>();
        connected.add(group[0]); // start from the first node

        const unconnected = new Set(group.slice(1));

        while (unconnected.size > 0) {
            let closestPair: [number, number] | null = null;
            let minDist = Infinity;

            for (const cId of connected) {
                const cNode = nodes[cId];
                for (const uId of unconnected) {
                    const uNode = nodes[uId];
                    const dx = cNode.x - uNode.x;
                    const dy = cNode.y - uNode.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < minDist) {
                        minDist = dist;
                        closestPair = [cId, uId];
                    }
                }
            }

            if (!closestPair) break; // safety

            const [from, to] = closestPair;
            edges.push({ from, to });
            connected.add(to);
            unconnected.delete(to);
        }
    }

    return edges;
}
export function generateEdgesTrianglesShortest(nodes: Record<number, Node>, triangleChance = 0.05): Edge[] {
    const edges: Edge[] = [];

    connectRoots(nodes, edges);
    const constelGroups = constellationGroups(nodes);

    for (const group of Object.values(constelGroups)) {
        if (group.length <= 1) continue;

        const connected = new Set<number>();
        connected.add(group[0]); // start from the first node
        const unconnected = new Set(group.slice(1));

        // MST-like connections
        while (unconnected.size > 0) {
            let closestPair: [number, number] | null = null;
            let minDist = Infinity;

            for (const cId of connected) {
                const cNode = nodes[cId];
                for (const uId of unconnected) {
                    const uNode = nodes[uId];
                    const dx = cNode.x - uNode.x;
                    const dy = cNode.y - uNode.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < minDist) {
                        minDist = dist;
                        closestPair = [cId, uId];
                    }
                }
            }

            if (!closestPair) break;

            const [from, to] = closestPair;
            edges.push({from, to});
            connected.add(to);
            unconnected.delete(to);
        }

        // add some extra edges to form triangles
        for (let i = 0; i < group.length; i++) {
            const n1 = group[i];
            for (let j = i + 1; j < group.length; j++) {
                const n2 = group[j];
                // skip if edge already exists
                if (edges.some(e => (e.from === n1 && e.to === n2) || (e.from === n2 && e.to === n1))) continue;
                // randomly add edge based on triangleChance
                if (Math.random() < triangleChance) {
                    edges.push({from: n1, to: n2});
                }
            }
        }
    }

    return edges;
}
export function generateEdgesTrianglesCompact(
    nodes: Record<number, Node>,
    baseAngleDeg = 60,       // minimal angle for very short edges
    maxAngleDeg = 100,       // maximal angle for long edges
    maxTriangleLength = 150  // max distance to consider triangles
): Edge[] {
    const edges: Edge[] = [];

    connectRoots(nodes, edges);
    const constelGroups = constellationGroups(nodes);

    const dist = (a: Node, b: Node) => Math.hypot(a.x - b.x, a.y - b.y);

    const angleAt = (a: Node, b: Node, c: Node) => {
        const ab = [a.x - b.x, a.y - b.y];
        const cb = [c.x - b.x, c.y - b.y];
        const dot = ab[0]*cb[0] + ab[1]*cb[1];
        const mag = Math.hypot(...ab) * Math.hypot(...cb);
        if (mag === 0) return 0;
        const cos = dot / mag;
        return Math.acos(Math.min(Math.max(cos, -1), 1)) * (180/Math.PI);
    }

    for (const group of Object.values(constelGroups)) {
        if (group.length <= 1) continue;

        const connected = new Set<number>();
        connected.add(group[0]);
        const unconnected = new Set(group.slice(1));

        // build nearest-neighbor tree
        while (unconnected.size > 0) {
            let closestPair: [number, number] | null = null;
            let minDist = Infinity;

            for (const cId of connected) {
                const cNode = nodes[cId];
                for (const uId of unconnected) {
                    const uNode = nodes[uId];
                    const d = dist(cNode, uNode);
                    if (d < minDist) {
                        minDist = d;
                        closestPair = [cId, uId];
                    }
                }
            }

            if (!closestPair) break;

            const [from, to] = closestPair;
            edges.push({ from, to });
            connected.add(to);
            unconnected.delete(to);
        }

        // add weighted triangles
        for (let i = 0; i < group.length; i++) {
            const nId = group[i];
            const nNode = nodes[nId];

            const neighbors = edges.filter(e => e.from === nId || e.to === nId)
                .map(e => (e.from === nId ? e.to : e.from));

            for (let j = 0; j < neighbors.length; j++) {
                for (let k = j + 1; k < neighbors.length; k++) {
                    const a = nodes[neighbors[j]];
                    const c = nodes[neighbors[k]];
                    const d = dist(a, c);
                    if (d > maxTriangleLength) continue;

                    // Angle threshold grows with distance
                    const weightedThreshold = baseAngleDeg + (maxAngleDeg - baseAngleDeg) * (d / maxTriangleLength);
                    const ang = angleAt(a, nNode, c);
                    if (ang < weightedThreshold) continue;

                    // Avoid duplicate edge
                    if (!edges.some(e =>
                        (e.from === neighbors[j] && e.to === neighbors[k]) ||
                        (e.from === neighbors[k] && e.to === neighbors[j])
                    )) {
                        edges.push({ from: neighbors[j], to: neighbors[k] });
                    }
                }
            }
        }
    }

    return edges;
}
export function generateEdgesDirectionalPath(nodes: Record<number, Node>): Edge[] {
    const edges: Edge[] = [];

    connectRoots(nodes, edges);
    const constelGroups = constellationGroups(nodes);

    const dist = (a: Node, b: Node) => Math.hypot(a.x - b.x, a.y - b.y);

    for (const group of Object.values(constelGroups)) {
        if (group.length <= 1) continue;

        // starting node is the first in collection
        const centerId = group[0];
        const centerNode = nodes[centerId];

        // random direction
        const angle = Math.random() * 2 * Math.PI;
        const dir = { x: Math.cos(angle), y: Math.sin(angle) };

        // nodes and their position along direction
        const projections: { id: number; proj: number }[] = group
            .map(id => {
                const node = nodes[id];
                const dx = node.x - centerNode.x;
                const dy = node.y - centerNode.y;
                return { id, proj: dx * dir.x + dy * dir.y }; // dir is normalized
            });

        const sorted = projections.sort((a, b) => a.proj - b.proj);

        // build path
        let last = sorted[0].id;
        for (let i = 1; i < sorted.length; i++) {
            edges.push({ from: last, to: sorted[i].id });
            last = sorted[i].id;
        }
    }

    return edges;
}
export function generateEdgesSpiral(
    nodes: Record<number, Node>,
    maxAngleDeg = 80 // maximum angle jump in degrees
): Edge[] {
    const edges: Edge[] = [];

    connectRoots(nodes, edges);
    const constelGroups = constellationGroups(nodes);

    for (const group of Object.values(constelGroups)) {
        if (group.length <= 1) continue;

        const centerId = group[0];
        const centerNode = nodes[centerId];

        // compute polar coordinates relative to center
        const polar: Record<number, { angle: number; radius: number }> = {};
        group.forEach(id => {
            const node = nodes[id];
            const dx = node.x - centerNode.x;
            const dy = node.y - centerNode.y;
            polar[id] = {
                radius: Math.hypot(dx, dy),
                angle: Math.atan2(dy, dx) // -π to π
            };
        });

        const unvisited = new Set(group);
        let lastId = centerId;
        unvisited.delete(lastId);

        while (unvisited.size > 0) {
            const lastAngle = polar[lastId].angle;
            let nextId: number | null = null;
            let minDist = Infinity;

            // first try to find node within max angle
            for (const id of unvisited) {
                let delta = polar[id].angle - lastAngle;
                if (delta <= 0) delta += 2 * Math.PI; // normalize to [0, 2π)
                const deltaDeg = delta * (180 / Math.PI);

                if (deltaDeg > 0 && deltaDeg <= maxAngleDeg) {
                    const d = polar[id].radius; // distance from center
                    if (d < minDist) {
                        minDist = d;
                        nextId = id;
                    }
                }
            }

            // fallback: no node within max angle, pick closest remaining
            if (!nextId) {
                let closestDist = Infinity;
                for (const id of unvisited) {
                    const d = polar[id].radius;
                    if (d < closestDist) {
                        closestDist = d;
                        nextId = id;
                    }
                }
            }

            edges.push({ from: lastId, to: nextId! });
            lastId = nextId!;
            unvisited.delete(lastId);
        }
    }

    return edges;
}
