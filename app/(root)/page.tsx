"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Canvas, Euler, Vector3 } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Island from "@/models/Island";
import Sky from "@/models/Sky";
import Loader from "@/components/Loader";

export default function Home() {
  const [islandScale, setIslandScale] = useState<Vector3>();
  const [islandPosition, setIslandPosition] = useState<Vector3>();
  const [islandRotation, setIslandRotation] = useState<Euler>();

  useEffect(() => {
    const adjustIslandForScreenSize = () => {
      let screenScale;
      let screenPosition = [0, -6.5, -43];
      let islandRotation = [0.1, 4.7, 0];
      if (window.innerWidth < 768) {
        screenScale = [0.9, 0.9, 0.9];
      } else {
        screenScale = [1, 1, 1];
      }
      setIslandScale(screenScale as Vector3);
      setIslandPosition(screenPosition as Vector3);
      setIslandRotation(islandRotation as Euler);
    };
    adjustIslandForScreenSize();
  }, []);

  return (
    <section className=" min-h-screen w-full relative">
      {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        POPUP
      </div> */}
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[10, 1, 1]} intensity={2} />
          <ambientLight intensity={0.3} />

          <hemisphereLight
            color="#b1e1ff"
            groundColor={"#000000"}
            intensity={1}
          />
          <Sky />
          <Island
            position={islandPosition as Vector3}
            scale={islandScale as Vector3}
            rotation={islandRotation as Euler}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}
