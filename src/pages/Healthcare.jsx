import React from 'react';
//import health from '../assets/health.jpg';
import health from '../assets/2hea.jpg';
//import banner from '../assets/health-banner.png';
import banner from '../assets/healthBanner.png';
import '../pages/Healthcare.css';
import H1 from "../assets/hc1.jpg";
import H2 from "../assets/hc2-copy.jpg";
import H3 from "../assets/hc3.jpg";

const Healthcare = () => {
  return (
    <>
      {/** just comment
            <div className="Banner-image-content">
               <img src={banner} alt="Healthcare Services" />
             </div>
      */}

      <div className="Htext-content">

        <h2>Healthcare Services</h2>
        <p>Learn about the UK's healthcare system, how to register with a GP, and accessing medical services.</p>

        {/*} <div className="image-content">
          <img src={health} alt="Healthcare Services" />
  </div>*/}

        <div className="Hlinks">
          <div className="Hlink">
            <div className="Hlink-content">
              <a href="https://www.google.com/search?q=NHS+Overview&client=firefox-b-d&sca_esv=a8b1485e4aab9472&sca_upv=1&ei=zixLZoG2FcuqhbIPocmlyAE&ved=0ahUKEwiB1b6jiZyGAxVLVUEAHaFkCRkQ4dUDCBA&oq=NHS+Overview&gs_lp=Egxnd3Mtd2l6LXNlcnAiDE5IUyBPdmVydmlldzIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgsQABiABBiGAxiKBTIIEAAYgAQYogRIpBRQ9QVY9QVwAXgBkAEAmAFyoAFyqgEDMC4xuAEMyAEA-AEC-AEBmAICoAKuAcICDRAAGLADGJIDGNYEGEfCAg0QABiABBiwAxjWBBhHGMkDwgIKEAAYsAMY1gQYR8ICDhAAGIAEGLADGJIDGIoFwgINEAAYgAQYsAMYQxiKBcICGRAuGIAEGLADGEMYxwEYyAMYigUYrwPQAUoGUCkGUKsJcAF4AJABAJgBfAGgAZAGkgEDMi0xuAEMsAEB-AEC-AEBmAICoAKoAqoBA8gBAPgBAZgCAqgCqgEHZ3dzLXdpei1zZXJwwAEB&sclient=gws-wiz-serp" target="_blank">NHS Overview</a>
              <p className="Hlink-description">This link provides an overview of the National Health Service (NHS) in the UK. Learn about its history, structure, and the wide range of healthcare services it offers to residents.</p>
            </div>
            <div className="Hlink-image">
              <img src={H2} alt="NHS Overview" />
            </div>
          </div>

          <div className="Hlink">
            <div className="Hlink-image">
              <img src={H1} alt="Register with a GP" />
            </div>
            <div className="Hlink-content">
              <a href="https://www.google.com/search?q=Register+with+a+GP&client=firefox-b-d&sca_esv=a8b1485e4aab9472&sca_upv=1&ei=Fi1LZtT4N6GZhboP7dWbuAc&ved=0ahUKEwjc-4WwiZyGAxWY_0HHbU0Df4Q4dUDCBA&oq=Register+with+a+GP&gs_lp=Egxnd3Mtd2l6LXNlcnAiE1JlZ2lzdGVyIHdpdGggYSBHUHMyBRAhGKABMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5I5xRQkRFYkRZwAXgAkAEBogELCAEQARgWGB4yCBAAGIAEGIoFGLEDGIMBwgINEAAYgAQYsAMYyQMYigUyBRAAGIAEwgINEAAYgAQYsAMYyQMYgATCAg4QLhiABBiwAxjHARiABMICCxAuGIAEGLEDMgWCAgsQLhiABBiwAxjHARgINEAAYgAQYsAMYyQMYigUyCxAAGIAEGIoFMg4QLhiABBiwAxjHARgKEAIYxwEY0QPCAgsQABiABBiwAxjHARjRA8ICCxAAGIAEGLEDMgsQABiABBiwAxjHARjRA9gBAeABlgG2AaABiwGqAQMyLTG4AQPIAQD4AQL4AQHCAg4QLhiABBiwAxjHARjWBBhHwgINEAAYgAQYsAMY1gQYR8ICBRAAGIAEwgINEAAYgAQYsAMY1gQYQhHCAg8QABiABBiwAxjHARiKBRiRBPgBKN0FUK4JUMoKcAF4AJABAJgBmAGaAZgBkgEDMC4xuAEAyAEA-AEBiAYBgAHoAqkEqgEDyAEA-AEBiAYBgAHoAqkEqgEHZ3dzLXdpei1zZXJwwAEB&sclient=gws-wiz-serp" target="_blank">Register with a GP</a>
              <p className="Hlink-description">Find out how to register with a General Practitioner (GP) in the UK. This link provides step-by-step guidance on the registration process and what documents you'll need.</p>
            </div>
          </div>

          <div className="Hlink">
            <div className="Hlink-content">
              <a href="https://www.google.com/search?q=Health+Insurance+for+Expats&client=firefox-b-d&sca_esv=a8b1485e4aab9472&sca_upv=1&ei=JS1LZryqILCIhbIPi-K0uAo&ved=0ahUKEwiP6_bkiZyGAxX9g_0HHR8EDqoQ4dUDCBA&oq=Health+Insurance+for+Expats&gs_lp=Egxnd3Mtd2l6LXNlcnAiG0hlYWx0aCBJbnN1cmFuY2UgZm9yIEV4cGF0czIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjILEAAYgAQYxwEYrwEyCBAAGIAEGIoFMggQABiABBiiBTIKEAAYgAQYsAMYigUyCBAAGIAEGKIEyCBAAGIAEGKIEyCBAAGIAEGKIEyCBAAGIAEGKIEwgINEAAYgAQYsAMY1gQYR8ICBRAAGIAEwgINEAAYgAQYsAMY1gQYQhHCAg8QABiABBiwAxjHARiKBRiRBPgBqgYyDRAAGIAEGLEDMgsQABiABBiwAxjHARjRA1ACUKsJUM8KcAF4AJABAJgB5AGgAZAGkgEDMC4xuAEAyAEA-AEBiAYBgAHoAqkEqgEHZ3dzLXdpei1zZXJwwAEB&sclient=gws-wiz-serp" target="_blank">Health Insurance for Expats</a>
              <p className="Hlink-description">Explore options for health insurance specifically tailored for expatriates living in the UK. This link helps you understand different policies and coverage options available.</p>
            </div>
            <div className="Hlink-image">
              <img src={H3} alt="Health Insurance for Expats" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Healthcare;
