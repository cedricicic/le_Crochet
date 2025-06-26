"use client"

import { useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

interface StitchProps {
  position?: [number, number, number]
}

export function Stitch(props: StitchProps) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 1]} intensity={0.8} />
      <mesh {...props} ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
        <meshPhongMaterial color={"hotpink"} specular={"#111111"} shininess={30} />
      </mesh>
      <OrbitControls enableDamping />
    </>
  )
}