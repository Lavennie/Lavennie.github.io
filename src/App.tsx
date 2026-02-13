import {useState} from 'react'
import {Canvas} from '@react-three/fiber'

import Axolotl3D from './components/Axolotl3D.tsx'
import NavBar from './components/NavBar.tsx'
import Footer from './components/Footer.tsx'
import { CreateTimelapseList, timelapseListHeight } from "./assets/TimelapseLibrary.tsx"

import './App.css'
import MeshFlat from "./components/MeshFlat.tsx";
import Bubble from "./components/Bubble.tsx";
import Sprite from "./components/Sprite.tsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <NavBar colorMain={"#E5EBFE"} colorSide={"#C1B4FF"} textColor={"#714FFF"} />
            { /* SITE */ }
            <div className="app-background">

                <div className="site-container" style={{height: `calc(${timelapseListHeight()}px + 100vh + 100px)`}}>
                    { /* axolotl swimming - fixed size image */ }
                    <div className="axolotl-scene">
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
                    <div className={"timelapse-list"}>
                        <CreateTimelapseList startTop={10}/>
                    </div>
                </div>
            </div>
            <Footer colorMain={"#E5EBFE"} colorSide={"#C1B4FF"} logoHue={204}/>
        </>
    )
}

export default App
