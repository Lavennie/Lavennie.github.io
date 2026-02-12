import {useState} from 'react'
import {Canvas} from '@react-three/fiber'

import Axolotl3D from './components/Axolotl3D.tsx'
import NavBar from './components/NavBar.tsx'

import './App.css'

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
                                position: 'absolute',
                                pointerEvents: 'none', // allows clicking through
                                top: 250,
                                height: "70%",
                                width: "90%",
                                margin: "auto",
                            }}
                            camera={{position: [0, 1, 8], zoom: 2.5}}
                        >
                            <ambientLight intensity={0.5}/>
                            <Axolotl3D/>
                        </Canvas>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
