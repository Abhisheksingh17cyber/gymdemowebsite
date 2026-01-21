'use client'

import { useRef, useState, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

// Enhanced Muscular Figure with better anatomy and dynamic biceps
function MuscularFigure() {
  const groupRef = useRef<THREE.Group>(null)
  const rightArmRef = useRef<THREE.Group>(null)
  const leftArmRef = useRef<THREE.Group>(null)
  const [intensity, setIntensity] = useState(0)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    // Smooth bicep curl animation - alternating arms
    const rightCurl = Math.sin(time * 1.5) * 0.5 + 0.5
    const leftCurl = Math.sin(time * 1.5 + Math.PI) * 0.5 + 0.5
    
    // Animate right arm
    if (rightArmRef.current) {
      rightArmRef.current.rotation.x = -rightCurl * 2.4
    }
    
    // Animate left arm
    if (leftArmRef.current) {
      leftArmRef.current.rotation.x = -leftCurl * 2.4
    }
    
    // Dynamic body movement
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.15
      groupRef.current.position.y = Math.sin(time * 1.5) * 0.03 - 1.5
    }
    
    setIntensity(Math.max(rightCurl, leftCurl))
  })

  // Enhanced materials with useMemo for performance
  const bodyMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#d4a574',
    roughness: 0.5,
    metalness: 0.1,
  }), [])

  const muscleMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#c9956a',
    roughness: 0.4,
    metalness: 0.15,
  }), [])

  const shortsMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#1a1a1a',
    roughness: 0.8,
    metalness: 0,
  }), [])

  const dumbbellMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#2a2a2a',
    roughness: 0.2,
    metalness: 0.9,
  }), [])

  const redMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#dc2626',
    roughness: 0.3,
    metalness: 0.4,
    emissive: '#dc2626',
    emissiveIntensity: 0.3,
  }), [])

  const goldMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#fbbf24',
    roughness: 0.3,
    metalness: 0.6,
    emissive: '#fbbf24',
    emissiveIntensity: 0.2,
  }), [])

  return (
    <group ref={groupRef} position={[0, -1.5, 0]}>
      {/* Head */}
      <mesh position={[0, 2.6, 0]} material={bodyMaterial}>
        <sphereGeometry args={[0.22, 32, 32]} />
      </mesh>
      
      {/* Neck */}
      <mesh position={[0, 2.35, 0]} material={bodyMaterial}>
        <cylinderGeometry args={[0.12, 0.14, 0.15, 16]} />
      </mesh>
      
      {/* Torso */}
      <mesh position={[0, 1.8, 0]} material={bodyMaterial}>
        <capsuleGeometry args={[0.42, 0.85, 12, 24]} />
      </mesh>
      
      {/* Enhanced Chest muscles */}
      <mesh position={[-0.18, 2.05, 0.28]} material={muscleMaterial}>
        <sphereGeometry args={[0.22, 24, 24]} />
      </mesh>
      <mesh position={[0.18, 2.05, 0.28]} material={muscleMaterial}>
        <sphereGeometry args={[0.22, 24, 24]} />
      </mesh>
      
      {/* Chest center line */}
      <mesh position={[0, 1.95, 0.35]} material={muscleMaterial}>
        <boxGeometry args={[0.04, 0.5, 0.08]} />
      </mesh>
      
      {/* Enhanced 6-pack Abs */}
      {[0, -0.12, -0.24, -0.36, -0.48, -0.60].map((y, i) => (
        <group key={i}>
          <mesh position={[-0.1, 1.75 + y, 0.32]} material={muscleMaterial}>
            <boxGeometry args={[0.14, 0.08, 0.12]} />
          </mesh>
          <mesh position={[0.1, 1.75 + y, 0.32]} material={muscleMaterial}>
            <boxGeometry args={[0.14, 0.08, 0.12]} />
          </mesh>
        </group>
      ))}
      
      {/* Obliques */}
      <mesh position={[-0.35, 1.5, 0.15]} rotation={[0, 0, 0.3]} material={muscleMaterial}>
        <boxGeometry args={[0.12, 0.4, 0.15]} />
      </mesh>
      <mesh position={[0.35, 1.5, 0.15]} rotation={[0, 0, -0.3]} material={muscleMaterial}>
        <boxGeometry args={[0.12, 0.4, 0.15]} />
      </mesh>
      
      {/* Shoulders (Deltoids) */}
      <mesh position={[-0.52, 2.2, 0]} material={muscleMaterial}>
        <sphereGeometry args={[0.18, 24, 24]} />
      </mesh>
      <mesh position={[0.52, 2.2, 0]} material={muscleMaterial}>
        <sphereGeometry args={[0.18, 24, 24]} />
      </mesh>
      
      {/* Trapezius */}
      <mesh position={[-0.2, 2.35, -0.05]} rotation={[0, 0, -0.5]} material={muscleMaterial}>
        <boxGeometry args={[0.15, 0.25, 0.12]} />
      </mesh>
      <mesh position={[0.2, 2.35, -0.05]} rotation={[0, 0, 0.5]} material={muscleMaterial}>
        <boxGeometry args={[0.15, 0.25, 0.12]} />
      </mesh>
      
      {/* Right Arm Group */}
      <group ref={rightArmRef} position={[-0.52, 2.1, 0]}>
        {/* Upper Arm */}
        <mesh position={[0, -0.25, 0]} material={bodyMaterial}>
          <capsuleGeometry args={[0.12, 0.35, 8, 16]} />
        </mesh>
        
        {/* Animated Bicep - grows during curl */}
        <mesh position={[0, -0.2, 0.08]} scale={[1, 1, 1 + intensity * 0.4]} material={muscleMaterial}>
          <sphereGeometry args={[0.14, 24, 24]} />
        </mesh>
        
        {/* Tricep */}
        <mesh position={[0, -0.25, -0.08]} material={muscleMaterial}>
          <sphereGeometry args={[0.1, 16, 16]} />
        </mesh>
        
        {/* Forearm */}
        <group position={[0, -0.55, 0]}>
          <mesh material={bodyMaterial}>
            <capsuleGeometry args={[0.09, 0.3, 8, 16]} />
          </mesh>
          
          {/* Hand */}
          <mesh position={[0, -0.22, 0]} material={bodyMaterial}>
            <boxGeometry args={[0.08, 0.12, 0.05]} />
          </mesh>
          
          {/* Dumbbell */}
          <group position={[0, -0.25, 0]} rotation={[Math.PI / 2, 0, 0]}>
            {/* Handle */}
            <mesh material={dumbbellMaterial}>
              <cylinderGeometry args={[0.025, 0.025, 0.35, 16]} />
            </mesh>
            {/* Weight plates */}
            <mesh position={[0, -0.15, 0]} material={redMaterial}>
              <cylinderGeometry args={[0.1, 0.1, 0.06, 24]} />
            </mesh>
            <mesh position={[0, 0.15, 0]} material={redMaterial}>
              <cylinderGeometry args={[0.1, 0.1, 0.06, 24]} />
            </mesh>
            {/* Gold accents */}
            <mesh position={[0, -0.12, 0]} material={goldMaterial}>
              <cylinderGeometry args={[0.07, 0.07, 0.02, 24]} />
            </mesh>
            <mesh position={[0, 0.12, 0]} material={goldMaterial}>
              <cylinderGeometry args={[0.07, 0.07, 0.02, 24]} />
            </mesh>
          </group>
        </group>
      </group>
      
      {/* Left Arm Group */}
      <group ref={leftArmRef} position={[0.52, 2.1, 0]}>
        {/* Upper Arm */}
        <mesh position={[0, -0.25, 0]} material={bodyMaterial}>
          <capsuleGeometry args={[0.12, 0.35, 8, 16]} />
        </mesh>
        
        {/* Animated Bicep */}
        <mesh position={[0, -0.2, 0.08]} scale={[1, 1, 1 + (1 - intensity) * 0.4]} material={muscleMaterial}>
          <sphereGeometry args={[0.14, 24, 24]} />
        </mesh>
        
        {/* Tricep */}
        <mesh position={[0, -0.25, -0.08]} material={muscleMaterial}>
          <sphereGeometry args={[0.1, 16, 16]} />
        </mesh>
        
        {/* Forearm */}
        <group position={[0, -0.55, 0]}>
          <mesh material={bodyMaterial}>
            <capsuleGeometry args={[0.09, 0.3, 8, 16]} />
          </mesh>
          
          {/* Hand */}
          <mesh position={[0, -0.22, 0]} material={bodyMaterial}>
            <boxGeometry args={[0.08, 0.12, 0.05]} />
          </mesh>
          
          {/* Dumbbell */}
          <group position={[0, -0.25, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh material={dumbbellMaterial}>
              <cylinderGeometry args={[0.025, 0.025, 0.35, 16]} />
            </mesh>
            <mesh position={[0, -0.15, 0]} material={redMaterial}>
              <cylinderGeometry args={[0.1, 0.1, 0.06, 24]} />
            </mesh>
            <mesh position={[0, 0.15, 0]} material={redMaterial}>
              <cylinderGeometry args={[0.1, 0.1, 0.06, 24]} />
            </mesh>
            <mesh position={[0, -0.12, 0]} material={goldMaterial}>
              <cylinderGeometry args={[0.07, 0.07, 0.02, 24]} />
            </mesh>
            <mesh position={[0, 0.12, 0]} material={goldMaterial}>
              <cylinderGeometry args={[0.07, 0.07, 0.02, 24]} />
            </mesh>
          </group>
        </group>
      </group>
      
      {/* Shorts/Hips */}
      <mesh position={[0, 1, 0]} material={shortsMaterial}>
        <capsuleGeometry args={[0.3, 0.25, 8, 16]} />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.18, 0.4, 0]} material={bodyMaterial}>
        <capsuleGeometry args={[0.14, 0.6, 8, 16]} />
      </mesh>
      <mesh position={[0.18, 0.4, 0]} material={bodyMaterial}>
        <capsuleGeometry args={[0.14, 0.6, 8, 16]} />
      </mesh>
      
      {/* Thigh muscles */}
      <mesh position={[-0.18, 0.55, 0.08]} material={muscleMaterial}>
        <sphereGeometry args={[0.12, 16, 16]} />
      </mesh>
      <mesh position={[0.18, 0.55, 0.08]} material={muscleMaterial}>
        <sphereGeometry args={[0.12, 16, 16]} />
      </mesh>
      
      {/* Lower legs */}
      <mesh position={[-0.18, -0.2, 0]} material={bodyMaterial}>
        <capsuleGeometry args={[0.1, 0.5, 8, 16]} />
      </mesh>
      <mesh position={[0.18, -0.2, 0]} material={bodyMaterial}>
        <capsuleGeometry args={[0.1, 0.5, 8, 16]} />
      </mesh>
      
      {/* Calf muscles */}
      <mesh position={[-0.18, -0.1, -0.06]} material={muscleMaterial}>
        <sphereGeometry args={[0.08, 16, 16]} />
      </mesh>
      <mesh position={[0.18, -0.1, -0.06]} material={muscleMaterial}>
        <sphereGeometry args={[0.08, 16, 16]} />
      </mesh>
    </group>
  )
}

