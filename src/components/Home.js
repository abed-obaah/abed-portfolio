import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <section id="home">
      <div className="home-content">
        <p className="hi-there">Hello! I'm</p>
        <h1 className="my-name">John Adibe</h1>
        <h1>Frontend Developer</h1>
        <p>Focused on building accessible & human-centered products.</p>
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
