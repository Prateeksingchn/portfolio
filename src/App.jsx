import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import Home from './components/Home';
import Projects from './components/Projects';
import Designify from './components/Designify';
import AboutPage from './components/AboutPage';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <Router>
      <div className="bg-black min-h-screen">
        <AnimatePresence mode="wait">
          {loading ? (
            <Loader key="loader" onLoadingComplete={handleLoadingComplete} />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
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
      </div>
    </Router>
  );
}

export default App;