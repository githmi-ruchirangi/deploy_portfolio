// components/SolarSystem3D.tsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const Sun: React.FC = () => {
  return (
    <mesh>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="yellow" emissive="yellow" emissiveIntensity={0.6} />
    </mesh>
  );
};

const Planet: React.FC<{ position: [number, number, number]; color: string; speed: number }> = ({ position, color, speed }) => {
  const ref = useRef<Mesh>(null!);
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.position.x = Math.sin(time * speed) * position[0];
    ref.current.position.z = Math.cos(time * speed) * position[2];
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const SolarSystem3D: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 10, 10], fov: 75 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Sun />
      <Planet position={[5, 0, 0]} color="blue" speed={0.5} />
      <Planet position={[8, 0, 0]} color="red" speed={0.3} />
      {/* Add more planets as needed */}
    </Canvas>
  );
};

export default SolarSystem3D;
