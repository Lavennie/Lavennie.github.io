import './Constellations.module.css'
import React, { useRef, useEffect } from "react";

export default function Constellations() {
    const canvasRef = useRef(null);

    const starSprite = new Image();
    starSprite.src = "constellation_star.png";
    const starGlowSprite = new Image();
    starGlowSprite.src = "constellation_star_glow.png";

    useEffect(() => {
        const canvas = canvasRef.current;
        // Set canvas size to match window
        const ctx = canvas.getContext("2d");

        function resizeCanvas() {
            canvas.width = 2000;
            canvas.height = document.getElementById("canvas").parentElement.clientHeight / window.innerWidth * 2000;

            draw();
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);


            // draw nodes
            nodes.forEach((n) => {

                ctx.save();
                ctx.globalCompositeOperation = "lighter"; // additive blending

                const glowSize = 70;
                ctx.globalAlpha = 0.6;
                ctx.drawImage(
                    starGlowSprite,
                    0, 0, 128, 128,          // source rect
                    n.x - glowSize/2, n.y - glowSize/2, glowSize, glowSize // destination
                );

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
            edges.forEach((e) => {
                const from = nodes.find((n) => n.id === e.from);
                const to = nodes.find((n) => n.id === e.to);
                ctx.beginPath();
                ctx.moveTo(from.x, from.y);
                ctx.lineTo(to.x, to.y);
                ctx.strokeStyle = "#7AB7FF";
                ctx.lineWidth = 1;
                ctx.stroke();
            });
        }
        // Example nodes
        const nodes = [
            { id: 1, x: 100, y: 100 },
            { id: 2, x: 300, y: 200 },
            { id: 3, x: 1300, y: 250 },
        ];

        // Example edges
        const edges = [
            { from: 1, to: 2 },
            { from: 2, to: 3 },
            { from: 3, to: 1 },
        ];

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        // Draw edges (lines)
        /*edges.forEach((e) => {
            const from = nodes.find((n) => n.id === e.from);
            const to = nodes.find((n) => n.id === e.to);

            ctx.beginPath();
            ctx.moveTo(from.x, from.y); // start point
            ctx.lineTo(to.x, to.y);     // end point
            ctx.strokeStyle = "#7AB7FF";  // line color
            ctx.lineWidth = 2;          // thickness
            ctx.stroke();               // draw it
        });

        const starSprite = new Image();
        starSprite.src = "constellation_star.png";
        // Draw nodes (circles)

        starSprite.onload = () => {
            nodes.forEach((n) => {
                ctx.beginPath();
                ctx.arc(n.x, n.y, 10, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
                ctx.fillStyle = "#7AB7FF";  // fill color
                //ctx.fill();
                ctx.drawImage(
                    starSprite,
                    0, 0, 128, 128,
                    n.x-15, n.y-15, 30, 30
                );
            })
        }

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas(); // initial draw*/
    }, []);

    return <canvas ref={canvasRef} id="canvas" />;
};
