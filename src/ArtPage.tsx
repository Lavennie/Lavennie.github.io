import styles from './ArtPage.module.css'
import {Canvas} from '@react-three/fiber'
import * as React from 'react';

import Axolotl3D from './components/Axolotl3D.tsx'
import NavBar from './components/NavBar.tsx'
import Footer from './components/Footer.tsx'
import Timelapse from './components/Timelapse.tsx'

import MeshFlat from "./components/MeshFlat.tsx";
import Bubble from "./components/Bubble.tsx";
import Sprite from "./components/Sprite.tsx";
import type {ArtMeta} from "./content/types.ts";

export default function ArtPage() {
    const modules = import.meta.glob('./content/art/*.meta.ts', {eager: true});

    const allArt = sortProjects(Object.values(modules)
        .map((m: any) => m.default));

    let height = 210;
    {
        let lastYear: string | null = null;
        for (const art of allArt) {
            const year = art.dateEnd.split("/")[0];
            if (year != lastYear) {
                height += 210;
                lastYear = year;
            }
            else {
                height += art.yGapAfter;
            }
        }
    }

    return (
        <>
            <NavBar colorMain={"#E5EBFE"} colorSide={"#C1B4FF"} textColor={"#714FFF"} bannerY={30}
                    bannerUrl={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dlbg3it-b24505b4-db82-40c5-bf79-ea683e144c4b.jpg/v1/fill/w_1192,h_670,q_70,strp/girl_reach_out_to_the_rain_by_lavennielil_dlbg3it-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9kbGJnM2l0LWIyNDUwNWI0LWRiODItNDBjNS1iZjc5LWVhNjgzZTE0NGM0Yi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.93MnTofdI-W-ncsWuy9_A_GztWdpBOYlabSH2Fsd9hI"}/>
            { /* SITE */ }
            <div className={`app-background ${styles.appBackground}`}>
                <div className={`site-container ${styles.siteContainer}`} style={{height: `calc(${height}px + 100vh + 100px)`}}>
                    { /* axolotl swimming - fixed size image */ }
                    <div className={styles.axolotlScene}>
                        { /* 3D OBJECTS - axolotl */ }
                        <Canvas
                            style={{
                                position: 'relative',
                                pointerEvents: 'none', // allows clicking through
                                height: "100%",
                                margin: "auto",
                            }}
                            camera={{position: [0, 1, 8], zoom: 2}}
                        >
                            <ambientLight intensity={0.5}/>
                            <Axolotl3D/>
                            <MeshFlat meshPath={"coral_left.glb"} side={"center"} colorLight={"#FF9494"} colorMid={"#BF3D3D"} colorShade={"#683b59"} x={-2.5} y={-0.8} z={4} scale={0.65} />
                            <MeshFlat meshPath={"coral_right.glb"} side={"center"} colorLight={"#FF9494"} colorMid={"#BF3D3D"} colorShade={"#683b59"} x={5} y={-2.7} z={0} scale={1.2} />
                            <Bubble x={0} y={-0.3}/>
                            <Bubble x={-0.4} y={1}/>
                            <Bubble x={0.7} y={1.3} z={2}/>
                            <Bubble x={-0.7} y={1.3} z={4.3}/>
                            <Bubble x={0.3} y={1.5}/>
                            <Bubble x={-1} y={-0.2}/>
                            <Bubble x={-1.4} y={0.5} z={4.2}/>
                            <Bubble x={-1.4} y={0.5} z={2}/>
                            <Bubble x={3.5} y={-1.6} z={0.8}/>
                            <Bubble x={3.5} y={2} z={-4}/>
                            <Bubble x={-3.5} y={2.3} z={-4}/>
                            <Bubble x={0} y={2.3} z={-4}/>
                            <Bubble x={-1} y={1.7} z={-4}/>
                            <Bubble x={2} y={1.5} z={-4}/>
                            <Bubble x={2} y={3} z={-6}/>
                            <Bubble x={-1} y={3} z={-6}/>
                            <Bubble x={5} y={3} z={-6}/>
                            <Bubble x={6} y={2.4} z={-6}/>
                            <Bubble x={-5} y={3} z={-6}/>
                            <Bubble x={3} y={-1} z={0.8}/>
                            <Bubble x={3.2} y={-0.6} z={0.8}/>
                            <Bubble x={-1.4} y={1.5}/>
                            <Sprite texturePath={"algae1.png"} x={-2.2} y={0} z={1} size={4}/>
                            <Sprite texturePath={"algae1.png"} x={2.5} y={-0.2} z={0} size={3}/>
                            <Sprite texturePath={"algae1.png"} x={-0.5} y={-1.15} z={4} size={2.5}/>
                            <Sprite texturePath={"algae1.png"} x={0} y={1} z={-5} size={2} alpha={0.5}/>
                            <Sprite texturePath={"algae1.png"} x={2} y={0.5} z={-5} size={2} alpha={0.5}/>
                            <Sprite texturePath={"algae1.png"} x={4} y={0.5} z={-5} size={2}/>
                            <Sprite texturePath={"algae1.png"} x={-4} y={0.5} z={-5} size={2}/>
                            <Sprite texturePath={"algae1.png"} x={0} y={-2} z={-5} size={4}/>
                            <Sprite texturePath={"algae1.png"} x={1.7} y={-2.5} z={-4} size={3}/>
                            <Sprite texturePath={"algae1.png"} x={1} y={-2.5} z={-3.5} size={6}/>
                            <Sprite texturePath={"algae1.png"} x={-2} y={-2.5} z={-3.6} size={6}/>
                            <Sprite texturePath={"algae1.png"} x={4} y={-2.5} z={-3.6} size={6}/>
                            <Sprite texturePath={"algae1.png"} x={7} y={-1.5} z={-6} size={6} alpha={0.7}/>
                            <Sprite texturePath={"algae2.png"} x={-1.7} y={0} z={5} size={5} alpha={0.8}/>
                            <Sprite texturePath={"algae2.png"} x={1} y={-1} z={5} size={3}/>
                            <Sprite texturePath={"algae2.png"} x={2} y={0} z={5} size={5} alpha={0.8}/>
                            <Sprite texturePath={"algae2.png"} x={-3} y={0} z={-3} size={5} alpha={0.5}/>
                            <Sprite texturePath={"algae2.png"} x={-2} y={0} z={-4} size={4} alpha={0.5}/>
                            <Sprite texturePath={"algae2.png"} x={1} y={0} z={-4} size={4} alpha={0.5}/>
                            <Sprite texturePath={"algae2.png"} x={3} y={0} z={-3} size={6}/>
                            <Sprite texturePath={"algae2.png"} x={-1} y={0} z={-5} size={3.4} alpha={0.5}/>
                            <Sprite texturePath={"algae2.png"} x={5} y={0} z={-5} size={5}/>
                            <Sprite texturePath={"algae2.png"} x={0} y={-6} z={-4} size={6}/>
                            <Sprite texturePath={"algae2.png"} x={1} y={-4} z={-3} size={6}/>
                            <Sprite texturePath={"algae2.png"} x={-2} y={-4} z={-3} size={6}/>
                        </Canvas>
                    </div>
                    <div className={styles.timelapseList}>
                        {
                            (() => {
                                let elements: React.ReactNode[] = [];
                                let lastYear: string | null = null;
                                let cumulativeY = 10;

                                allArt.forEach(art => {
                                    // extract year from dateEnd (assuming "YYYY/MM/DD")
                                    const year = art.dateEnd.split("/")[0];

                                    // year header
                                    if (year !== lastYear) {
                                        elements.push(
                                            <div style={{
                                                position: "absolute",
                                                top: `${cumulativeY}px`,
                                                fontFamily: "'Shantell Sans', cursive",
                                                fontSize: "6rem",
                                                textAlign: "center",
                                                width: "70%",
                                                left: "15%",
                                                color: "#ACA0FF",
                                                backgroundColor: "#DCDDFEBB",
                                                borderRadius: "50% 50% 25% 25%",
                                            }}>
                                                <b>{year}</b>
                                                {/* separator */}
                                                <div
                                                    style={{
                                                        width: "60%",
                                                        height: "8px",
                                                        borderRadius: "4px",
                                                        backgroundColor: "#ACA0FF",
                                                        marginTop: "-5px",
                                                        marginLeft: "auto",
                                                        marginRight: "auto",
                                                        marginBottom: "20px",
                                                    }}/>
                                            </div>
                                        );
                                        cumulativeY += 200; // spacing after header
                                        lastYear = year;
                                    }

                                    // art entry
                                    elements.push(
                                        <TimelapseById
                                            thumbnailUrl={art.image}
                                            videoUrl={art.link}
                                            style={{
                                                position: "absolute",
                                                top: `${cumulativeY}px`,
                                                left: `${art.x}%`,
                                            }}
                                        />
                                    );
                                    cumulativeY += art.yGapAfter;
                                });

                                return elements;
                            })()
                        }
                    </div>
                </div>
            </div>
            <Footer colorMain={"#E5EBFE"} colorSide={"#C1B4FF"} logoHue={204} textColor={"#714FFF"}/>
        </>
    )
}


type TimelapseByIdProps = {
    thumbnailUrl: string;
    videoUrl?: string;
    style?: React.CSSProperties;
};
function TimelapseById({ thumbnailUrl, videoUrl, style } : TimelapseByIdProps) {
    return (
        <div className={"timelapse-frame"} style={style}>
            <Timelapse videoUrl={videoUrl ?? ""} thumbnailUrl={thumbnailUrl} />
        </div>);
}


// convert the date string to a comparable number
function parseProjectDate(date: string): number {
    if (date === "now") return Date.now();

    // Negative year -> far in the past
    if (date.startsWith("-")) return new Date(date.slice(1) + "/01/01").getTime() * -1;

    // replace missing month/day with 1
    const parts = date.split("/").map(p => (p === "?" ? "1" : p));
    const normalized = parts.join("/");

    const timestamp = new Date(normalized).getTime();
    return isNaN(timestamp) ? 0 : timestamp;
}

function sortProjects(projects: ArtMeta[]): ArtMeta[] {
    return projects.sort((a, b) => {
        // sort by date
        const dateA = parseProjectDate(a.dateEnd);
        const dateB = parseProjectDate(b.dateEnd);
        return dateB - dateA;
    });
}