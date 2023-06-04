import React from 'react';
import './about.css';
import me from '../../assets/bito books.png';

const About = () => {
  return (
    <section id="about">
      <h3>About Me</h3>
      <div className="container">
        <div className="about__content">
          <div className="about__image">
            <img src={me} alt="memow" />
          </div>
          <div className="about__text">
            <p>
              I'm a software developer and machine learning engineer passionate about innovation and pushing technology boundaries. With expertise in backend development, I've built scalable systems and contributed to exciting projects like Selfbyt. I excel in dynamic environments, solving problems and delivering innovative solutions. Crafting clean and efficient code brings me joy, and I enjoy sharing knowledge through writing. In summary, I'm a dedicated developer embracing challenges, coding with passion, and contributing to the developer community.
            </p>
            <div className="experience">
              <i className="fas fa-clock"></i>
              <span>Experience: Four+ years</span>
            </div>
            <div className="clients">
              <i className="fas fa-users"></i>
              <span>Clients: 4 worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

