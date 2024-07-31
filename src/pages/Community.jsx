import React from 'react';
import community from '../assets/communty-1.jpg'; // Adjust the path to your image file
import community2 from '../assets/communty-2.jpg'; 
import community3 from '../assets/communty-3.jpg'; 
import community4 from '../assets/communty-4.jpg'; 
import './Community.css'; // Import CSS file for styling

const Community = () => {
    return (
        <div className="community-container">
            <h1 className="community-title">Community Resources</h1>
            <p className="community-description">Explore various community support groups and organizations that can help you settle in, meet new people, and find support in your area.</p>

            <div className="content-wrapper">
                <div className="community-info">
                    <div className="community-image-container">
                        <img src={community} alt="Community Support" className="community-image" />
                    </div>
                    <div className="community-text-content">
                        <h3 className="community-name">Pakistani Community Centre, London</h3>
                        <p className="community-description">The Pakistani Community Centre in London is a hub for cultural events, educational workshops, and social gatherings. It serves as a vital resource for the Pakistani community, providing support and fostering a sense of belonging.</p>
                        <p className="community-website"><a href="https://www.google.com/search?client=firefox-b-d&q=pakistani+community+centre+london#ip=1" target="_blank" rel="noopener noreferrer">Visit their website</a></p>
                    </div>
                </div>

                <div className="community-info">
                    <div className="community-image-container">
                        <img src={community2} alt="Community Support" className="community-image" />
                    </div>
                    <div className="community-text-content">
                        <h3 className="community-name">Birmingham Pakistani Association</h3>
                        <p className="community-description">The Birmingham Pakistani Association is dedicated to fostering a supportive community environment through cultural events, educational initiatives, and social activities. It serves as a central hub for individuals and families to connect and celebrate Pakistani heritage.</p>
                        <p className="community-website"><a href="https://www.google.com/search?client=firefox-b-d&sca_esv=d418a5ca43beae34&sca_upv=1&q=birmingham+community&source=lnms&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J5MIFhvnvU242yFxzEEp3BeeRDeomFf8DkO7myIzvXpiKWEA88RkfVUVMwobWgjpVPOSuiJ7TPcvhCrgNuDXrikZTpUrgssjWeU7bmuabM3i2LP0Zb7Q64aRYznkkmJaynSUyoKsbtNvdZ5ezrNZ7YHPPt9yOl-caQWTHNmddBPjQeKQMg&sa=X&ved=2ahUKEwjUw_DC-_GGAxUHZkEAHVUoBHMQ0pQJegQIChAB&biw=1536&bih=703&dpr=1.25" target="_blank" rel="noopener noreferrer">Visit their website</a></p>
                    </div>
                </div>

                <div className="community-info">
                    <div className="community-image-container">
                        <img src={community3} alt="Community Support" className="community-image" />
                    </div>
                    <div className="community-text-content">
                        <h3 className="community-name">Bradford Pakistani Community Association</h3>
                        <p className="community-description">The Bradford Pakistani Community Association is deeply rooted in the local community, offering a range of services from language classes to job placement assistance. Through its diverse programs, it aims to empower individuals and strengthen community bonds.</p>
                        <p className="community-website"><a href="https://www.google.com/search?q=Bradford+Pakistani+Community+Association&client=firefox-b-d&sca_esv=a8b1485e4aab9472&sca_upv=1&ei=6ytLZurpEpmO9u8P2KmpoAQ&ved=0ahUKEwiqi523iJyGAxUZh_0HHdhUCkQQ4dUDCBA&oq=Bradford+Pakistani+Community+Association&gs_lp=Egxnd3Mtd2l6LXNlcnAiKEJyYWRmb3JkIFBha2lzdGFuaSBDb21tdW5pdHkgQXNzb2NpYXRpb24yBRAhGKABSIArUKgGWKgGcAF4AJABAJgB6wGgAesBqgEDMi0xuAEMyAEA-AEC-AEBmAICoAKCAsICDhAuGIAEGLADGMcBGK8BwgIOEAAYgAQYsAMYhgMYigXCAgsQABiABBiwAxiiBMICCxAAGLADGKIEGIkFmAMAiAYBkAYGkgcFMS4wLjGgB-sB&sclient=gws-wiz-serp" target="_blank" rel="noopener noreferrer">Visit their website</a></p>
                    </div>
                </div>

                <div className="community-info">
                    <div className="community-image-container">
                        <img src={community4} alt="Community Support" className="community-image" />
                    </div>
                    <div className="community-text-content">
                        <h3 className="community-name">Manchester Pakistani Society</h3>
                        <p className="community-description">The Manchester Pakistani Society is a vibrant community organization that celebrates Pakistani culture through events, festivals, and community outreach programs. It provides a platform for individuals to connect, share experiences, and promote cultural awareness.</p>
                        <p className="community-website"><a href="https://www.google.com/search?q=+Manchester+Pakistani+Society&client=firefox-b-d&sca_esv=a8b1485e4aab9472&sca_upv=1&ei=DyxLZsrLIfGH9u8P0_OliAc&ved=0ahUKEwiKj8HIiJyGAxXxg_0HHdN5CXEQ4dUDCBA&oq=+Manchester+Pakistani+Society&gs_lp=Egxnd3Mtd2l6LXNlcnAiHSBNYW5jaGVzdGVyIFBha2lzdGFuaSBTb2NpZXR5MgYQABgWGB4yBhAAGBYYHjILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMggQABiABBiiBDIIEAAYgAQYoQRIlhZQxQhYxQhwAXgAkAEBogELCAEQARgWGB4yBhAAGBYYHjIGEAAYFhgeMggQABiABBiiBDILEAAYgAQYsAMYigUyCxAAGIAEGIoFGJQGUMQHWMQHcAF4AJABAJgB6gGgAeoBqgEDMi0xuAEMyAEA-AEC-AEBmAICoAL7AcICCxAAGIAEGLADGKIEmAMAiAYBkAYEkgcFMS4wLjGgB-AE&sclient=gws-wiz-serp" target="_blank" rel="noopener noreferrer">Visit their website</a></p>
                    </div>
                </div>
            </div>
            <p className="explore-more">Explore more community resources and services in your area to enrich your experience.</p>
        </div>
    );
};

export default Community;
