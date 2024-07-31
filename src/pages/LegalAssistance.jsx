import React from 'react';
import legal from '../assets/legal.jpg';
import legal2 from '../assets/legal-2.jpg';
import legal3 from '../assets/legal-3.jpg';
import '../pages/LegalAssistance.css';

const LegalAssistance = () => {
  return (
    <div className='containerLegal'>
      <h2 className="Legaltitle">Legal Assistance</h2>
      <p className="Legaldescription">
        Access information on your legal rights, immigration assistance, and finding legal aid services.
      </p>

      <div className="Legallinks">
        <div className="Legallink Legallink1">
          <div className="Legalimage-content">
            <img src={legal} alt="Legal Assistance" />
          </div>
          <div className="Legallink-content">
            <a href="https://www.google.com/search?client=firefox-b-d&q=UK+Government+Immigration+Services" target="_blank" rel="noopener noreferrer">UK Government Immigration Services</a>
            <p className="Legallink-description">This link likely directs users to the official website or portal provided by the UK government for immigration services. Users can access information regarding visas, residency permits, citizenship, and other immigration-related inquiries. It's a reliable source for understanding legal requirements and procedures related to immigration in the UK.</p>
          </div>
        </div>

        <div className="Legallink Legallink2">
          <div className="Legallink-content">
            <a href="https://www.google.com/search?q=Legal+Aid+for+Immigrants&client=firefox-b-d&sca_esv=a8b1485e4aab9472&sca_upv=1&ei=hCxLZuXfGqKG9u8P2sahuAw&ved=0ahUKEwjlsZ-AiZyGAxUig_0HHVpjCMcQ4dUDCBA&oq=Legal+Aid+for+Immigrants&gs_lp=Egxnd3Mtd2l6LXNlcnAiGExlZ2FsIEFpZCBmb3IgSW1taWdyYW50czIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5I9xBQiAZYiAZwAXgBkAEAmAGLAaABiwGqAQMwLjG4AQzIAQD4AQL4AQGYAgKgAqEBwgIKEAAYsAMY1gQYR5gDAIgGAZAGCJIHAzEuMaAHogY&sclient=gws-wiz-serp" target="_blank" rel="noopener noreferrer">Legal Aid for Immigrants</a>
            <p className="Legallink-description">This link probably leads to resources or organizations that offer legal aid specifically tailored to immigrants in the UK. Immigrants facing legal challenges, such as asylum seekers or refugees, can find assistance with legal representation, advice, or advocacy. It's essential for ensuring access to justice and protection for vulnerable immigrant populations who may not afford legal services otherwise.</p>
          </div>
          <div className="Legalimage-content">
            <img src={legal2} alt="Legal Assistance" />
          </div>
        </div>

        <div className="Legallink Legallink3">
          <div className="Legalimage-content">
            <img src={legal3} alt="Legal Assistance" />
          </div>
          <div className="Legallink-content">
            <a href="https://www.google.com/search?q=Citizens+Advice+Bureau&client=firefox-b-d&sca_esv=a8b1485e4aab9472&sca_upv=1&ei=uSxLZsL4AcCD9u8Pi_aauAk&ved=0ahUKEwiCuamZiZyGAxXAgf0HHQu7BpcQ4dUDCBA&oq=Citizens+Advice+Bureau&gs_lp=Egxnd3Mtd2l6LXNlcnAiFkNpdGl6ZW5zIEFkdmljZSBCdXJlYXUyDhAAGIAEGJECGLEDGIoFMg4QLhiABBiSAxjHARivATIIEAAYgAQYkgMyDhAAGIAEGJECGMkDGIoFMgsQABiABBiRAhiKBTIKEAAYgAQYQxiKBTIFEAAYgAQyCxAuGIAEGMcBGK8BMgUQABiABDIFEAAYgARI9A9QmQVYmQVwAXgBkAEAmAGCAqABggKqAQMyLTG4AQzIAQD4AQL4AQGYAgKgAqcCwgIKEAAYsAMY1gQYR5gDAIgGAZAGCJIHBTEuMC4xoAfBCw&sclient=gws-wiz-serp" target="_blank" rel="noopener noreferrer">Citizens Advice Bureau</a>
            <p className="Legallink-description">This link typically directs users to the website of the Citizens Advice Bureau (CAB), a network of independent charities across the UK. CAB offers free, confidential, and impartial advice to help individuals understand their rights and responsibilities across various legal and practical issues. Users can find guidance on diverse topics including housing, employment, debt, benefits, and consumer rights. It's a valuable resource for anyone seeking general legal advice or assistance with everyday problems they might encounter.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalAssistance;
