import '../pages/Signup.css';
import { useState } from 'react';

//const apiUrl = `http://localhost:3030`; // Adjust as needed
const apiUrl = `https://welcomebackend.onrender.com`

export default function SignUpForm({ setUserName }) {  // Ensure setUserName is being destructured from props
  const initialState = {
    username: '',
    email: '',
    password: '',
  };

  const [signUp, setSignUp] = useState(initialState);

  const handleRegister = async ({ username, email, password }) => {
    try {
      const response = await fetch(`${apiUrl}/user/signUp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        const userDetails = await response.json();
        localStorage.setItem('user', JSON.stringify(userDetails));
        setUserName(userDetails.userName);  // Ensure setUserName is called here
        console.log('Signup successful:', userDetails);
      } else {
        const error = await response.json();
        console.error('Signup failed:', error);
      }
    } catch (error) {
      console.error('An error occurred during signup:', error);
    }
  };

  const handleSubmitDecorator = async (e) => {
    e.preventDefault();
    await handleRegister(signUp);
    setSignUp(initialState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUp({
      ...signUp,
      [name]: value,
    });
  };

  return (
    <div className="signupcontainer">
      <form className="signupform" onSubmit={handleSubmitDecorator}>
        <h2>Sign Up</h2>
        <label>
          Username
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={signUp.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            type="text"
            name="email"
            placeholder="Please enter your email"
            value={signUp.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Input your password"
            value={signUp.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
