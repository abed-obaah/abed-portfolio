import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="section-content">
        <h2 className="title">About Me</h2>
        <div className="about-details">
          <p>I'm a Frontend Developer based in Lagos. I derive interest in building things of the web with great performance assured.</p>
          <p>With my degree in Mathematics, I started off as a Maths Tutor for over 2 years before switching to web development.</p>
          <p>Currently, I'm working at <a href="https://www.outcess.com/" className="a_link" target="_blank" rel="noopener noreferrer">Outcess</a> as a Software Developer, where I build enhanced solution provided applications.</p>
          <p>The Tech stack I work with:</p>
          <ul>
            <li><span>JavaScript</span></li>
            <li><span>Node</span></li>
            <li><span>React.JS</span></li>
            <li><span>GraphQL</span></li>
            <li><span>Redux</span></li>
            <li><span>Git</span></li>
          </ul>
          <button>R&eacute;sum&eacute;</button>
        </div>
      </div>
    </section>
  )
}

export default About;