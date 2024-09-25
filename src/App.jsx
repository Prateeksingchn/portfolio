import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Projects from './components/Projects';
import Designify from './components/Designify';
import AboutPage from './components/AboutPage';
import Loader from './components/Loader'; // You'll need to create this component
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    setTimeout(() => setLoading(false), 5500);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/designify" element={<Designify />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Layout>
      )}
    </Router>
  );
}

export default App;
