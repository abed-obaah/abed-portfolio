import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="section-content">
        <h2 className="jae_title">About Me</h2>
        <div className="about-details">
          <p>I am a Frontend Developer based in Lagos, Nigeria who derives passion from modern Tech innovations.</p>
          <p>I started off as a Maths Tutor, thanks to my degree in Mathematics. Tutored for about 3 years, then after - as a Tech enthusiast, I choose to explore more on its fundamentals. Fast-forward to this moment, I now can build web-based & mobile-based applications.</p>
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