// Energy particles with colors
function EnergyParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 150
  
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      const radius = 1.5 + (i % 10) * 0.15
      pos[i * 3] = Math.cos(angle) * radius
      pos[i * 3 + 1] = ((i % 20) - 10) * 0.2
      pos[i * 3 + 2] = Math.sin(angle) * radius
      
      // Red and gold particles
      const isRed = i % 3 !== 0
      col[i * 3] = isRed ? 0.86 : 0.98     // R
      col[i * 3 + 1] = isRed ? 0.15 : 0.75 // G
      col[i * 3 + 2] = isRed ? 0.15 : 0.15 // B
    }
    return { positions: pos, colors: col }
  }, [])
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
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
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

// Animated platform with energy rings
function Platform() {
  const ringRef = useRef<THREE.Mesh>(null)
  const innerRingRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.getElapsedTime() * 0.3
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.z = -state.clock.getElapsedTime() * 0.5
    }
  })
  
  return (
    <group position={[0, -1.5, 0]}>
      {/* Main platform */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[2.2, 64]} />
        <meshStandardMaterial
          color="#0a0a0a"
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>
      
      {/* Outer glow ring */}
      <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <ringGeometry args={[1.9, 2.1, 64]} />
        <meshStandardMaterial
          color="#dc2626"
          emissive="#dc2626"
          emissiveIntensity={1}
          transparent
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Inner accent ring */}
      <mesh ref={innerRingRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.03, 0]}>
        <ringGeometry args={[1.4, 1.5, 64]} />
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#fbbf24"
          emissiveIntensity={0.8}
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Grid lines on platform */}
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          rotation={[-Math.PI / 2, 0, (i / 8) * Math.PI]}
          position={[0, 0.01, 0]}
        >
          <planeGeometry args={[0.02, 4]} />
          <meshStandardMaterial
            color="#dc2626"
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  )
}

