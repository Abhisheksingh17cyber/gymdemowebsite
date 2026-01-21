'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Float, Environment, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

// Animated Muscular Figure performing bicep curls
function MuscularFigure() {
  const groupRef = useRef<THREE.Group>(null)
  const rightArmRef = useRef<THREE.Group>(null)
  const leftArmRef = useRef<THREE.Group>(null)
  const dumbbellRightRef = useRef<THREE.Mesh>(null)
  const dumbbellLeftRef = useRef<THREE.Mesh>(null)
  const [curlPhase, setCurlPhase] = useState(0)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    // Bicep curl animation - alternating arms
    const rightCurl = Math.sin(time * 2) * 0.5 + 0.5 // 0 to 1
    const leftCurl = Math.sin(time * 2 + Math.PI) * 0.5 + 0.5 // Offset by PI for alternating
    
    // Animate right arm
    if (rightArmRef.current) {
      rightArmRef.current.rotation.x = -rightCurl * 2.2
    }
    
    // Animate left arm
    if (leftArmRef.current) {
      leftArmRef.current.rotation.x = -leftCurl * 2.2
    }
    
    // Subtle body movement
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.1
      groupRef.current.position.y = Math.sin(time * 2) * 0.02
    }
    
    setCurlPhase(rightCurl)
  })

  // Material for the body
  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: '#d4a574',
    roughness: 0.6,
    metalness: 0.1,
  })

  const muscleMaterial = new THREE.MeshStandardMaterial({
    color: '#c9956a',
    roughness: 0.5,
    metalness: 0.15,
  })

  const shortsMaterial = new THREE.MeshStandardMaterial({
    color: '#1a1a1a',
    roughness: 0.8,
    metalness: 0,
  })

  const dumbbellMaterial = new THREE.MeshStandardMaterial({
    color: '#2a2a2a',
    roughness: 0.3,
    metalness: 0.8,
  })

  const redMaterial = new THREE.MeshStandardMaterial({
    color: '#dc2626',
    roughness: 0.4,
    metalness: 0.3,
    emissive: '#dc2626',
    emissiveIntensity: 0.2,
  })

  return (
    <group ref={groupRef} position={[0, -1.5, 0]}>
      {/* Torso */}
      <mesh position={[0, 1.8, 0]} material={bodyMaterial}>
        <capsuleGeometry args={[0.4, 0.8, 8, 16]} />
      </mesh>
      
      {/* Chest muscles */}
      <mesh position={[-0.15, 2, 0.25]} material={muscleMaterial}>
        <sphereGeometry args={[0.2, 16, 16]} />
      </mesh>
      <mesh position={[0.15, 2, 0.25]} material={muscleMaterial}>
        <sphereGeometry args={[0.2, 16, 16]} />
      </mesh>
      
      {/* Abs */}
      {[0, -0.15, -0.3, -0.45].map((y, i) => (
        <group key={i}>
          <mesh position={[-0.08, 1.7 + y, 0.3]} material={muscleMaterial}>
            <boxGeometry args={[0.12, 0.1, 0.1]} />
          </mesh>
          <mesh position={[0.08, 1.7 + y, 0.3]} material={muscleMaterial}>
            <boxGeometry args={[0.12, 0.1, 0.1]} />
          </mesh>
        </group>
      ))}
      
      {/* Head */}
      <mesh position={[0, 2.7, 0]} material={bodyMaterial}>
        <sphereGeometry args={[0.25, 16, 16]} />
      </mesh>
      
      {/* Neck */}
      <mesh position={[0, 2.4, 0]} material={bodyMaterial}>
        <cylinderGeometry args={[0.12, 0.15, 0.2, 16]} />
      </mesh>
      
      {/* Shorts */}
      <mesh position={[0, 1.1, 0]} material={shortsMaterial}>
        <cylinderGeometry args={[0.35, 0.4, 0.4, 16]} />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.2, 0.5, 0]} material={bodyMaterial}>
        <capsuleGeometry args={[0.15, 0.6, 8, 16]} />
      </mesh>
      <mesh position={[0.2, 0.5, 0]} material={bodyMaterial}>
        <capsuleGeometry args={[0.15, 0.6, 8, 16]} />
      </mesh>
      
      {/* Shoulders */}
      <mesh position={[-0.5, 2.2, 0]} material={muscleMaterial}>
        <sphereGeometry args={[0.18, 16, 16]} />
      </mesh>
      <mesh position={[0.5, 2.2, 0]} material={muscleMaterial}>
        <sphereGeometry args={[0.18, 16, 16]} />
      </mesh>
      
      {/* Right Arm Group */}
      <group ref={rightArmRef} position={[0.5, 2.1, 0]}>
        {/* Upper Arm */}
        <mesh position={[0.15, -0.2, 0]} rotation={[0, 0, -0.3]} material={bodyMaterial}>
          <capsuleGeometry args={[0.1, 0.35, 8, 16]} />
        </mesh>
        {/* Bicep bulge */}
        <mesh position={[0.12, -0.15, 0.08]} material={muscleMaterial}>
          <sphereGeometry args={[0.12, 16, 16]} />
        </mesh>
        {/* Forearm */}
        <mesh position={[0.25, -0.55, 0]} rotation={[0, 0, -0.3]} material={bodyMaterial}>
          <capsuleGeometry args={[0.08, 0.3, 8, 16]} />
        </mesh>
        {/* Dumbbell */}
        <group position={[0.3, -0.8, 0]}>
          {/* Handle */}
          <mesh material={dumbbellMaterial}>
            <cylinderGeometry args={[0.03, 0.03, 0.25, 16]} />
          </mesh>
          {/* Weights */}
          <mesh position={[0, 0.15, 0]} material={redMaterial}>
            <cylinderGeometry args={[0.08, 0.08, 0.06, 16]} />
          </mesh>
          <mesh position={[0, -0.15, 0]} material={redMaterial}>
            <cylinderGeometry args={[0.08, 0.08, 0.06, 16]} />
          </mesh>
        </group>
      </group>
      
      {/* Left Arm Group */}
      <group ref={leftArmRef} position={[-0.5, 2.1, 0]}>
        {/* Upper Arm */}
        <mesh position={[-0.15, -0.2, 0]} rotation={[0, 0, 0.3]} material={bodyMaterial}>
          <capsuleGeometry args={[0.1, 0.35, 8, 16]} />
        </mesh>
        {/* Bicep bulge */}
        <mesh position={[-0.12, -0.15, 0.08]} material={muscleMaterial}>
          <sphereGeometry args={[0.12, 16, 16]} />
        </mesh>
        {/* Forearm */}
        <mesh position={[-0.25, -0.55, 0]} rotation={[0, 0, 0.3]} material={bodyMaterial}>
          <capsuleGeometry args={[0.08, 0.3, 8, 16]} />
        </mesh>
        {/* Dumbbell */}
        <group position={[-0.3, -0.8, 0]}>
          {/* Handle */}
          <mesh material={dumbbellMaterial}>
            <cylinderGeometry args={[0.03, 0.03, 0.25, 16]} />
          </mesh>
          {/* Weights */}
          <mesh position={[0, 0.15, 0]} material={redMaterial}>
            <cylinderGeometry args={[0.08, 0.08, 0.06, 16]} />
          </mesh>
          <mesh position={[0, -0.15, 0]} material={redMaterial}>
            <cylinderGeometry args={[0.08, 0.08, 0.06, 16]} />
          </mesh>
        </group>
      </group>
    </group>
  )
}

