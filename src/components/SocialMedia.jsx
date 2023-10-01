import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Smedia from "./Smedia";

const SocialMedia = () => {
  return (
    <Canvas>
      <Stage shadows="none" environment="city" intensity={0.6}>
        <Smedia />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default SocialMedia;
