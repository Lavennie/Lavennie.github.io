import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

type Point = { x: number; y: number };

function axolotlPath(scroll: number): Point {
  return {
    x: Math.sin(scroll / 200) * 200,
    y: Math.cos(scroll / 400) * 80,
  };
}

export default function Axolotl() {
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const onScroll  = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", onScroll );
    return () => window.removeEventListener("scroll", onScroll );
  }, []);

  const delta = 5; // scroll sampling distance

  const x = useTransform(scrollY, (s) => axolotlPath(s).x);
  const y = useTransform(scrollY, (s) => axolotlPath(s).y);
	
  const rotate = useTransform(scrollY, (s) => {
    const p1 = axolotlPath(s);
    const p2 = axolotlPath(s + delta);

    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;

    return Math.atan2(dy, dx) * (180 / Math.PI);
  });

  return (
    <motion.div
      style={{
        position: "fixed",
        left: "50%",
        top: "50%",
        x,
        y,
				rotate,
        fontSize: "3rem",
        pointerEvents: "none", // optional
        zIndex: 10,
      }}
    >
      🦎
    </motion.div>
  );
}