// Floating text instructions
function InstructionText() {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Text
        position={[0, 2.5, 0]}
        fontSize={0.25}
        color="#dc2626"
        font="/fonts/Oswald-Bold.ttf"
        anchorX="center"
        anchorY="middle"
      >
        BICEP CURLS
      </Text>
      <Text
        position={[0, 2.2, 0]}
        fontSize={0.12}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Keep your elbows close to your body!
      </Text>
    </Float>
  )
}

// Particle effects around the figure
function Particles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 100
  
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 5
    positions[i * 3 + 1] = Math.random() * 4
    positions[i * 3 + 2] = (Math.random() - 0.5) * 5
  }
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#dc2626"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// Platform/Ground
function Platform() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
      <circleGeometry args={[2, 64]} />
      <meshStandardMaterial
        color="#1a1a1a"
        roughness={0.8}
        metalness={0.2}
      />
    </mesh>
  )
}

// Glowing ring around platform
function GlowRing() {
  const ringRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.getElapsedTime() * 0.2
    }
  })
  
  return (
    <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.48, 0]}>
      <ringGeometry args={[1.8, 2, 64]} />
      <meshStandardMaterial
        color="#dc2626"
        emissive="#dc2626"
        emissiveIntensity={0.5}
        transparent
        opacity={0.3}
      />
    </mesh>
  )
}

export default function BicepCurlAnimation() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-[500px] lg:h-[600px] flex items-center justify-center bg-gradient-to-br from-dark-300 to-dark-900 rounded-2xl">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading 3D Animation...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-[500px] lg:h-[600px] relative rounded-2xl overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-300 via-dark-500 to-dark-900" />
      
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0.5, 4], fov: 50 }}
        shadows
        className="absolute inset-0"
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-5, 3, -5]} intensity={0.5} color="#dc2626" />
        <pointLight position={[5, 3, 5]} intensity={0.3} color="#fbbf24" />
        <spotLight
          position={[0, 5, 0]}
          angle={0.5}
          penumbra={1}
          intensity={0.5}
          color="#dc2626"
        />
        
        <MuscularFigure />
        <Platform />
        <GlowRing />
        <Particles />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
        <Environment preset="night" />
      </Canvas>
      
      {/* Overlay UI */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
        <div className="glass-card p-4">
          <p className="text-red-500 font-bold text-sm uppercase tracking-wider">Exercise</p>
          <h3 className="text-white font-display text-xl">Bicep Curls</h3>
        </div>
        <div className="glass-card p-4 text-right">
          <p className="text-gray-400 text-sm">Drag to rotate</p>
          <p className="text-red-500 font-semibold">Interactive 3D</p>
        </div>
      </div>
      
      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-red-600 opacity-50" />
      <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-red-600 opacity-50" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-red-600 opacity-50" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-red-600 opacity-50" />
    </div>
  )
}
