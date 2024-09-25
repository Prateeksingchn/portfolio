import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './components/Home';
import Projects from './components/Projects';
import Designify from './components/Designify';
import AboutPage from './components/AboutPage';
import Loader from './components/Loader';
import './App.css';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -50,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.3,
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onLoadingComplete={handleLoadingComplete} />
        ) : (
          <motion.div
            key="content"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/designify" element={<Designify />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </Layout>
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;