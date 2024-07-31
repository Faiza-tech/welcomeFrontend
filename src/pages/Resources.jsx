import './Resources.css'; // Import CSS file for styling
import React from 'react';
//import community from '../assets/community.jpg'
import health from '../assets/health.jpg'
import school from '../assets/school.jpg'
import job from '../assets/job.jpg'
import legal from '../assets/legal.jpg'

const Resources = () => {
  return (
    <div className="about-container">
      <header>
        <h1>Resources & Support</h1>
      </header>

      <main>
        <section className="resource-section">
          <div className="text-content">
            <h2>Community Support Groups</h2>
            <p>Find local community groups that can help you settle in, meet new people, and find support in your area.</p>
            <ul>
              <li><a href="https://www.google.com/search?client=firefox-b-d&q=pakistani+community+centre+london#ip=1" target="_blank">Pakistani Community Centre, London</a></li>
              <li><a href="https://www.google.com/search?q=Bradford+Pakistani+Community+Association&client=firefox-b-d&sca_esv=a8b1485e4aab9472&sca_upv=1&ei=6ytLZurpEpmO9u8P2KmpoAQ&ved=0ahUKEwiqi523iJyGAxUZh_0HHdhUCkQQ4dUDCBA&oq=Bradford+Pakistani+Community+Association&gs_lp=Egxnd3Mtd2l6LXNlcnAiKEJyYWRmb3JkIFBha2lzdGFuaSBDb21tdW5pdHkgQXNzb2NpYXRpb24yBRAhGKABSIArUKgGWKgGcAF4AJABAJgB6wGgAesBqgEDMi0xuAEMyAEA-AEC-AEBmAICoAKCAsICDhAuGIAEGLADGMcBGK8BwgIOEAAYgAQYsAMYhgMYigXCAgsQABiABBiwAxiiBMICCxAAGLADGKIEGIkFmAMAiAYBkAYGkgcFMS4wLjGgB-sB&sclient=gws-wiz-serp" target="_blank">Bradford Pakistani Community Association</a></li>
              <li><a href="https://www.google.com/search?q=+Manchester+Pakistani+Society&client=firefox-b-d&sca_esv=a8b1485e4aab9472&sca_upv=1&ei=DyxLZsrLIfGH9u8P0_OliAc&ved=0ahUKEwiKj8HIiJyGAxXxg_0HHdN5CXEQ4dUDCBA&oq=+Manchester+Pakistani+Society&gs_lp=Egxnd3Mtd2l6LXNlcnAiHSBNYW5jaGVzdGVyIFBha2lzdGFuaSBTb2NpZXR5MgYQABgWGB4yBhAAGBYYHjILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMggQABiABBiiBDIIEAAYgAQYoQRIlhZQxQhYxQhwAXgAkAEBogELCAEQARgWGB4yBhAAGBYYHjIGEAAYFhgeMggQABiABBiiBDILEAAYgAQYsAMYigUyCxAAGIAEGIoFGJQGUMQHWMQHcAF4AJABAJgB6gGgAeoBqgEDMi0xuAEMyAEA-AEC-AEBmAICoAL7AcICCxAAGIAEGLADGKIEmAMAiAYBkAYEkgcFMS4wLjGgB-AE&sclient=gws-wiz-serp" target="_blank">Manchester Pakistani Society</a></li>
            </ul>
          </div>
          <div className="image-content">
            <img src={community} alt="Community Support"/>
          </div>
        </section>

        <section className="resource-section">
          <div className="text-content">
            <h2>Legal Assistance</h2>
            <p>Access information on your legal rights, immigration assistance, and finding legal aid services.</p>
            <ul>
              <li><a href="https://www.google.com/search?client=firefox-b-d&q=UK+Government+Immigration+Services" target="_blank">UK Government Immigration Services</a></li>
              <li><a href="https://www.google.com/search?q=Legal+Aid+for+Immigrants&client=firefox-b-d&sca_esv=a8b1485e4aab9472&sca_upv=1&ei=hCxLZuXfGqKG9u8P2sahuAw&ved=0ahUKEwjlsZ-AiZyGAxUig_0HHVpjCMcQ4dUDCBA&oq=Legal+Aid+for+Immigrants&gs_lp=Egxnd3Mtd2l6LXNlcnAiGExlZ2FsIEFpZCBmb3IgSW1taWdyYW50czIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5I9xBQiAZYiAZwAXgBkAEAmAGLAaABiwGqAQMwLjG4AQzIAQD4AQL4AQGYAgKgAqEBwgIKEAAYsAMY1gQYR5gDAIgGAZAGCJIHAzEuMaAHogY&sclient=gws-wiz-serp" target="_blank">Legal Aid for Immigrants</a></li>
              <li><a href="https://www.google.com/search?q=Citizens+Advice+Bureau&client=firefox-b-d&sca_esv=a8b1485e4aab9472&sca_upv=1&ei=uSxLZsL4AcCD9u8Pi_aauAk&ved=0ahUKEwiCuamZiZyGAxXAgf0HHQu7BpcQ4dUDCBA&oq=Citizens+Advice+Bureau&gs_lp=Egxnd3Mtd2l6LXNlcnAiFkNpdGl6ZW5zIEFkdmljZSBCdXJlYXUyDhAAGIAEGJECGLEDGIoFMg4QLhiABBiSAxjHARivATIIEAAYgAQYkgMyDhAAGIAEGJECGMkDGIoFMgsQABiABBiRAhiKBTIKEAAYgAQYQxiKBTIFEAAYgAQyCxAuGIAEGMcBGK8BMgUQABiABDIFEAAYgARI9A9QmQVYmQVwAXgBkAEAmAGCAqABggKqAQMyLTG4AQzIAQD4AQL4AQGYAgKgAqcCwgIKEAAYsAMY1gQYR5gDAIgGAZAGCJIHBTEuMC4xoAfBCw&sclient=gws-wiz-serp" target="_blank">Citizens Advice Bureau</a></li>
            </ul>
          </div>
          <div className="image-content">
            <img src={legal} alt="Legal Assistance"/>
          </div>
        </section>

        <section className="resource-section">
          <div className="text-content">
            <h2>Healthcare Services</h2>
            <p>Learn about the UK's healthcare system, how to register with a GP, and accessing medical services.</p>
            <ul>
              <li><a href="https://www.google.com/search?q=NHS+Overview&client=firefox-b-d&sca_esv=a8b1485e4aab9472&sca_upv=1&ei=zixLZoG2FcuqhbIPocmlyAE&ved=0ahUKEwiB1b6jiZyGAxVLVUEAHaFkCRkQ4dUDCBA&oq=NHS+Overview&gs_lp=Egxnd3Mtd2l6LXNlcnAiDE5IUyBPdmVydmlldzIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgsQABiABBiGAxiKBTIIEAAYgAQYogRIpBRQ9QVY9QVwAXgBkAEAmAFyoAFyqgEDMC4xuAEMyAEA-AEC-AEBmAICoAKuAcICDRAAGLADGJIDGNYEGEfCAg0QABiABBiwAxjWBBhHGMkDwgIKEAAYsAMY1gQYR8ICDhAAGIAEGLADGJIDGIoFwgINEAAYgAQYsAMYQxiKBcICGRAuGIAEGLADGEMYxwEYyAMYigUYrwPQAUoGUCkGUKsJcAF4AJABAJgBfAGgAZAGkgEDMi0xuAEMsAEB-AEC-AEBmAICoAKoAqoBA8gBAPgBAZgCAqgCqgEHZ3dzLXdpei1zZXJwwAEB&sclient=gws-wiz-serp" target="_blank">NHS Overview</a></li>
              <li><a href="https://www.google.com/search?q=Register+with+a+GP&client=firefox-b-d&sca_esv=a8b1485e4aab9472&sca_upv=1&ei=Fi1LZtT4N6GZhboP7dWbuAc&ved=0ahUKEwjc-4WwiZyGAxWY_0HHbU0Df4Q4dUDCBA&oq=Register+with+a+GP&gs_lp=Egxnd3Mtd2l6LXNlcnAiE1JlZ2lzdGVyIHdpdGggYSBHUHMyBRAhGKABMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5I5xRQkRFYkRZwAXgAkAEBogELCAEQARgWGB4yCBAAGIAEGIoFGLEDGIMBwgINEAAYgAQYsAMYyQMYigUyBRAAGIAEwgINEAAYgAQYsAMYyQMYgATCAg4QLhiABBiwAxjHARiABMICCxAuGIAEGLEDMgWCAgsQLhiABBiwAxjHARgINEAAYgAQYsAMYyQMYigUyCxAAGIAEGIoFMg4QLhiABBiwAxjHARgKEAIYxwEY0QPCAgsQABiABBiwAxjHARjRA8ICCxAAGIAEGLEDMgsQABiABBiwAxjHARjRA9gBAeABlgG2AaABiwGqAQMyLTG4AQPIAQD4AQL4AQHCAg4QLhiABBiwAxjHARjWBBhHwgINEAAYgAQYsAMY1gQYR8ICBRAAGIAEwgINEAAYgAQYsAMY1gQYQhHCAg8QABiABBiwAxjHARiKBRiRBPgBKN0FUK4JUMoKcAF4AJABAJgBmAGaAZgBkgEDMC4xuAEAyAEA-AEBiAYBgAHoAqkEqgEDyAEA-AEBiAYBgAHoAqkEqgEHZ3dzLXdpei1zZXJwwAEB&sclient=gws-wiz-serp" target="_blank">Register with a GP</a></li>
              <li><a href="https://www.google.com/search?q=Health+Insurance+for+Expats&client=firefox-b-d&sca_esv=a8b1485e4aab9472&sca_upv=1&ei=JS1LZryqILCIhbIPi-K0uAo&ved=0ahUKEwiP6_bkiZyGAxX9g_0HHR8EDqoQ4dUDCBA&oq=Health+Insurance+for+Expats&gs_lp=Egxnd3Mtd2l6LXNlcnAiG0hlYWx0aCBJbnN1cmFuY2UgZm9yIEV4cGF0czIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjILEAAYgAQYxwEYrwEyCBAAGIAEGIoFMggQABiABBiiBTIKEAAYgAQYsAMYigUyCBAAGIAEGKIEyCBAAGIAEGKIEyCBAAGIAEGKIEyCBAAGIAEGKIEwgINEAAYgAQYsAMY1gQYR8ICBRAAGIAEwgINEAAYgAQYsAMY1gQYQhHCAg8QABiABBiwAxjHARiKBRiRBPgBqgYyDRAAGIAEGLEDMgsQABiABBiwAxjHARjRA1ACUKsJUM8KcAF4AJABAJgB5AGgAZAGkgEDMC4xuAEAyAEA-AEBiAYBgAHoAqkEqgEHZ3dzLXdpei1zZXJwwAEB&sclient=gws-wiz-serp" target="_blank">Health Insurance for Expats</a></li>
            </ul>
          </div>
          <div className="image-content">
            <img src={health} alt="Healthcare Services"/>
          </div>
        </section>

        <section className="resource-section">
          <div className="text-content">
            <h2>Education and Schools</h2>
            <p>Information on enrolling your children in school, higher education opportunities, and language courses.</p>
            <ul>
              <li><a href="https://www.gov.uk/schools-admissions" target="_blank">School Admissions in the UK</a></li>
              <li><a href="https://www.ucas.com/" target="_blank">UK Universities and Colleges</a></li>
              <li><a href="https://www.britishcouncil.org/english" target="_blank">English Language Courses</a></li>
            </ul>
          </div>
          <div className="image-content">
            <img src={school} alt="Education and Schools"/>
          </div>
        </section>

        <section className="resource-section">
          <div className="text-content">
            <h2>Employment and Careers</h2>
            <p>Guidance on finding a job, understanding the UK job market, and career support services.</p>
            <ul>
              <li><a href="https://www.google.com/search?q=Job+Search+Websites&client=firefox-b-d&sca_esv=a8b1485e4aab9472&sca_upv=1&ei=Wy1LZsmrMI-C8gPAxr3uAg&ved=0ahUKEwi_9LPOiZyGAxWfUUEAHVdACZ4Q4dUDCBA&oq=Job+Search+Websites&gs_lp=Egxnd3Mtd2l6LXNlcnAiDkpvYiBTZWFyY2ggV2Vic2l0ZXMyBRAhGKABMgUQABiABDIHCAAQigUQQzIFEAAYgAQyBxAAGIoFEEMyBxAAGIoFENQEMggQABiABBiiBDIIEAAYgAQYogQyBxAAGIoFENQEOgUIIRCgAToKCAAQigUQsQMQQzoHCAAQigUQQzoNCAAQigUQyAMQsAMQQzoKCAAQgAQQhwJQAFjFBWDGBWgAcAB4AYAB5AGIAewFkgEEMC4xOZgBAKABAcgBDcABAdoBBAgBGAg&sclient=gws-wiz-serp" target="_blank">Job Search Websites</a></li>
              <li><a href="https://www.google.com/search?q=Career+Advice+Services&client=firefox-b-d&sca_esv=a8b1485e4aab9472&sca_upv=1&ei=kC1LZt2XG5-U8gOqs5SoBw&ved=0ahUKEwib-vfPiZyGAxX7g_0HHT6uAD8Q4dUDCBA&oq=Career+Advice+Services&gs_lp=Egxnd3Mtd2l6LXNlcnAiF0NhcmVlciBBZHZpY2UgU2VydmljZXMyBRAhGKABMgUQABiABDIHCAAQigUQQzIFEAAYgAQyBxAAGIoFEEMyBxAAGIoFENQEMggQABiABBiiBDIIEAAYgAQYogQyBxAAGIoFENQEOgUIIRCgAToNCAAQigUQyAMQsAMQQzoKCAAQigUQsQMQQzoNCAAQgAQQhwIQFDIHCAAQigUQQzoICAAQigUQhgNQAFjVC2DtD2gAcAB4AIABmgGIAZ8FkgEEMC4xOZgBAKABAcgBDcABAdoBBAgBGAg&sclient=gws-wiz-serp" target="_blank">Career Advice Services</a></li>
              <li><a href="https://www.google.com/search?q=Workplace+Rights+in+the+UK&client=firefox-b-d&sca_esv=a8b1485e4aab9472&sca_upv=1&ei=sS1LZsGmNf6a9u8Pzp6S0AQ&ved=0ahUKEwiA9I-RiZyGAxVbU0EAHQvMCxwQ4dUDCBA&oq=Workplace+Rights+in+the+UK&gs_lp=Egxnd3Mtd2l6LXNlcnAiF1dvcmtwbGFjZSBSaWdodHMgaW4gdGhlIFVLKgIIADIFECEYoAEyBRAhGKABMgUQIRigATIFEAAYgAQyBxAAGIoFEEMyBxAAGIoFENQEMggQABiABBiiBDIIEAAYgAQYogQyBxAAGIoFENQEOggQABiABBjRBDIKEAAYgAQYQxiKBTIHCAAQigUQQzoICAAQigUQhgNQAFj9DWDeEGgAcAB4AIAB6QGIAfUFkgEEMC4xMZgBAKABAcgBDMABAdoBBAgBGAg&sclient=gws-wiz-serp" target="_blank">Workplace Rights in the UK</a></li>
            </ul>
          </div>
          <div className="image-content">
            <img src={job} alt="Employment and Careers"/>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resources;
