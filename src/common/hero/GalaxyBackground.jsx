import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { ParticleBackground, GalaxyCanvas } from "./StyledHero";
import Galaxy from "./Galaxy";

const CameraController = () => {
  const cameraRef = useRef();
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    timeRef.current += delta * 0.2;

    if (!cameraRef.current) {
      cameraRef.current = state.camera;
      state.camera.position.set(3, 3, 10);
    }

    const camera = cameraRef.current;
    camera.position.x = Math.sin(timeRef.current * 0.3) * 1.5 + 3;
    camera.position.y = Math.cos(timeRef.current * 0.2) * 1.2 + 3;
    camera.position.z = Math.cos(timeRef.current * 0.1) * 1 + 10;

    camera.lookAt(0, 0, 0);
  });

  return null;
};

export default function GalaxyBackground() {
  return (
    <ParticleBackground>
      <GalaxyCanvas camera={{ fov: 50, near: 0.1, far: 1000 }} dpr={[1, 1.5]}>
        <CameraController />
        <color attach="background" args={["#05071a"]} />
        <fog attach="fog" args={["#05071a", 5, 18]} />
        <ambientLight intensity={0.8} />
        <Galaxy />
      </GalaxyCanvas>
    </ParticleBackground>
  );
}
