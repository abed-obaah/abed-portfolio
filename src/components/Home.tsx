import React from "react";

const Home = () => {
  return (
    <section id="home">
      <div className="section-content">
        <div className="home-content">
          <p className="hi-there">Hello! I'm</p>
          <h1 className="my-name">John&nbsp;Adibe</h1>
          <h1>Frontend Developer</h1>
          <p>
            Focused on building accessible & human-centered products. If you
            require amazing hands-on skills on your project, I'm your guy.
          </p>
          <ul className="social-connect">
            <li>
              <a
                href="https://github.com/johnphealipto"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <FontAwesomeIcon icon={faGithub} /> */}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/johnadibe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <FontAwesomeIcon icon={faLinkedin} /> */}
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/johnphealipto"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <FontAwesomeIcon icon={faTwitter} /> */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
