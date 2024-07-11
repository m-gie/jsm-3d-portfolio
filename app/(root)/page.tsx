"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Canvas, Euler, Vector3 } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Island from "@/models/Island";
import Sky from "@/models/Sky";
import Loader from "@/components/Loader";
import Bird from "@/models/Bird";
import Plane from "@/models/Plane";

export default function Home() {
  const [islandScale, setIslandScale] = useState<Vector3>();
  const [islandPosition, setIslandPosition] = useState<Vector3>();
  const [islandRotation, setIslandRotation] = useState<Euler>();
  const [isRotating, setIsRotating] = useState(false);
  const [planeScale, setPlaneScale] = useState<Vector3>();
  const [planePosition, setPlanePosition] = useState<Vector3>();
  const [currentStage, setCurrentStage] = useState(0);

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
    const adjustPlaneForScreenSize = () => {
      let screenScale, screenPosition;
      if (window.innerWidth < 768) {
        screenScale = [1.5, 1.5, 1.5];
        screenPosition = [0, -1.5, 0];
      } else {
        screenScale = [3, 3, 3];
        screenPosition = [0, -4, -4];
      }
      setPlanePosition(screenPosition as Vector3);
      setPlaneScale(screenScale as Vector3);
    };
    adjustPlaneForScreenSize();
  }, []);

  return (
    <section className=" min-h-screen w-full relative">
      {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        POPUP
      </div> */}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
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
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition as Vector3}
            scale={islandScale as Vector3}
            rotation={islandRotation as Euler}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            planeScale={planeScale as Vector3}
            planePosition={planePosition as Vector3}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}
