import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Axolotl from './components/Axolotl.tsx'
import Axolotl3D from './components/Axolotl3D.tsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
		<>
		
		<Canvas
			style={{
			  position: 'fixed',
			  inset: 0,
			  pointerEvents: 'none', // allows clicking through
			  zIndex: 0,
			}}
			camera={{ position: [0, 0, 5] }}
		>
			<ambientLight intensity={0.5} />
			<directionalLight position={[2, 2, 2]} />
			<Axolotl3D />
		</Canvas>
			
		<div className="app-background">
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<Axolotl />
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
    </>
  )
}

export default App
