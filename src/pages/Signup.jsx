import '../pages/Signup.css';
import { useState } from 'react';

export default function SignUpForm({ handleSubmit, toggleSignUp, setToggleSignUp }) {

  const initialState = {
    username: '',
    email: '',
    password: '',
  }
  const [signUp, setSignUp] = useState(initialState);

  const handleSubmitDecorator = (e) => {
    e.preventDefault();
    handleSubmit(signUp);
    setSignUp(initialState)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignUp({
      ...signUp,
      [name]: value,
    });
  };

  return (
    <>
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

          {/** Uncomment if needed */}
          {/* <p>Already have an account? Click on the button below</p>
          <button onClick={() => setToggleSignUp(!toggleSignUp)}>Login</button> */}
        </form>

      </div>
    </>
  );
}
