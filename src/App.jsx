import React, { useState , useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Feedback from './pages/FeedbackPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Community from './pages/Community';
import LegalAssistance from './pages/LegalAssistance';
import Healthcare from './pages/Healthcare';
import Education from './pages/Education';
import Employment from './pages/Employment';

const apiUrl = `http://localhost:3030`;
//const apiUrl = `https://abroadhelp.up.railway.app`

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toggleSignUp, setToggleSignUp] = useState(false);
 const [userName, setUserName] = useState(null)

  const handleRegister = async ({ username, email, password }) => {
    const createdRegister = await fetch(`${apiUrl}/user/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    // Assuming successful registration, set isSignedUp to true
    setIsSignedUp(true);
  };

 

  useEffect(() => {
     console.log('this is login', isLoggedIn)
  },[isLoggedIn])

  return (
    <div className="container">
      <Nav userName={userName} setUserName={setUserName}/>

   {/**   {!isLoggedIn && (
        <>
          {toggleSignUp ? (
            <Login setToggleSignUp={setToggleSignUp} toggleSignUp={toggleSignUp} handleSubmit={handleLogin} />
          ) : (
            <Signup setToggleSignUp={setToggleSignUp} toggleSignUp={toggleSignUp} handleSubmit={handleRegister} />
          )}
        </>
      )}*/} 
      
        <>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login  userName={userName} setUserName={setUserName} /> } />
          <Route path="/signup" element={<Signup />} />
       
            <Route path="/resources" element={<Resources />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/resources/community" element={<Community />} />
            <Route path="/resources/legal-assistance" element={<LegalAssistance />} />
            <Route path="/resources/healthcare" element={<Healthcare />} />
            <Route path="/resources/education" element={<Education />} />
            <Route path="/resources/employment" element={<Employment />} />
          </Routes>
          <Footer />
        </>
     
    </div>
  );
}

export default App;






