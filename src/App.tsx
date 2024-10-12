import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import LearningPaths from './pages/LearningPaths';
import IDE from './pages/IDE';
import Community from './pages/Community';
import Career from './pages/Career';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning-paths" element={<LearningPaths />} />
            <Route path="/ide" element={<IDE />} />
            <Route path="/community" element={<Community />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;