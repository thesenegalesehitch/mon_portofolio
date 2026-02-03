import { Canvas } from '@react-three/fiber';
import { Float, Sparkles, PerspectiveCamera } from '@react-three/drei';

const FloatingShape = ({ position, color, speed, rotationIntensity, scale }: { position: [number, number, number], color: string, speed: number, rotationIntensity: number, scale: number }) => {
  return (
    <Float
      speed={speed} // Animation speed
      rotationIntensity={rotationIntensity} // XYZ rotation intensity
      floatIntensity={1} // Up/down float intensity
      floatingRange={[-0.2, 0.2]}
    >
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Subtle particle field */}
      <Sparkles
        count={30}
        scale={12}
        size={4}
        speed={0.4}
        opacity={0.4}
        color="#10b981" // emerald-500
      />
      
      <Sparkles
        count={20}
        scale={15}
        size={6}
        speed={0.3}
        opacity={0.3}
        color="#14b8a6" // teal-500
      />

      {/* Floating Geometric Shapes */}
      {/* Top Left - Emerald */}
      <FloatingShape 
        position={[-3, 2, -2]} 
        color="#10b981" 
        speed={2} 
        rotationIntensity={1.5} 
        scale={1.2}
      />
      
      {/* Bottom Right - Teal */}
      <FloatingShape 
        position={[4, -2, -3]} 
        color="#14b8a6" 
        speed={1.5} 
        rotationIntensity={2} 
        scale={1.5}
      />
      
      {/* Bottom Left - Slate/Gray */}
      <FloatingShape 
        position={[-2, -3, -1]} 
        color="#94a3b8" 
        speed={1} 
        rotationIntensity={1} 
        scale={0.8}
      />

       {/* Top Right - Cyan */}
       <FloatingShape 
        position={[3, 3, -4]} 
        color="#06b6d4" 
        speed={1.8} 
        rotationIntensity={1.2} 
        scale={1}
      />
    </>
  );
};

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas dpr={[1, 1.5]} gl={{ antialias: false, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <Scene />
      </Canvas>
    </div>
  );
}
