import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Sphere, Cylinder } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Home, RefreshCcw } from 'lucide-react';

const AnimatedText = () => {
  const textRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      textRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Text
      ref={textRef}
      fontSize={5}
      color={hovered ? "#ff6b6b" : "#4a4e69"}
      anchorX="center"
      anchorY="middle"
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      404
    </Text>
  );
};

const Astronaut = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={[5, 0, 0]}>
      {/* Body */}
      <Sphere args={[0.5, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ffffff" />
      </Sphere>
      
      {/* Helmet */}
      <Sphere args={[0.35, 32, 32]} position={[0, 0.6, 0]}>
        <meshStandardMaterial color="#aaaaff" transparent opacity={0.6} />
      </Sphere>
      
      {/* Backpack */}
      <Cylinder args={[0.3, 0.3, 0.6, 32]} position={[0.25, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#cccccc" />
      </Cylinder>
      
      {/* Arms */}
      <Cylinder args={[0.1, 0.1, 0.6, 32]} position={[0, 0, 0.4]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#ffffff" />
      </Cylinder>
      <Cylinder args={[0.1, 0.1, 0.6, 32]} position={[0, 0, -0.4]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#ffffff" />
      </Cylinder>
      
      {/* Legs */}
      <Cylinder args={[0.15, 0.15, 0.7, 32]} position={[0.2, -0.6, 0.2]} rotation={[0.3, 0, 0]}>
        <meshStandardMaterial color="#ffffff" />
      </Cylinder>
      <Cylinder args={[0.15, 0.15, 0.7, 32]} position={[0.2, -0.6, -0.2]} rotation={[-0.3, 0, 0]}>
        <meshStandardMaterial color="#ffffff" />
      </Cylinder>
    </group>
  );
};

const AnimatedScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedText />
      <Astronaut />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

const Designify = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex flex-col justify-center items-center">
      <div className="w-full h-2/3">
        <AnimatedScene />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          The page you are looking for is temporarily unavailable.
        </p>
        <div className="flex justify-center space-x-4">
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <Home className="mr-2" size={20} />
            Go Home
          </motion.a>
          <motion.button
            onClick={() => window.location.reload()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <RefreshCcw className="mr-2" size={20} />
            Reload Page
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Designify;