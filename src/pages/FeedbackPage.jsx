import React, { useState, useRef } from 'react';
import '../pages/FeedbackPage.css'; // Import your CSS file for styling
import emailjs from '@emailjs/browser';

const FeedbackPage = () => {
  const form = useRef();

  // State variables to manage feedback form inputs
  const [feedback, setFeedback] = useState('');
  const [category, setCategory] = useState('');
  const [email, setEmail] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!email || !feedback || !category) {
      alert('Please fill all the fields');
      return;
    }

    emailjs
      .sendForm('service_fxkmos4', 'template_cf1lr8m', form.current, 'oFuNlKly5wrC1Eh55')
      .then(
        () => {
          alert('Feedback submitted successfully!');
          // Clear form fields after successful submission
          setFeedback('');
          setCategory('');
          setEmail('');
        },
        (error) => {
          alert('An error occurred. Your message was not sent. Please try again.');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="feedback-container">
      <h1 className="feedback-header">Feedback Zone: Let Your Voice Be Heard!</h1>
      <p className="feedback-description">
        Welcome to our Feedback Zone, where your thoughts matter most. We value your opinions and strive to continuously improve based on your feedback. Whether you've got suggestions, questions, or just want to share your experience, this is the place to do it.
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="email"
          name="user_email"
          className="feedback-input1"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          name="message"
          className="feedback-input"
          placeholder="Type your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
        <div className="category-dropdown">
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="category-select"
            required
          >
            <option value="" disabled>Select Category</option>
            <option value="Bug Report">Bug Report</option>
            <option value="Feature Request">Feature Request</option>
            <option value="General Feedback">General Feedback</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {/*<div className="user-feedback">
        <h2>What Our Users Are Saying:</h2>
        <div className="feedback-item">
          <p className="user-comment">"I've been using [Product/Service] for months now, and I'm blown away by how responsive the team is to feedback. Keep up the great work!" - Sarah M.</p>
        </div>
        <div className="feedback-item">
          <p className="user-comment">"I had a question about [Feature], and within minutes of submitting my query through the feedback form, I received a helpful response. Thanks for the prompt assistance!" - John D.</p>
        </div>
        <div className="feedback-item">
          <p className="user-comment">"I love the new updates! The interface is so much cleaner now, and I appreciate the attention to detail. It's clear that the team listens to feedback." - Emily W.</p>
        </div>
      </div>*/}

      <div className="social-media">
        <h2>Stay Connected:</h2>
        <div className="social-media-icons">
          <a href="https://www.facebook.com"><img src="facebook-icon.png" alt="Facebook" /></a>
          <a href="https://www.twitter.com"><img src="twitter-icon.png" alt="Twitter" /></a>
          <a href="https://www.instagram.com"><img src="instagram-icon.png" alt="Instagram" /></a>
          {/* Add more social media icons and links as needed */}
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
