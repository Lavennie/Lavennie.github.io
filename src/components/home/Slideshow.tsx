import styles from "./Slideshow.module.css";
import React, { useState, useEffect, useRef } from "react";

type Slideshow = {
    title: string;
    description: string;
    image: string; // path to image or GIF
    link: string;  // link to subpage
};

const slides: Slideshow[] = [
    {
        title: "Art",
        description: "Illustrations  ·  Time-lapse",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dlbvhqg-c0e27d2b-b431-45f8-862d-b4b2adef77b6.jpg/v1/fill/w_1192,h_670,q_70,strp/kishiar_la_orr_at_a_party_by_lavennielil_dlbvhqg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9kbGJ2aHFnLWMwZTI3ZDJiLWI0MzEtNDVmOC04NjJkLWI0YjJhZGVmNzdiNi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.tyBjAvDM0gKt7ChZyKCNYIhz1gw2D9_61ty2WL7F6K0",
        link: "/art",
    },
    {
        title: "Coding",
        description: "Game Development · Procedural Generation · Simulations · Shaders",
        image: "slideshow/project_physics_character.png",
        link: "/projects",
    }
];

export default function Slideshow() {
    const [current, setCurrent] = useState(0);
    const slideCount = slides.length;
    const slideInterval = 5000;
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimer = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(nextSlide, slideInterval);
    };
    const nextSlide = () => {
        setCurrent(prev => (prev + 1) % slideCount);
    };

    useEffect(() => {
        resetTimer();
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [current]);

    const slide = slides[current];

    return (
        <div className={`${styles.slideshow}`}>
            <a href={slide.link}>
                <img src={slide.image} alt={slide.title} className={`${styles.slideImage}`} />
            </a>
            <div className={`${styles.slideText}`}>
                <h1>{slide.title}</h1>
                <p><b>{slide.description}</b></p>
            </div>
            <div className={`${styles.slideControls}`}>
                {slides.map((_, i) => (
                    <button
                        key={i}
                        className={i === current ? `${styles.active}` : ""}
                        onClick={() => setCurrent(i)}
                    />
                ))}
            </div>
        </div>
    );
}