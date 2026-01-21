'use client'

import { useRef, useState, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Float, Stars, Text, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Rotating Dumbbell Component
function Dumbbell({ position, rotation, scale = 1 }: { position: [number, number, number], rotation?: [number, number, number], scale?: number }) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
    }
  })

  const handleMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#1a1a1a',
    roughness: 0.2,
    metalness: 0.9,
  }), [])

  const weightMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#dc2626',
    roughness: 0.3,
    metalness: 0.5,
    emissive: '#dc2626',
    emissiveIntensity: 0.15,
  }), [])

  const accentMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#fbbf24',
    roughness: 0.3,
    metalness: 0.7,
    emissive: '#fbbf24',
    emissiveIntensity: 0.2,
  }), [])

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      {/* Handle */}
      <mesh material={handleMaterial}>
        <cylinderGeometry args={[0.08, 0.08, 2.5, 32]} />
      </mesh>
      
      {/* Left weight plates */}
      <mesh position={[0, -1, 0]} material={weightMaterial}>
        <cylinderGeometry args={[0.4, 0.4, 0.15, 32]} />
      </mesh>
      <mesh position={[0, -1.18, 0]} material={weightMaterial}>
        <cylinderGeometry args={[0.35, 0.35, 0.12, 32]} />
      </mesh>
      <mesh position={[0, -0.9, 0]} material={accentMaterial}>
        <cylinderGeometry args={[0.25, 0.25, 0.04, 32]} />
      </mesh>
      
      {/* Right weight plates */}
      <mesh position={[0, 1, 0]} material={weightMaterial}>
        <cylinderGeometry args={[0.4, 0.4, 0.15, 32]} />
      </mesh>
      <mesh position={[0, 1.18, 0]} material={weightMaterial}>
        <cylinderGeometry args={[0.35, 0.35, 0.12, 32]} />
      </mesh>
      <mesh position={[0, 0.9, 0]} material={accentMaterial}>
        <cylinderGeometry args={[0.25, 0.25, 0.04, 32]} />
      </mesh>
      
      {/* Handle grip texture */}
      <mesh material={handleMaterial}>
        <torusGeometry args={[0.09, 0.02, 8, 32]} />
      </mesh>
    </group>
  )
}

// Kettlebell Component
function Kettlebell({ position, delay = 0 }: { position: [number, number, number], delay?: number }) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.8 + delay) * 0.3
      groupRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 1.2 + delay) * 0.1
    }
  })

  const bodyMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#1f1f1f',
    roughness: 0.4,
    metalness: 0.8,
  }), [])

  const handleMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#dc2626',
    roughness: 0.3,
    metalness: 0.6,
  }), [])

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef} position={position} scale={0.6}>
        {/* Body */}
        <mesh position={[0, -0.3, 0]} material={bodyMaterial}>
          <sphereGeometry args={[0.5, 32, 32]} />
        </mesh>
        {/* Flat bottom */}
        <mesh position={[0, -0.7, 0]} material={bodyMaterial}>
          <cylinderGeometry args={[0.35, 0.35, 0.15, 32]} />
        </mesh>
        {/* Handle */}
        <mesh position={[0, 0.35, 0]} rotation={[Math.PI / 2, 0, 0]} material={handleMaterial}>
          <torusGeometry args={[0.25, 0.06, 16, 32, Math.PI]} />
        </mesh>
      </group>
    </Float>
  )
}

// Weight Plate Component
function WeightPlate({ position, size = 1, rotationSpeed = 1 }: { position: [number, number, number], size?: number, rotationSpeed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * rotationSpeed
    }
  })

  const plateMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#dc2626',
    roughness: 0.4,
    metalness: 0.6,
    emissive: '#dc2626',
    emissiveIntensity: 0.1,
  }), [])

  const innerMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#0a0a0a',
    roughness: 0.3,
    metalness: 0.8,
  }), [])

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
      <group position={position} scale={size}>
        <mesh ref={meshRef} material={plateMaterial}>
          <torusGeometry args={[0.5, 0.12, 16, 32]} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={innerMaterial}>
          <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
        </mesh>
      </group>
    </Float>
  )
}

// Central Energy Core
function EnergyCore() {
  const coreRef = useRef<THREE.Mesh>(null)
  const ringRef1 = useRef<THREE.Mesh>(null)
  const ringRef2 = useRef<THREE.Mesh>(null)
  const ringRef3 = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (coreRef.current) {
      coreRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1)
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.x = time * 0.5
      ringRef1.current.rotation.y = time * 0.3
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.x = time * 0.3
      ringRef2.current.rotation.z = time * 0.5
    }
    if (ringRef3.current) {
      ringRef3.current.rotation.y = time * 0.4
      ringRef3.current.rotation.z = time * 0.2
    }
  })

  return (
    <group position={[0, 0, 0]}>
      {/* Core sphere */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#dc2626"
          emissive="#dc2626"
          emissiveIntensity={2}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#dc2626"
          emissive="#dc2626"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Orbital rings */}
      <mesh ref={ringRef1}>
        <torusGeometry args={[0.8, 0.02, 16, 64]} />
        <meshStandardMaterial
          color="#dc2626"
          emissive="#dc2626"
          emissiveIntensity={1}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      <mesh ref={ringRef2}>
        <torusGeometry args={[1.1, 0.015, 16, 64]} />
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#fbbf24"
          emissiveIntensity={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>
      
      <mesh ref={ringRef3}>
        <torusGeometry args={[1.4, 0.01, 16, 64]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.5}
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  )
}

