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
        <div className="contact-details">
          <div>
            <p>Email:</p>
            <a href="mailto:johnadibe450@gmail.com">johnadibe450@gmail.com</a>
          </div>
          <div>
            <p>Mobile:</p>
            <a href="tel:+2348141726099">+234-81-4172-6099</a>
          </div>
        </div>
        <ul className="social-connect">
          <li>
            <a href="https://github.com/johnphealipto" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/johnadibe/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/johnphealipto" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Home;
