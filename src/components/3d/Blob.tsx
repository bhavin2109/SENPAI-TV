import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';
import { useTheme } from '../../context/ThemeProvider';

interface BlobProps {
  position?: [number, number, number];
  scale?: number;
  segments?: number;
  color?: string;
  lightColor?: string;
  darkColor?: string;
}

const Blob: React.FC<BlobProps> = ({
  position = [0, 0, 0],
  scale = 1,
  segments = 128,
  lightColor = '#3B82F6',
  darkColor = '#8B5CF6',
}) => {
  const { isDarkMode } = useTheme();
  const color = isDarkMode ? darkColor : lightColor;
  
  const mesh = useRef<THREE.Mesh>(null);
  const hover = useRef(false);

  // Generate initial random points for the blob
  const points = useMemo(() => {
    const p = new Float32Array(segments * 3);
    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      p[i * 3] = Math.cos(angle) * 2;
      p[i * 3 + 1] = Math.sin(angle) * 2;
      p[i * 3 + 2] = 0;
    }
    return p;
  }, [segments]);

  // Animation loop
  useFrame((state) => {
    if (!mesh.current) return;
    
    const { geometry } = mesh.current;
    const positions = geometry.attributes.position;
    
    // Update blob vertices
    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const noise = 0.3 * Math.sin(angle * 6 + state.clock.elapsedTime * 0.8);
      const radiusVariation = hover.current ? 0.2 : 0.1;
      
      const radius = 2 + Math.sin(state.clock.elapsedTime * 0.5 + i * 0.05) * radiusVariation + noise;
      
      positions.array[i * 3] = Math.cos(angle) * radius;
      positions.array[i * 3 + 1] = Math.sin(angle) * radius;
    }
    
    positions.needsUpdate = true;
    
    // Slight rotation
    mesh.current.rotation.z = MathUtils.lerp(
      mesh.current.rotation.z,
      hover.current ? state.clock.elapsedTime * 0.1 : state.clock.elapsedTime * 0.05,
      0.01
    );
  });

  return (
    <mesh
      ref={mesh}
      position={position}
      scale={scale}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={segments}
          itemSize={3}
          array={points}
        />
      </bufferGeometry>
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.8}
        roughness={0.4}
        metalness={0.2}
      />
    </mesh>
  );
};

export default Blob;