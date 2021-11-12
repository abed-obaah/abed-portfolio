import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <section id="home">
      <div className="home-content">
        <p>Hello! I'm</p>
        <h1 className="my-name">John Adibe</h1>
        <h1>Frontend Developer</h1>
        <p>Focused on building accessible & human-centered products.</p>
        <div className="social-connect"></div>
      </div>
    </section>
  )
}

export default Home;
