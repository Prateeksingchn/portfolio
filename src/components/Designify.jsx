import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Sphere, Cylinder, Box } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Home, RefreshCcw, Clock } from 'lucide-react';

const AnimatedText = () => {
  const textRef = useRef();

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
      color="#4a4e69"
      anchorX="center"
      anchorY="middle"
    >
      Coming Soon
    </Text>
  );
};

const WorkInProgress = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={[5, 0, 0]}>
      {/* Gear */}
      <Cylinder args={[1, 1, 0.2, 32, 1, false, 0, Math.PI * 2]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#cccccc" />
      </Cylinder>
      
      {/* Teeth */}
      {[...Array(8)].map((_, index) => (
        <Cylinder 
          key={index}
          args={[0.2, 0.2, 0.3, 8]} 
          position={[
            Math.cos(index * Math.PI / 4) * 1.2,
            Math.sin(index * Math.PI / 4) * 1.2,
            0
          ]}
        >
          <meshStandardMaterial color="#aaaaaa" />
        </Cylinder>
      ))}
      
      {/* Center */}
      <Sphere args={[0.3, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#888888" />
      </Sphere>
    </group>
  );
};

const ProgressBar = () => {
  const barRef = useRef();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev + 1) % 101);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useFrame(() => {
    if (barRef.current) {
      barRef.current.scale.x = progress / 100;
    }
  });

  return (
    <group position={[0, -3, 0]}>
      <Box args={[5, 0.5, 0.1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#333333" />
      </Box>
      <Box ref={barRef} args={[5, 0.5, 0.15]} position={[-2.5 + (2.5 * progress / 100), 0, 0]} scale={[progress / 100, 1, 1]}>
        <meshStandardMaterial color="#4CAF50" />
      </Box>
    </group>
  );
};

const AnimatedScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedText />
      <WorkInProgress />
      <ProgressBar />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

const Designify = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

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
          We're Working On It!
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
          This page is under construction and will be available soon.
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
        </div>
      </motion.div>
    </div>
  );
};

export default Designify;