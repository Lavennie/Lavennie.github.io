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
type AnimGraphFunc = (startId: number, nodes: Record<number, Node>, edges: Edge[]) => Edge[][];


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
function generateEdgesComplete(nodes: Record<number, Node>): Edge[] {
    const edges: Edge[] = [];

    // connect all multiples of 1000 to root 0
    const multiplesOf1000 = Object.keys(nodes)
        .map(Number)
        .filter(id => id % 1000 === 0 && id > 0);

    for (let i = 0; i < multiplesOf1000.length; i++) {
        edges.push({ from: 0, to: multiplesOf1000[i] });
    }

    // create complete graphs within each constellation
    const constelGroups: Record<string, number[]> = {};

    Object.entries(nodes).forEach(([key, node]) => {
        const id = Number(key);
        const c = node.constel;
        if (!c) return;
        if (!constelGroups[c]) constelGroups[c] = [];
        constelGroups[c].push(id);
    });

    for (const group of Object.values(constelGroups)) {
        for (let i = 0; i < group.length; i++) {
            for (let j = i + 1; j < group.length; j++) {
                edges.push({ from: group[i], to: group[j] });
            }
        }
    }

    return edges;
}
function generateEdgesTree(nodes: Record<number, Node>): Edge[] {
    const edges: Edge[] = [];

    // connect all multiples of 1000 to root 0
    const multiplesOf1000 = Object.keys(nodes)
        .map(Number)
        .filter(id => id % 1000 === 0 && id > 0);
    for (const id of multiplesOf1000) {
        edges.push({ from: 0, to: id });
    }

    // tree structure within each constellation
    const constelGroups: Record<string, number[]> = {};

    Object.entries(nodes).forEach(([key, node]) => {
        const id = Number(key);
        const c = node.constel;
        if (!c) return;
        if (!constelGroups[c]) constelGroups[c] = [];
        constelGroups[c].push(id);
    });

    for (const group of Object.values(constelGroups)) {
        // Sort or shuffle group if you want specific order
        for (let i = 1; i < group.length; i++) {
            // Connect each node to the previous node → creates a simple path/tree
            edges.push({ from: group[i - 1], to: group[i] });
        }
    }

    return edges;
}
function generateEdgesTreeShortest(nodes: Record<number, Node>): Edge[] {
    const edges: Edge[] = [];

    // connect all multiples of 1000 to root 0
    const multiplesOf1000 = Object.keys(nodes)
        .map(Number)
        .filter(id => id % 1000 === 0 && id > 0);

    for (const id of multiplesOf1000) {
        edges.push({ from: 0, to: id });
    }

    // nearest-neighbor trees within each constellation
    const constelGroups: Record<string, number[]> = {};

    Object.entries(nodes).forEach(([key, node]) => {
        const id = Number(key);
        const c = node.constel;
        if (!c) return;
        if (!constelGroups[c]) constelGroups[c] = [];
        constelGroups[c].push(id);
    });

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

function generateEdgesTrianglesShortest(nodes: Record<number, Node>, triangleChance = 0.05): Edge[] {
    const edges: Edge[] = [];

    // connect all multiples of 1000 to root 0
    const multiplesOf1000 = Object.keys(nodes)
        .map(Number)
        .filter(id => id % 1000 === 0 && id > 0);

    for (const id of multiplesOf1000) {
        edges.push({from: 0, to: id});
    }

    // nearest-neighbor tree within each constellation
    const constelGroups: Record<string, number[]> = {};

    Object.entries(nodes).forEach(([key, node]) => {
        const id = Number(key);
        const c = node.constel;
        if (!c) return;
        if (!constelGroups[c]) constelGroups[c] = [];
        constelGroups[c].push(id);
    });

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
function generateEdgesTrianglesCompact(
    nodes: Record<number, Node>,
    baseAngleDeg = 60,       // minimal angle for very short edges
    maxAngleDeg = 100,       // maximal angle for long edges
    maxTriangleLength = 150  // max distance to consider triangles
): Edge[] {
    const edges: Edge[] = [];

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

    // Connect multiples of 1000 to root
    const multiplesOf1000 = Object.keys(nodes)
        .map(Number)
        .filter(id => id % 1000 === 0 && id > 0);
    for (const id of multiplesOf1000) {
        edges.push({ from: 0, to: id });
    }

    // Nearest-neighbor tree per constellation
    const constelGroups: Record<string, number[]> = {};
    Object.entries(nodes).forEach(([key, node]) => {
        const id = Number(key);
        if (!node.constel) return;
        if (!constelGroups[node.constel]) constelGroups[node.constel] = [];
        constelGroups[node.constel].push(id);
    });

    for (const group of Object.values(constelGroups)) {
        if (group.length <= 1) continue;

        const connected = new Set<number>();
        connected.add(group[0]);
        const unconnected = new Set(group.slice(1));

        // Build nearest-neighbor tree
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

        // Add weighted triangles
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
            const current = queue.shift();
            if (!current === undefined || visited.has(current)) continue;
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
function randomizeNodePositions(
    nodes: Record<number, Node>,
    constellations: Record<string, Constellation>,
    extraRadius = 0,
    minDistance = 50
) {
    const dist = (a: { x: number; y: number }, b: { x: number; y: number }) =>
        Math.hypot(a.x - b.x, a.y - b.y);

    for (const [constelKey, constel] of Object.entries(constellations)) {
        // get nodes belonging to this constellation
        const group = Object.entries(nodes)
            .filter(([_, node]) => node.constel === constelKey)
            .map(([id]) => Number(id));

        const placed: { x: number; y: number }[] = [];

        for (const id of group) {
            if (id % 1000 === 0)
                continue;
            let attempts = 0;

            while (attempts < 100) {
                attempts++;

                // Random polar coordinates
                const angle = Math.random() * Math.PI * 2;
                const r = Math.sqrt(Math.random()) * (constel.size / 2 + extraRadius);

                const x = r * Math.cos(angle);
                const y = r * Math.sin(angle);

                const candidate = { x, y };

                // ensure no overlap
                if (placed.every(p => dist(p, candidate) >= minDistance)) {
                    nodes[id].x = x;
                    nodes[id].y = y;
                    placed.push(candidate);
                    break;
                }
            }
        }
    }
    return nodes;
}
function createNodesFromList(
    rootPos: [number, number],
    entries: [string, string][],                  // [constellation, imagePath]
    constellationBaseIds: Record<string, [number, number]>  // map constellation → starting id of constellation (multiple of 1000)
): Record<number, Node> {

    const nodes: Record<number, Node> = {};

    // global root
    nodes[0] = { x: rootPos[0], y: rootPos[1] };

    // keep counters per constellation
    const counters: Record<string, number> = {};

    for (const [constel, imagePath] of entries) {

        const baseId = constellationBaseIds[constel][0];
        if (baseId === undefined) {
            throw new Error(`Missing base id for constellation: ${constel}`);
        }

        // create root node if not already created
        if (!nodes[baseId]) {
            nodes[baseId] = {
                constel,
                x: 0,
                y: 0
            };
            counters[constel] = 0;
        }

        counters[constel]++;

        const nodeId = baseId + counters[constel];

        nodes[nodeId] = {
            constel,
            x: 0,
            y: 0,
            popup: Object.assign(new Image(), { src: imagePath })
        };
    }

    // extra nodes without popup image
    for (const [constel, [baseId, extraNodes]] of Object.entries(constellationBaseIds)) {
        for (let i = 0; i < extraNodes; i++) {
            counters[constel]++;
            const nodeId = baseId + counters[constel];

            nodes[nodeId] = {
                constel,
                x: 0,
                y: 0
            };
        }
    }

    return nodes;
}









export default function Constellations() {
    const canvasRef = useRef(null);
    const hoveredRef = useRef<number | null>(null);
    const [hovered, setHovered] = useState<number | null>(null);
    const mousePos = useRef({ x: 0, y: 0 });

    const starSprite = Object.assign(new Image(), { src: "constellation_star.png" });
    const starGraySprite = Object.assign(new Image(), { src: "constellation_star_gray.png" });
    const starGlowSprite = Object.assign(new Image(), { src: "constellation_star_glow.png" });

    let startTime = performance.now();
    const stretchDuration = 500;
    const betweenDelay = 1000;
    const fadeDelay = 500;

    // other algorithms are too slow, since they extend one edge at a time
    const graphFuncs : AnimGraphFunc[] = [
        bfs,
        //dfs,
        //edgesByLengthIncrease,
        //edgesByLengthDecrease,
    ];

    const constellations : Record<string, Constellation> = {
        "genshin": {x: 300, y: 100, size: 800, img: Object.assign(new Image(), { src: "constellations/constellation_genshin.png" }) },
        "starrail" : { x: 1000, y: 1000, size: 700, img: Object.assign(new Image(), { src: "constellations/constellation_star_rail.png" }) }
    };
    const stars : [string, string][] = [
        ["genshin", "constellations/genshin_actopan_underground.png"],
        ["genshin", "constellations/genshin_ancient_sacred_mountain.png"],
        ["genshin", "constellations/genshin_ashveil_peak_eye.png"],
        ["genshin", "constellations/genshin_chasm_nest.png"],
        ["genshin", "constellations/genshin_chasm_overground.png"],
        ["genshin", "constellations/genshin_chasm_underground.png"],
        ["genshin", "constellations/genshin_chenyu_vale.png"],
        ["genshin", "constellations/genshin_dragonspine.png"],
        ["genshin", "constellations/genshin_dragonspine_dragon_heart.png"],
        ["genshin", "constellations/genshin_dragonspine_dragon_ribs.png"],
        ["genshin", "constellations/genshin_enkanomiya_corals.png"],
        ["genshin", "constellations/genshin_fontaine_city.png"],
        ["genshin", "constellations/genshin_fontaine_outside.png"],
        ["genshin", "constellations/genshin_fontaine_water_cubes.png"],
        ["genshin", "constellations/genshin_hiisi_island.png"],
        ["genshin", "constellations/genshin_icewind_suite.png"],
        ["genshin", "constellations/genshin_inazuma_city.png"],
        ["genshin", "constellations/genshin_inazuma_snake_bones.png"],
        ["genshin", "constellations/genshin_inazuma_sunset.png"],
        ["genshin", "constellations/genshin_liyue.png"],
        ["genshin", "constellations/genshin_mondstadt.png"],
        ["genshin", "constellations/genshin_mondstadt_cathedral.png"],
        ["genshin", "constellations/genshin_mondstadt_city.png"],
        ["genshin", "constellations/genshin_natlan_city.png"],
        ["genshin", "constellations/genshin_natlan_sky_crack.png"],
        ["genshin", "constellations/genshin_nodkrai_purple.png"],
        ["genshin", "constellations/genshin_ochkanatlan.png"],
        ["genshin", "constellations/genshin_opera_epiclese_front.png"],
        ["genshin", "constellations/genshin_opera_epiclese_inside.png"],
        ["genshin", "constellations/genshin_paha_isle.png"],
        ["genshin", "constellations/genshin_pillar_of_embla.png"],
        ["genshin", "constellations/genshin_royal_court_of_the_seelie.png"],
        ["genshin", "constellations/genshin_sea_of_bygone_eras.png"],
        ["genshin", "constellations/genshin_seirai_island.png"],
        ["genshin", "constellations/genshin_sumeru_city.png"],
        ["genshin", "constellations/genshin_sumeru_tornado.png"],
        ["genshin", "constellations/genshin_summer_resort.png"],
        ["genshin", "constellations/genshin_sunset.png"],
        ["genshin", "constellations/genshin_wolf_web_event.png"],
        ["starrail", "constellations/starrail_evil_dromas.png"],
        ["starrail", "constellations/starrail_ipc_stelle.png"],
        ["starrail", "constellations/starrail_knowing_bug.png"],
        ["starrail", "constellations/starrail_mydei_stelle_danheng.png"],
    ];
    const nodes = createNodesFromList([1000, 1000], stars, { "genshin": [1000, 20], "starrail": [2000, 10]});

    randomizeNodePositions(nodes, constellations, 80);

    const edges = generateEdgesTrianglesCompact(nodes);
    let animGraph = randomGraphFunc()(0, nodes, edges);


    function randomGraphFunc () {
        return graphFuncs[Math.floor(Math.random() * graphFuncs.length)];
    }
    function nodePosX(node : Node) {
        return (node.constel) ? constellations[node.constel].x + constellations[node.constel].size / 2 + node.x : node.x;
    }
    function nodePosY(node : Node) {
        return (node.constel) ? constellations[node.constel].y + constellations[node.constel].size / 2 + node.y : node.y;
    }

    function getClosestNodeId() {
        let closestId = 1;
        let minDist = Number.MAX_VALUE;

        for (const [id, n] of Object.entries(nodes)) {
            const dist = Math.hypot(nodePosX(n) - mousePos.current.x, nodePosY(n) - mousePos.current.y);
            if (dist < minDist) {
                minDist = dist;
                closestId = Number(id);
            }
        }

        return closestId;
    }

    function handleMouseMove(e: React.MouseEvent<HTMLCanvasElement>) {
        const canvas = canvasRef.current!;
        const rect = canvas.getBoundingClientRect();
        // screen coord -> canvas coord
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const mouseX = (e.clientX - rect.left) * scaleX;
        const mouseY = (e.clientY - rect.top) * scaleY;

        mousePos.current.x = (e.clientX - rect.left) * scaleX;
        mousePos.current.y = (e.clientY - rect.top) * scaleY;

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

            ctx.globalCompositeOperation = "source-over";
        }
        function draw(time) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // constellation images
            for (const c of Object.values(constellations)) {
                drawConstellationImage(c.img, "#1b1b1e", c.x, c.y, c.size);
            }

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

            // nodes
            for (const n of Object.values(nodes)) {
                const x = nodePosX(n);
                const y = nodePosY(n);

                ctx.save();

                // glow
                ctx.globalCompositeOperation = "lighter"; // additive blending
                const glowSize = (n.popup) ? 70 : 30;
                ctx.globalAlpha = 0.6;
                ctx.drawImage(
                    starGlowSprite,
                    0, 0, 128, 128,          // source rect
                    x - glowSize/2, y - glowSize/2, glowSize, glowSize // destination
                );

                // star sprite
                ctx.globalAlpha = 1;
                ctx.globalCompositeOperation = "source-over";
                ctx.drawImage(
                    (n.popup) ? starSprite : starGraySprite,
                    0, 0, 128, 128,
                    x - 10, y - 10, 20, 20
                );

                ctx.restore();
            };
            // hovered popup
            if (hoveredRef.current){
                const n = Object.entries(nodes).find(([id, _]) => Number(id) === hoveredRef.current)[1];
                if (n.popup) {
                    const height = 400;
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
                animGraph = randomGraphFunc()(getClosestNodeId(), nodes, edges);
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
