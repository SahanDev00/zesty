import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Model = ({ url, scale, position, onLoad }) => {
  const { scene } = useGLTF(url);
  const modelRef = useRef();

  useEffect(() => {
    if (scene) {
      // Call onLoad when the scene is available
      onLoad();
    }
  }, [scene, onLoad]);

  // Apply the scale and position transformations
  useEffect(() => {
    if (scene) {
      scene.scale.set(scale[0], scale[1], scale[2]);
      scene.position.set(position[0], position[1], position[2]);
    }
  }, [scene, scale, position]);

  useFrame(() => {
    if (modelRef.current) {
      // Rotate the model on the y-axis
      modelRef.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={modelRef} object={scene} />;
};

export default Model;
