import '../pages/Login.css';
import { useState } from 'react';

const apiUrl = `http://localhost:3030`;
//const apiUrl = `http://localhost:3000`;
//const apiUrl = `https://abroadhelp.up.railway.app`

export default function LogInForm({ handleSubmit, setToggleSignUp, toggleSignUp, userName, setUserName }) {
  const [logIn, setLogIn] = useState({ email: '', password: '' });

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

  const handleLogin = async ({ email, password }) => {
    try {
      const verifyLogin = await fetch(`${apiUrl}/user/logIn`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (verifyLogin.ok) {
        const userDetails = await verifyLogin.json();
        localStorage.setItem('user', JSON.stringify(userDetails));
        let user = JSON.parse(localStorage.getItem('user'));
        setUserName(user.userName);
      } else {
        console.error('Login failed:', verifyLogin.statusText);
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  return (
    <div className="logincontainer">
      <form className="loginform" onSubmit={handleSubmitDecorator}>
        <h2>LogIn</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Please Enter your Email"
            value={logIn.email}
            onChange={handleChange}
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
          />
        </div>
        <button type="submit">Submit</button>
        {/**   <p>Yet to sign up? Click on the button below</p>
        <button type="button" onClick={() => setToggleSignUp(!toggleSignUp)}>Sign Up</button>*/}
      </form>
    </div>
  );
}
