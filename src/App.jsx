import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Feedback from './pages/FeedbackPage';
import Signup from './pages/Signup'; // Make sure the import path is correct
import Login from './pages/Login';   // Make sure the import path is correct
import Footer from './components/Footer';
import Nav from './components/Nav';
import Community from './pages/Community';
import LegalAssistance from './pages/LegalAssistance';
import Healthcare from './pages/Healthcare';
import Education from './pages/Education';
import Employment from './pages/Employment';



function App() {
  const [userName, setUserName] = useState(null);

  return (
    <div className="container">
      <Nav userName={userName} setUserName={setUserName} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUserName={setUserName} />} />
        <Route path="/signup" element={<Signup setUserName={setUserName} />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/resources/community" element={<Community />} />
        <Route path="/resources/legal-assistance" element={<LegalAssistance />} />
        <Route path="/resources/healthcare" element={<Healthcare />} />
        <Route path="/resources/education" element={<Education />} />
        <Route path="/resources/employment" element={<Employment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
