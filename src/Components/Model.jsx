import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Model = ({ url, scale, position }) => {
  const { scene } = useGLTF(url);
  const modelRef = useRef();

  // Apply the scale and position transformations
  scene.scale.set(scale[0], scale[1], scale[2]);
  scene.position.set(position[0], position[1], position[2]);

  useFrame(() => {
    if (modelRef.current) {
      // Rotate the model on the x-axis
      modelRef.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={modelRef} object={scene} />;
};

export default Model;