// Floating particles
function EnergyParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 200
  
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      // Spherical distribution
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const radius = 2 + Math.random() * 2
      
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = radius * Math.cos(phi)
      
      // Color variation
      const isRed = Math.random() > 0.3
      col[i * 3] = isRed ? 0.86 : 0.98
      col[i * 3 + 1] = isRed ? 0.15 : 0.75
      col[i * 3 + 2] = isRed ? 0.15 : 0.15
    }
    return { positions: pos, colors: col }
  }, [])
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
      particlesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1
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
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

// Platform with grid
function Platform() {
  const ringRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.getElapsedTime() * 0.2
    }
  })
  
  return (
    <group position={[0, -2, 0]}>
      {/* Main platform */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[3, 64]} />
        <meshStandardMaterial
          color="#0a0a0a"
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
      
      {/* Glowing ring */}
      <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <ringGeometry args={[2.5, 2.8, 64]} />
        <meshStandardMaterial
          color="#dc2626"
          emissive="#dc2626"
          emissiveIntensity={1}
          transparent
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Inner ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <ringGeometry args={[1.8, 2, 64]} />
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#fbbf24"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

// Dynamic scene lighting
function SceneLights() {
  const spotRef = useRef<THREE.SpotLight>(null)
  
  useFrame((state) => {
    if (spotRef.current) {
      spotRef.current.position.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 5
      spotRef.current.position.z = Math.cos(state.clock.getElapsedTime() * 0.5) * 5
    }
  })
  
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-5, 3, -5]} intensity={0.8} color="#dc2626" />
      <pointLight position={[5, 3, 5]} intensity={0.5} color="#fbbf24" />
      <spotLight
        ref={spotRef}
        position={[0, 8, 0]}
        angle={0.4}
        penumbra={1}
        intensity={1.5}
        color="#dc2626"
        castShadow
      />
    </>
  )
}

// Main Component
export default function GymShowcase3D() {
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
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-300 via-dark-500 to-dark-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />
      
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 2, 6], fov: 50 }}
        shadows
        gl={{ antialias: true, alpha: true }}
        className="absolute inset-0"
      >
        <SceneLights />
        
        {/* Central energy core */}
        <EnergyCore />
        
        {/* Floating equipment */}
        <Dumbbell position={[-2.5, 0.5, 0]} rotation={[0, 0, Math.PI / 4]} scale={0.7} />
        <Dumbbell position={[2.5, 0.5, 0]} rotation={[0, 0, -Math.PI / 4]} scale={0.7} />
        
        <Kettlebell position={[-1.5, -0.5, 1.5]} delay={0} />
        <Kettlebell position={[1.5, -0.5, 1.5]} delay={Math.PI} />
        
        <WeightPlate position={[0, 1.8, -1]} size={0.8} rotationSpeed={0.5} />
        <WeightPlate position={[-1.8, 1.2, 0.5]} size={0.6} rotationSpeed={-0.7} />
        <WeightPlate position={[1.8, 1.2, 0.5]} size={0.6} rotationSpeed={0.8} />
        
        {/* Environment */}
        <Platform />
        <EnergyParticles />
        
        <Stars
          radius={100}
          depth={50}
          count={1500}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.2}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
        <Environment preset="night" />
        <fog attach="fog" args={['#0a0a0a', 10, 25]} />
      </Canvas>
      
      {/* Overlay UI */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
        <div className="backdrop-blur-md bg-black/40 border border-red-600/30 rounded-xl p-4">
          <p className="text-red-500 font-bold text-xs uppercase tracking-wider mb-1">Premium Equipment</p>
          <h3 className="text-white font-display text-xl font-bold">World-Class Gear</h3>
          <p className="text-gray-400 text-xs mt-1">State-of-the-art facilities</p>
        </div>
        <div className="backdrop-blur-md bg-black/40 border border-red-600/30 rounded-xl p-4 text-right">
          <p className="text-gray-400 text-xs mb-1">Drag to explore</p>
          <p className="text-red-500 font-semibold text-sm">Interactive 3D</p>
          <div className="flex items-center justify-end gap-1 mt-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-500 text-xs">Live</span>
          </div>
        </div>
      </div>
      
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-red-600/50 rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-red-600/50 rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-red-600/50 rounded-bl-2xl" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-red-600/50 rounded-br-2xl" />
    </div>
  )
}