// Floating energy orbs
function EnergyOrbs() {
  const orbsRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (orbsRef.current) {
      orbsRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })
  
  return (
    <group ref={orbsRef}>
      {[0, 120, 240].map((angle, i) => (
        <Float key={i} speed={2} rotationIntensity={0} floatIntensity={1}>
          <mesh
            position={[
              Math.cos((angle * Math.PI) / 180) * 2.5,
              0.5 + i * 0.3,
              Math.sin((angle * Math.PI) / 180) * 2.5
            ]}
          >
            <sphereGeometry args={[0.08, 32, 32]} />
            <meshStandardMaterial
              color={i === 1 ? '#fbbf24' : '#dc2626'}
              emissive={i === 1 ? '#fbbf24' : '#dc2626'}
              emissiveIntensity={2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

// Dynamic lighting
function DynamicLights() {
  const spotLightRef = useRef<THREE.SpotLight>(null)
  
  useFrame((state) => {
    if (spotLightRef.current) {
      spotLightRef.current.position.x = Math.sin(state.clock.getElapsedTime()) * 3
      spotLightRef.current.position.z = Math.cos(state.clock.getElapsedTime()) * 3
    }
  })
  
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-4, 3, -4]} intensity={0.5} color="#dc2626" />
      <pointLight position={[4, 3, 4]} intensity={0.4} color="#fbbf24" />
      <spotLight
        ref={spotLightRef}
        position={[0, 6, 0]}
        angle={0.4}
        penumbra={1}
        intensity={1}
        color="#dc2626"
        castShadow
      />
      <spotLight
        position={[0, -2, 5]}
        angle={0.6}
        penumbra={0.5}
        intensity={0.3}
        color="#fbbf24"
      />
    </>
  )
}

// Main component
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
          <p className="text-gray-400">Loading 3D Experience...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-[500px] lg:h-[600px] relative rounded-2xl overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-300 via-dark-500 to-dark-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />
      
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0.8, 4.5], fov: 45 }}
        shadows
        gl={{ antialias: true, alpha: true }}
        className="absolute inset-0"
      >
        <DynamicLights />
        
        <MuscularFigure />
        <Platform />
        <EnergyParticles />
        <EnergyOrbs />
        
        <Stars
          radius={100}
          depth={50}
          count={1000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.8}
        />
        
        <Environment preset="night" />
        
        {/* Fog for depth */}
        <fog attach="fog" args={['#0a0a0a', 8, 20]} />
      </Canvas>
      
      {/* Overlay UI */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
        <div className="glass-card p-4 backdrop-blur-md bg-black/30 border border-red-600/30 rounded-xl">
          <p className="text-red-500 font-bold text-xs uppercase tracking-wider mb-1">Exercise</p>
          <h3 className="text-white font-display text-xl font-bold">Bicep Curls</h3>
          <p className="text-gray-400 text-xs mt-1">3 sets × 12 reps</p>
        </div>
        <div className="glass-card p-4 text-right backdrop-blur-md bg-black/30 border border-red-600/30 rounded-xl">
          <p className="text-gray-400 text-xs mb-1">Drag to rotate</p>
          <p className="text-red-500 font-semibold text-sm">Interactive 3D</p>
          <div className="flex items-center justify-end gap-1 mt-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-500 text-xs">Live</span>
          </div>
        </div>
      </div>
      
      {/* Pulse effect corners */}
      <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-red-600/50 rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-red-600/50 rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-red-600/50 rounded-bl-2xl" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-red-600/50 rounded-br-2xl" />
    </div>
  )
}
