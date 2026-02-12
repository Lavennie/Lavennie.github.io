import {useState} from 'react'
import {Canvas} from '@react-three/fiber'

import Axolotl3D from './components/Axolotl3D.tsx'
import NavBar from './components/NavBar.tsx'
import Timelapse from './components/Timelapse.tsx'

import './App.css'
import MeshFlat from "./components/MeshFlat.tsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <NavBar />
            { /* SITE */ }
            <div className="app-background">

                <div className="site-container">

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
                            <MeshFlat meshPath={"coral_left.glb"} side={"left"} colorLight={"#FF9494"} colorMid={"#BF3D3D"} colorShade={"#683b59"} x={1.82} y={-0.8} z={4} scale={0.65} />
                            <MeshFlat meshPath={"coral_right.glb"} side={"right"} colorLight={"#FF9494"} colorMid={"#BF3D3D"} colorShade={"#683b59"} x={0} y={-2.7} z={0} scale={1.2} />
                        </Canvas>
                    </div>
                    <Timelapse videoUrl="https://www.youtube.com/watch?v=O-UlwWTJ2xM" thumbnailUrl="/art/kishiar_la_orr_at_a_party.jpg" />
                </div>
            </div>
        </>
    )
}

export default App
