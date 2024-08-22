import '../pages/Login.css';
import { useState } from 'react';

//const apiUrl = `http://localhost:3030`; // Adjust as needed
const apiUrl = `https://welcomebackend.onrender.com`

export default function LogInForm({ setUserName }) {
  const [logIn, setLogIn] = useState({ email: '', password: '' });

  const handleLogin = async ({ email, password }) => {
    try {
      const response = await fetch(`${apiUrl}/user/logIn`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userDetails = await response.json();
        localStorage.setItem('user', JSON.stringify(userDetails));
        setUserName(userDetails.userName);
        console.log('Login successful:', userDetails);
      } else {
        const error = await response.json();
        console.error('Login failed:', error);
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  const handleSubmitDecorator = async (e) => {
    e.preventDefault();
    await handleLogin(logIn);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogIn({
      ...logIn,
      [name]: value,
    });
  };

  return (
    <div className="logincontainer">
      <form className="loginform" onSubmit={handleSubmitDecorator}>
        <h2>Log In</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Please Enter your Email"
            value={logIn.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Please Enter your Password"
            value={logIn.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
