import React from 'react'
import { Canvas } from '@react-three/fiber'
function Home() {
  return (
    <div className="flex justify-center">
      <h1 className="font-bold text-2xl text-blue-900">
        React and Tailwind with Vitejs!
      </h1>
      <div id="canvas-container">
        <Canvas>
          <pointLight position={[10, 10, 10]} />
          <mesh>
            <sphereBufferGeometry />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        </Canvas>
      </div>
    </div>
  )
}

export default Home