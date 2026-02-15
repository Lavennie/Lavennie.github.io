import type { Node, Edge } from "./types";
import Delaunator from "delaunator";

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

export function complete(nodes: Record<number, Node>): Edge[] {
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
export function tree(nodes: Record<number, Node>): Edge[] {
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
export function treeShortest(nodes: Record<number, Node>): Edge[] {
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
export function trianglesShortest(nodes: Record<number, Node>, triangleChance = 0.05): Edge[] {
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
export function trianglesCompact(
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
export function directionalPath(nodes: Record<number, Node>): Edge[] {
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
export function spiral(
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
export function snowflake(
    nodes: Record<number, Node>,
    branchFactor = 3 // maximum children per node
): Edge[] {
    const edges: Edge[] = [];

    connectRoots(nodes, edges);
    const constelGroups = constellationGroups(nodes);

    const dist = (a: Node, b: Node) => Math.hypot(a.x - b.x, a.y - b.y);

    for (const group of Object.values(constelGroups)) {
        if (group.length <= 1) continue;

        const centerId = group[0];
        const unvisited = new Set(group);
        unvisited.delete(centerId);

        const queue: number[] = [centerId];

        while (queue.length > 0 && unvisited.size > 0) {
            const parentId = queue.shift()!;
            const parentNode = nodes[parentId];

            // find closest unvisited nodes to parent
            const candidates = Array.from(unvisited)
                .map(id => ({ id, d: dist(parentNode, nodes[id]) }))
                .sort((a, b) => a.d - b.d)
                .slice(0, branchFactor); // pick top N closest

            for (const c of candidates) {
                edges.push({ from: parentId, to: c.id });
                unvisited.delete(c.id);
                queue.push(c.id);
            }
        }
    }

    return edges;
}
export function spiderweb(
    nodes: Record<number, Node>,
    maxRingNeighbors = 6, // max connections in the ring
): Edge[] {
    const edges: Edge[] = [];

    // Connect constellation roots to global root
    connectRoots(nodes, edges);
    const constelGroups = constellationGroups(nodes);

    const dist = (a: Node, b: Node) => Math.hypot(a.x - b.x, a.y - b.y);

    for (const group of Object.values(constelGroups)) {
        if (group.length <= 1) continue;

        // Root for this constellation
        const rootId = group[0];
        const rootNode = nodes[rootId];

        // Compute distance from constellation root for each node
        const nodesWithDist = group.map(id => ({
            id,
            d: dist(rootNode, nodes[id])
        }));

        // Sort nodes by distance from root
        nodesWithDist.sort((a, b) => a.d - b.d);

        const layers: number[][] = [];

        // Assign nodes to rings (layers) by distance from root
        const layerStep = 100; // radial spacing between rings
        nodesWithDist.forEach(({ id, d }) => {
            if (id === rootId) return; // skip root itself
            const layerIndex = Math.floor(d / layerStep);
            if (!layers[layerIndex]) layers[layerIndex] = [];
            layers[layerIndex].push(id);
        });

        // Connect root to closest nodes in first layer
        const firstLayer = layers[0] || [];
        firstLayer.forEach(id => edges.push({ from: rootId, to: id }));

        // Connect nodes outward radially (tree)
        for (let i = 0; i < layers.length; i++) {
            const layer = layers[i];
            if (!layer) continue;
            for (const id of layer) {
                if (i === 0) continue;
                const prevLayer = layers[i - 1];
                if (!prevLayer) continue;

                // connect to closest node in previous layer
                let closest = prevLayer[0];
                let minD = dist(nodes[id], nodes[closest]);
                for (const pid of prevLayer) {
                    const d = dist(nodes[id], nodes[pid]);
                    if (d < minD) {
                        minD = d;
                        closest = pid;
                    }
                }
                edges.push({ from: closest, to: id });
            }
        }

        // Connect nodes in the same layer to form web rings
        for (const layer of layers) {
            if (!layer || layer.length <= 1) continue;
            const sortedByAngle = layer.sort((a, b) => {
                const na = nodes[a];
                const nb = nodes[b];
                const angleA = Math.atan2(na.y - rootNode.y, na.x - rootNode.x);
                const angleB = Math.atan2(nb.y - rootNode.y, nb.x - rootNode.x);
                return angleA - angleB;
            });

            for (let i = 0; i < sortedByAngle.length; i++) {
                const from = sortedByAngle[i];
                const to = sortedByAngle[(i + 1) % sortedByAngle.length];
                if (!edges.some(e => (e.from === from && e.to === to) || (e.from === to && e.to === from))) {
                    edges.push({ from, to });
                }
            }
        }
    }

    return edges;
}
export function rings(
    nodes: Record<number, Node>,
    baseNodesPerCycle = 8,   // inner-most cycle
    growthFactor = 2,      // multiplier for each outer cycle
    minAngleDeg = 60,        // minimal angle between consecutive nodes
    bridgesPerCircle = 1     // bridges connecting consecutive cycles
): Edge[] {
    const edges: Edge[] = [];

    connectRoots(nodes, edges);
    const constelGroups = constellationGroups(nodes);

    const dist = (a: Node, b: Node) => Math.hypot(a.x - b.x, a.y - b.y);
    const angleBetween = (a: Node, b: Node) => Math.atan2(b.y - a.y, b.x - a.x);

    for (const group of Object.values(constelGroups)) {
        if (group.length <= 1) continue;

        const centerId = group[0];
        const centerNode = nodes[centerId];

        // sort remaining nodes by distance from center
        const remaining = group.slice(1)
            .map(id => ({ id, d: dist(centerNode, nodes[id]) }))
            .sort((a, b) => a.d - b.d)
            .map(x => x.id);

        const cycles: number[][] = [];
        let cycleIndex = 0;

        while (remaining.length > 0) {
            // number of nodes in this cycle grows with the radius
            const nodesInCycle = Math.ceil(baseNodesPerCycle * Math.pow(growthFactor, cycleIndex));

            const cycle: number[] = [];
            for (let i = 0; i < Math.min(nodesInCycle, remaining.length); i++) {
                cycle.push(remaining.shift()!);
            }

            // sort by angle around center for circular arrangement
            cycle.sort((a, b) => angleBetween(centerNode, nodes[a]) - angleBetween(centerNode, nodes[b]));

            // create cycle edges
            for (let i = 0; i < cycle.length; i++) {
                const from = cycle[i];
                const to = cycle[(i + 1) % cycle.length]; // close the cycle
                edges.push({ from, to });
            }

            cycles.push(cycle);
            cycleIndex++;
        }

        // connect center to first cycle
        if (cycles.length > 0) {
            const firstCycle = cycles[0];
            let closestNode = firstCycle[0];
            let minDist = dist(centerNode, nodes[closestNode]);

            for (const id of firstCycle) {
                const d = dist(centerNode, nodes[id]);
                if (d < minDist) {
                    minDist = d;
                    closestNode = id;
                }
            }

            edges.push({ from: centerId, to: closestNode });
        }

        // connect consecutive cycles with bridges
        for (let i = 1; i < cycles.length; i++) {
            const outer = cycles[i];
            const inner = cycles[i - 1];

            for (let b = 0; b < Math.min(bridgesPerCircle, outer.length); b++) {
                let bestPair: [number, number] | null = null;
                let minDist = Infinity;

                for (const o of outer) {
                    for (const inId of inner) {
                        const d = dist(nodes[o], nodes[inId]);
                        if (d < minDist) {
                            minDist = d;
                            bestPair = [o, inId];
                        }
                    }
                }

                if (bestPair) {
                    edges.push({ from: bestPair[0], to: bestPair[1] });
                }
            }
        }
    }

    return edges;
}
export function ice(
    nodes: Record<number, Node>,
    baseNodesPerCycle = 8,   // inner-most cycle
    growthFactor = 2,        // multiplier for each outer cycle
    minAngleDeg = 60          // minimal angle between consecutive nodes
): Edge[] {
    const edges: Edge[] = [];

    connectRoots(nodes, edges);
    const constelGroups = constellationGroups(nodes);

    const dist = (a: Node, b: Node) => Math.hypot(a.x - b.x, a.y - b.y);
    const angleBetween = (a: Node, b: Node) => Math.atan2(b.y - a.y, b.x - a.x);

    for (const group of Object.values(constelGroups)) {
        if (group.length <= 1) continue;

        const centerId = group[0];
        const centerNode = nodes[centerId];

        // sort remaining nodes by distance from center
        const remaining = group.slice(1)
            .map(id => ({ id, d: dist(centerNode, nodes[id]) }))
            .sort((a, b) => a.d - b.d)
            .map(x => x.id);

        const cycles: number[][] = [];
        let cycleIndex = 0;

        while (remaining.length > 0) {
            const nodesInCycle = Math.ceil(baseNodesPerCycle * Math.pow(growthFactor, cycleIndex));

            const cycle: number[] = [];
            for (let i = 0; i < Math.min(nodesInCycle, remaining.length); i++) {
                cycle.push(remaining.shift()!);
            }

            // sort by angle around center for circular arrangement
            cycle.sort((a, b) => angleBetween(centerNode, nodes[a]) - angleBetween(centerNode, nodes[b]));

            // create cycle edges
            for (let i = 0; i < cycle.length; i++) {
                const from = cycle[i];
                const to = cycle[(i + 1) % cycle.length]; // close the cycle
                edges.push({ from, to });
            }

            cycles.push(cycle);
            cycleIndex++;
        }

        // --- radial spokes ---
        const spokesPerCycle = 3; // you can adjust
        let prevLayer: number[] = [centerId];

        for (const cycle of cycles) {
            // pick spokes evenly along the cycle
            for (let s = 0; s < Math.min(spokesPerCycle, cycle.length); s++) {
                const spokeNode = cycle[Math.floor(s * cycle.length / spokesPerCycle)];

                // connect to the closest node in previous layer (not always center)
                let closestPrev = prevLayer[0];
                let closestDist = dist(nodes[spokeNode], nodes[closestPrev]);

                for (const prev of prevLayer) {
                    const d = dist(nodes[spokeNode], nodes[prev]);
                    if (d < closestDist) {
                        closestDist = d;
                        closestPrev = prev;
                    }
                }

                edges.push({ from: closestPrev, to: spokeNode });
            }

            prevLayer = [...cycle]; // next cycle connects to this one
        }
    }

    return edges;
}
export function crystal(nodes: Record<number, Node>, neighbors = 4): Edge[] {
    const edges: Edge[] = [];

    connectRoots(nodes, edges);
    const constelGroups = constellationGroups(nodes);

    const dist = (a: Node, b: Node) => Math.hypot(a.x - b.x, a.y - b.y);

    for (const group of Object.values(constelGroups)) {
        if (group.length <= 1) continue;

        // Keep track of which nodes are connected
        const connected = new Set<number>();
        connected.add(group[0]); // start from center/root
        const unconnected = new Set(group.slice(1));

        // Connect each node to its closest `neighbors` nodes
        for (const id of group) {
            const node = nodes[id];

            // compute distances to all other nodes in the group
            const distances = group
                .filter(otherId => otherId !== id)
                .map(otherId => ({ id: otherId, d: dist(node, nodes[otherId]) }))
                .sort((a, b) => a.d - b.d);

            for (let i = 0; i < Math.min(neighbors, distances.length); i++) {
                const neighborId = distances[i].id;
                // avoid duplicates
                if (!edges.some(e => (e.from === id && e.to === neighborId) || (e.from === neighborId && e.to === id))) {
                    edges.push({ from: id, to: neighborId });
                }
            }
        }

        // ensure connectivity: connect any remaining unconnected nodes to the nearest connected one
        while (unconnected.size > 0) {
            let bestPair: [number, number] | null = null;
            let minDist = Infinity;

            for (const uId of unconnected) {
                const uNode = nodes[uId];
                for (const cId of connected) {
                    const cNode = nodes[cId];
                    const d = dist(uNode, cNode);
                    if (d < minDist) {
                        minDist = d;
                        bestPair = [uId, cId];
                    }
                }
            }

            if (!bestPair) break;

            const [uId, cId] = bestPair;
            edges.push({ from: uId, to: cId });
            connected.add(uId);
            unconnected.delete(uId);
        }
    }

    return edges;
}
export function delaunay(nodes: Record<number, Node>): Edge[] {
    const edges: Edge[] = [];

    connectRoots(nodes, edges);
    const constelGroups = constellationGroups(nodes);

    for (const group of Object.values(constelGroups)) {
        if (group.length <= 1) continue;

        // prepare coordinates
        const points: [number, number][] = group.map(id => {
            const n = nodes[id];
            return [n.x, n.y];
        });

        // compute Delaunay triangulation
        const delaunay = Delaunator.from(points);

        // convert triangles into edges
        for (let t = 0; t < delaunay.triangles.length; t += 3) {
            const a = group[delaunay.triangles[t]];
            const b = group[delaunay.triangles[t + 1]];
            const c = group[delaunay.triangles[t + 2]];

            const triEdges: [number, number][] = [
                [a, b],
                [b, c],
                [c, a],
            ];

            for (const [from, to] of triEdges) {
                if (!edges.some(e => (e.from === from && e.to === to) || (e.from === to && e.to === from))) {
                    edges.push({ from, to });
                }
            }
        }
    }

    return edges;
}

export function denseSparse(
    nodes: Record<number, Node>,
    maxRadius = 500
): Edge[] {
    const edges: Edge[] = [];

    connectRoots(nodes, edges);
    const constelGroups = constellationGroups(nodes);

    const dist = (a: Node, b: Node) => Math.hypot(a.x - b.x, a.y - b.y);

    for (const group of Object.values(constelGroups)) {
        if (group.length <= 1) continue;

        const centerNode = nodes[group[0]];

        // sort nodes by distance from the center
        const sorted = group.slice(1).map(id => ({
            id,
            d: dist(centerNode, nodes[id])
        })).sort((a, b) => a.d - b.d);

        const connected = new Set<number>();
        connected.add(group[0]); // center node is connected

        for (const node of sorted) {
            // find closest connected node
            let closest: number | null = null;
            let minDist = Infinity;
            for (const cId of connected) {
                const d = dist(nodes[node.id], nodes[cId]);
                if (d < minDist) {
                    minDist = d;
                    closest = cId;
                }
            }

            if (closest !== null) {
                edges.push({ from: node.id, to: closest });
            }

            connected.add(node.id);

            // optional: add extra connections to nearby connected nodes for density
            const factor = 1 - Math.min(node.d / maxRadius, 1);
            const connectionRadius = 50 + factor * 200;

            for (const cId of connected) {
                if (cId === node.id || cId === closest) continue;
                const d = dist(nodes[node.id], nodes[cId]);
                if (d <= connectionRadius && Math.random() < factor) {
                    edges.push({ from: node.id, to: cId });
                }
            }
        }
    }

    return edges;
}