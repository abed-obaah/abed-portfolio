import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faCloudUploadAlt, faTools } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const cards = [
    {
      icon: faLaptopCode,
      title: "Web Development",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae"
    },
    {
      icon: faTools,
      title: "Software Architect",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae"
    },
    {
      icon: faCloudUploadAlt,
      title: "Cloud Computing",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae"
    }
  ]

  return (
    <section id="services">
      <div className="section-content">
        <div className="services-title">
          <h2 className="title">My Services</h2>
          <p>What can I do?</p>
        </div>
        <div className="services-body">
          {cards.map((item, index) => (
            <div key={index} className="card">
              <div className="card-header">
                <div className="card-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3 className="card-title">{item.title}</h3>
              </div>
              <div className="card-body">{item.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;