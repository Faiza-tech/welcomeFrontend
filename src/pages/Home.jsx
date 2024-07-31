import React from 'react'
import './Home.css'
import Banner from '../assets/banner.jpg'
import Lahore from "../assets/image-6.jpg"
import Image from "../assets/image-1.jpeg"
import Image1 from "../assets/image-2.jpg"
import Image2 from "../assets/image-3.jpg"
import Image3 from "../assets/image-5.jpg"
import Banner2 from '../assets/banner-2.jpg'

const Home = () => {



  return (
    <div className="home-container">
    
      <header>
        <div className="banner-wrapper">
          <img src={Banner} alt="" className="banner-image" />

          <div className="banner-text">
            <h1>Welcome </h1>
            <h1 className='move-text'> to </h1>
            <h1> Abroad</h1>
          </div>

        </div>
      </header>


      <main className="intro-section">

        {/* Introduction Section */}
        <section className="further-content">
          <div className="container">
            {/** <h1>Welcome to [Your Website/Business Name]</h1> */}
            <p>Welcome to the United Kingdom! We're thrilled to have you here and hope your transition from Pakistan has been smooth so far. Moving to a new country can be both exciting and challenging, but rest assured, you're not alone. Our diverse community embraces people from all walks of life, and we're here to support you every step of the way.</p>
          </div>
        </section>

        <section className="further-content">
          <div className="container">
            <p>As you settle into your new life in the UK, you'll find a rich tapestry of cultures, traditions, and experiences waiting to be explored. From the bustling streets of London to the picturesque landscapes of the countryside, there's so much to see and do. Whether you're craving authentic Pakistani cuisine or eager to try British delicacies, you'll find a vibrant culinary scene that reflects our multicultural society.</p>
          </div>
        </section>

        <section className="further-content">
          <div className="images-container">

            <img src={Image} alt="" />
            <img src={Lahore} alt="" />
            <img src={Image1} alt="" />
            <img src={Image2} alt="" />
            <img src={Image3} alt="" />


          </div>
        </section>

        <section className="further-content">
          <div className="container">
            <p>Adjusting to a different way of life can take time, but we're confident that you'll find a sense of belonging here in the UK. Our schools, universities, and workplaces offer opportunities for personal and professional growth, while our healthcare system ensures access to quality medical care when you need it. Remember, reaching out to local community groups and making connections with fellow expatriates can help ease any feelings of homesickness and foster new friendships.</p>
          </div>
        </section>

        <section className="further-content">
          <div className="container">
            <p>Above all, we hope you feel welcomed, valued, and respected in your new home. Diversity is our strength, and your unique perspective and contributions enrich the fabric of our society. Whether you're here for studies, work, or to start a new chapter in your life, know that you are an integral part of our community. Welcome to the UK – we're delighted to have you here!</p>
          </div>
        </section>

      </main>

      <section>
        <div className="banner-wrapper">
          <img src={Banner2} alt="" className="banner-image" />
        </div>
      </section>

       <section className="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1589.0146638339266!2d-0.12755!3d51.507222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ebeed62b51%3A0x61eac2ed0da25f03!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1635608826777!5m2!1sen!2suk"
            width="800"
            height="400"
            style={{ border: "2px solid #fff" }}
            allowfullscreen=""
            loading="lazy"
            title="UK Map"
          ></iframe>
        </div>
      </section>
    


    </div>
  );
}


export default Home                          

