import React, { useState, useEffect } from 'react';
import myImage from "../Assets/MYIMAGE.jpg";

function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["College Student", "Professional Coder", "Full Stack Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 2000);
  
    return () => clearInterval(interval);
  }, [texts.length]);
  

  return (
    <section id="home">
      <div className="home-container">
      <div className="left-section">
      <h2 className="name" id="anandPatel"><span className="im-text">I'm</span> Anand Patel</h2>
      <h3> a {texts[textIndex]}</h3>
      <h4 className="description">I am a passionate B.Tech Computer Science Engineering student, skilled in a diverse array of programming languages including Python, Java, HTML, CSS, SQL, and MongoDB.</h4>
      <button className="resume-button">Resume</button>
      </div>


      <div className="right-section">
        <img src={myImage} alt="Anand Patel" />
      </div>
    </div>
    </section>
    
  );
}

export default Home;


