import { useGLTF } from "@react-three/drei";
import React from "react";

const Plane = ({ isRotating, ...props }: { isRotating: boolean }) => {
  const { scene, animations } = useGLTF("3d/plane.glb");
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
