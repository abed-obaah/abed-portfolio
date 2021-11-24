import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="section-content">
        <h2 className="jae_title">About Me</h2>
        <div className="about-details">
          <p>My name is John Adibe Ebube. I am a Frontend Developer settled in Lagos State, Nigeria who derives passion from modern Tech innovations.</p>
          <p>I started as a Maths Tutor, thanks to my degree in Mathematics. Tutoring & mentoring for about 3 years led to an idea of boosting my knowledge on Tech - then I saw myself building Web-based & Mobile-based app.</p>
          <p>Today, I am currently working as a Software Developer at <a href="https://www.outcess.com/" className="a_link" target="_blank">Outcess Solutions LTD</a> where I build enhanced solution provided applications.</p>
          <p>Below are the few technologies I work with:</p>
          <ul>
            <li><span>JavaScript</span></li>
            <li><span>Redux</span></li>
            <li><span>React.JS</span></li>
            <li><span>GraphQL</span></li>
            <li><span>React Native</span></li>
            <li><span>Node</span></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About;