import React from 'react';
import schoolImage from '../assets/school.jpg';
import '../pages/Education.css';

const Education = () => {
  return (
    <div className="education-container">
      <h2>Education and Schools</h2>
      <div className="ccontent">
        <div className="ttext-content">
          <p>Information on enrolling your children in school, higher education opportunities, and language courses.</p>
          <div className="llink-container">
            <div className="llink">
              <a href="https://www.gov.uk/schools-admissions" target="_blank" rel="noopener noreferrer">School Admissions in the UK</a>
              <p>Information on enrolling your children in schools across the UK.</p>
            </div>
            <div className="llink">
              <a href="https://www.ucas.com/" target="_blank" rel="noopener noreferrer">UK Universities and Colleges</a>
              <p>Explore higher education opportunities in the UK.</p>
            </div>
            <div className="llink">
              <a href="https://www.britishcouncil.org/english" target="_blank" rel="noopener noreferrer">English Language Courses</a>
              <p>Find English language courses offered by the British Council.</p>
            </div>
          </div>
        </div>
        <div className="iimage-content">
          <img src={schoolImage} alt="Education and Schools"/>
        </div>
      </div>
    </div>
  );
}

export default Education;
