import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

// Utility to sanitize geometry
const sanitizeGeometry = (object) => {
  object.traverse((child) => {
    if (child.isMesh && child.geometry) {
      const pos = child.geometry.attributes.position;
      if (!pos) return;

      let hasNaN = false;
      for (let i = 0; i < pos.count; i++) {
        if (isNaN(pos.getX(i)) || isNaN(pos.getY(i)) || isNaN(pos.getZ(i))) {
          hasNaN = true;
          break;
        }
      }

      if (hasNaN) {
        console.warn("NaN vertices found in mesh! Replacing with zeros.");
        const newPositions = [];
        for (let i = 0; i < pos.count; i++) {
          const x = isNaN(pos.getX(i)) ? 0 : pos.getX(i);
          const y = isNaN(pos.getY(i)) ? 0 : pos.getY(i);
          const z = isNaN(pos.getZ(i)) ? 0 : pos.getZ(i);
          newPositions.push(x, y, z);
        }
        child.geometry.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(newPositions, 3)
        );
      }

      child.geometry.computeBoundingSphere();
      child.geometry.computeVertexNormals();
    }
  });
};

// Main model component
const ComputerModel = ({ isMobile }) => {
  const modelPath = "./desktop_pc/scene_1k.glb" 

  const computer = useGLTF(modelPath);

  useEffect(() => {
    if (computer.scene) sanitizeGeometry(computer.scene);
  }, [computer]);

  return (
    <group>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -2.8, -1.8] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

// Canvas wrapper
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ComputerModel isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
