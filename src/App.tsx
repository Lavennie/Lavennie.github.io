import {useState} from 'react'
import {Canvas} from '@react-three/fiber'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Axolotl3D from './components/Axolotl3D.tsx'
import NavBar from './components/NavBar.tsx'

import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            { /* 3D OBJECTS - axolotl */ }
            <Canvas
                style={{
                    position: 'fixed',
                    inset: 0,
                    transform: "scale(1.3)",
                    transformOrigin: "110% 120%",
                    pointerEvents: 'none', // allows clicking through
                    zIndex: 0,
                }}
                camera={{position: [0, 1, 8]}}
            >
                <ambientLight intensity={0.5}/>
                <Axolotl3D/>
            </Canvas>

            { /* SITE */ }
            <NavBar />
            <div className="app-background">
                <div className="site-container">
                    <div>
                        <a href="https://vite.dev" target="_blank">
                            <img src={viteLogo} className="logo" alt="Vite logo"/>
                        </a>
                        <a href="https://react.dev" target="_blank">
                            <img src={reactLogo} className="logo react" alt="React logo"/>
                        </a>
                    </div>
                    <h1>Vite + React</h1>
                    <div className="card">
                        <button onClick={() => setCount((count) => count + 1)}>
                            count is {count}
                        </button>
                        <p>
                            Edit <code>src/App.tsx</code> and save to test HMR
                        </p>
                    </div>
                    <p className="read-the-docs">
                        Click on the Vite and React logos to learn more
                    </p>
                </div>
            </div>
        </>
    )
}

export default App
