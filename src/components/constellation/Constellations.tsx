import './Constellations.module.css'
import * as Traversal from "./graphTraversal.tsx";
import * as Construction from "./graphConstruction.tsx";
import type {Node, Constellation, TraverseGraphFunc, ConstructGraphFunc } from "./types";
import React, { useRef, useEffect } from "react";

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
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const hoveredRef = useRef<number | null>(null);
    const mousePos = useRef({ x: 0, y: 0 });

    const starSprite = Object.assign(new Image(), { src: "constellation_star.png" });
    const starGraySprite = Object.assign(new Image(), { src: "constellation_star_gray.png" });
    const starGlowSprite = Object.assign(new Image(), { src: "constellation_star_glow.png" });

    let startTime = performance.now();
    const stretchDuration = 500;
    const betweenDelay = 1000;
    const fadeDelay = 500;

    // other algorithms are too slow, since they extend one edge at a time
    const traversalFuncs : TraverseGraphFunc[] = [
        Traversal.bfs,
        //Traversal.dfs,
        //Traversal.edgesByLengthIncrease,
        //Traversal.edgesByLengthDecrease,
    ];
    const constructionFuncs : ConstructGraphFunc[] = [
        //Construction.complete, // it lags
        Construction.trianglesShortest,
        Construction.trianglesCompact,
        Construction.directionalPath,
        Construction.spiral,
        Construction.snowflake,
        Construction.spiderweb,
        Construction.rings,
        Construction.ice,
        Construction.crystal,
        Construction.delaunay,
        Construction.denseSparse,
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

    let edges = randomConstructionFunc()(nodes);
    let animGraph = randomTraversalFunc()(0, nodes, edges);

    // ---------- HELPER FUNCTIONS ----------
    function randomTraversalFunc () {
        return traversalFuncs[Math.floor(Math.random() * traversalFuncs.length)];
    }
    function randomConstructionFunc () {
        return constructionFuncs[Math.floor(Math.random() * constructionFuncs.length)];
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

        const hitEntry = Object.entries(nodes).find(([, n]) =>
            Math.hypot(nodePosX(n) - mouseX, nodePosY(n) - mouseY) <= 20);
        hoveredRef.current = (hitEntry) ? Number(hitEntry[0]) : null;
    }
    // -------- END HELPER FUNCTIONS --------


    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        // Set canvas size to match window
        const ctx = canvas.getContext("2d");

        function lerp(a: number, b: number, t: number) {
            return a + (b - a) * t; // t ∈ [0,1]
        }
        function resizeCanvas() {
            const canvas = canvasRef.current;
            if (!canvas) return; // exit if not mounted

            const parent = canvas.parentElement;
            if (!parent) return; // exit if no parent

            canvas.width = 2000;
            canvas.height = (parent.clientHeight) / window.innerWidth * 2000;

            draw(performance.now());
        }
        function drawConstellationImage(img: HTMLImageElement, color: string, x: number, y: number, size: number) {
            if (!ctx) return;
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
        function draw(time: number) {
            if (!ctx || !canvas) return;
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
                    const fromEntry = Object.entries(nodes).find(([id,]) => Number(id) === e.from);
                    if (!fromEntry) return;
                    const from = fromEntry[1];
                    const toEntry = Object.entries(nodes).find(([id,]) => Number(id) === e.to);
                    if (!toEntry) return;
                    const to = toEntry[1];
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
                const currentEntry = Object.entries(nodes).find(([id,]) => Number(id) === hoveredRef.current);
                if (currentEntry) {
                    const n = currentEntry[1];
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
            }

            if (time - startTime - animGraph.length * stretchDuration > betweenDelay + fadeDelay + betweenDelay) {
                startTime = performance.now();
                edges = randomConstructionFunc()(nodes);
                animGraph = randomTraversalFunc()(getClosestNodeId(), nodes, edges);
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

    return <canvas ref={canvasRef} id="canvas" onMouseMove={handleMouseMove}/>;
};
