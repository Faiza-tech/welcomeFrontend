import React from 'react';
import jobImage from '../assets/job.jpg'; // Import your image file
import '../pages/Employment.css';

const Employment = () => {
  return (
    <div className="Eemployment-container">
      <h2 className="Etitle">Employment and Careers</h2>
      <div className="Econtent-container">
        <div className="Etext-content">
          <p>Guidance on finding a job, understanding the UK job market, and career support services.</p>
          <div className="Elink-container">
            <div className="Elink">
              <a href="https://www.google.com/search?q=Job+Search+Websites&client=firefox-b-d&sca_esv=a8b1485e4aab9472&sca_upv=1&ei=Wy1LZsmrMI-C8gPAxr3uAg&ved=0ahUKEwi_9LPOiZyGAxWfUUEAHVdACZ4Q4dUDCBA&oq=Job+Search+Websites&gs_lp=Egxnd3Mtd2l6LXNlcnAiDkpvYiBTZWFyY2ggV2Vic2l0ZXMyBRAhGKABMgUQABiABDIHCAAQigUQQzIFEAAYgAQyBxAAGIoFEEMyBxAAGIoFENQEMggQABiABBiiBDIIEAAYgAQYogQyBxAAGIoFENQEOgUIIRCgAToKCAAQigUQsQMQQzoHCAAQigUQQzoNCAAQigUQyAMQsAMQQzoKCAAQgAQQhwJQAFjFBWDGBWgAcAB4AYAB5AGIAewFkgEEMC4xOZgBAKABAcgBDcABAdoBBAgBGAg&sclient=gws-wiz-serp" target="_blank" rel="noopener noreferrer">Job Search Websites</a>
              <p>Find job opportunities from various websites.</p>
            </div>
            <div className="Elink">
              <a href="https://www.google.com/search?q=Career+Advice+Services&client=firefox-b-d&sca_esv=a8b1485e4aab9472&sca_upv=1&ei=kC1LZt2XG5-U8gOqs5SoBw&ved=0ahUKEwib-vfPiZyGAxX7g_0HHT6uAD8Q4dUDCBA&oq=Career+Advice+Services&gs_lp=Egxnd3Mtd2l6LXNlcnAiF0NhcmVlciBBZHZpY2UgU2VydmljZXMyBRAhGKABMgUQABiABDIHCAAQigUQQzIFEAAYgAQyBxAAGIoFEEMyBxAAGIoFENQEMggQABiABBiiBDIIEAAYgAQYogQyBxAAGIoFENQEOgUIIRCgAToNCAAQigUQyAMQsAMQQzoKCAAQigUQsQMQQzoNCAAQgAQQhwIQFDIHCAAQigUQQzoICAAQigUQhgNQAFjVC2DtD2gAcAB4AIABmgGIAZ8FkgEEMC4xOZgBAKABAcgBDcABAdoBBAgBGAg&sclient=gws-wiz-serp" target="_blank" rel="noopener noreferrer">Career Advice Services</a>
              <p>Get professional career advice and services.</p>
            </div>
            <div className="Elink">
              <a href="https://www.google.com/search?q=Workplace+Rights+in+the+UK&client=firefox-b-d&sca_esv=a8b1485e4aab9472&sca_upv=1&ei=sS1LZsGmNf6a9u8Pzp6S0AQ&ved=0ahUKEwiA9I-RiZyGAxVbU0EAHQvMCxwQ4dUDCBA&oq=Workplace+Rights+in+the+UK&gs_lp=Egxnd3Mtd2l6LXNlcnAiF1dvcmtwbGFjZSBSaWdodHMgaW4gdGhlIFVLKgIIADIFECEYoAEyBRAhGKABMgUQIRigATIFEAAYgAQyBxAAGIoFEEMyBxAAGIoFENQEMggQABiABBiiBDIIEAAYgAQYogQyBxAAGIoFENQEOggQABiABBjRBDIKEAAYgAQYQxiKBTIHCAAQigUQQzoICAAQigUQhgNQAFj9DWDeEGgAcAB4AIAB6QGIAfUFkgE" target="_blank" rel="noopener noreferrer">Workplace Rights in the UK</a>
              <p>Know your rights as an employee in the UK.</p>
            </div>
          </div>
        </div>
        <div className="Eimage-content">
          <img src={jobImage} alt="Employment and Careers"/>
        </div>
      </div>
    </div>
  );
}

export default Employment;
