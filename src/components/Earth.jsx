/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 earth.gltf --transform 
Files: earth.gltf [17.5KB] > earth-transformed.glb [12.13KB] (31%)
Author: Konstantin_Keller (https://sketchfab.com/Konstantin_Keller)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-earth-c99483d5e2a94ca8b4f3579145584beb
Title: Low Poly Earth
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Earth(props) {
  const { nodes, materials } = useGLTF('/earth-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Icosphere001_0.geometry} material={materials.material} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Icosphere001_1.geometry} material={materials.green} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Icosphere001_2.geometry} material={materials.white} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/earth-transformed.glb')