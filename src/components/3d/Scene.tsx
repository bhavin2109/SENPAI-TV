import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float, Preload } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { MotionConfig } from 'framer-motion';

// A simple floating sphere
const FloatingSphere = ({ position, color, scale, speed = 1 }: any) => {
  const ref = useRef(null);
  
  useFrame((state) => {
    if (ref.current) {
      // @ts-ignore - the current property exists on the ref
      ref.current.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.002;
    }
  });
  
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <motion.mesh
        ref={ref}
        position={position}
        scale={scale}
        whileHover={{ scale: scale * 1.2 }}
        transition={{ duration: 0.3 }}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
      </motion.mesh>
    </Float>
  );
};

// A group of cubes that rotate
const RotatingCubes = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.1;
    }
  });
  
  return (
    <group ref={groupRef}>
      {[...Array(5)].map((_, i) => {
        const rad = 3;
        const angle = (i / 5) * Math.PI * 2;
        const x = Math.sin(angle) * rad;
        const z = Math.cos(angle) * rad;
        
        return (
          <motion.mesh 
            key={i} 
            position={[x, 0, z]}
            rotation={[Math.random(), Math.random(), Math.random()]}
            whileHover={{ scale: 1.2, rotateX: Math.PI }}
            transition={{ duration: 0.3 }}
          >
            <boxGeometry args={[0.7, 0.7, 0.7]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? '#3B82F6' : '#8B5CF6'} 
              roughness={0.3} 
              metalness={0.7} 
            />
          </motion.mesh>
        );
      })}
    </group>
  );
};

// Main 3D scene component
const Scene = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-80">
      <MotionConfig transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}>
        <Canvas 
          camera={{ position: [0, 2, 10], fov: 45 }}
          style={{ height: '100vh' }}
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          
          <RotatingCubes />
          
          <FloatingSphere position={[-4, 2, -2]} color="#3B82F6" scale={0.8} speed={1.2} />
          <FloatingSphere position={[4, -1, -3]} color="#8B5CF6" scale={0.6} speed={0.8} />
          <FloatingSphere position={[0, 3, -5]} color="#2563EB" scale={1} speed={1.5} />
          
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 2.5}
          />
          
          <Environment preset="city" />
          <Preload all />
        </Canvas>
      </MotionConfig>
    </div>
  );
};

export default Scene;