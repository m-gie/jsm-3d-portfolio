import { useAnimations, useGLTF } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";
import React, { useRef, useEffect, Ref } from "react";

interface PlaneProps {
  isRotating: boolean;
  planeScale: Vector3;
  planePosition: Vector3;
  rotation: [number, number, number];
}

const Plane = ({
  isRotating,
  planeScale,
  planePosition,
  rotation,
}: PlaneProps) => {
  const ref: React.MutableRefObject<any> = useRef();
  const { scene, animations } = useGLTF("3d/plane.glb");
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"]?.play();
    } else {
      actions["Take 001"]?.stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh
      scale={planeScale}
      position={planePosition}
      rotation={rotation}
      ref={ref}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
