import React from 'react';
import './about.css';
import me from '../../assets/bito books.png';
import { FaClock, FaUsers, FaTasks } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about">
      <h4>Get to know me</h4>
      <h3>About Me</h3>
      <div className="container">
        <div id="right">
             <div id='rightMainDiv'>
          <div className="about__image">
            <img src={me} alt="memow" />
          </div></div>
          </div>
          <div className="left">
            <div className="up"> 
                 <div className="card">
                   <FaClock className="card-icon" />
                   <h4>Experience</h4>
                   <h6>4+ years</h6>
                 </div>
                 <div className="card">
                   <FaUsers className="card-icon" />
                   <h4>Clients</h4>
                   <h6>5 worldwide</h6>
                 </div>
                 <div className="card">
                   <FaTasks className="card-icon" />
                   <h4>Projects</h4>
                   <h6>10 projects</h6>
                 </div>
               </div>
            <div className="down">
            <div className="about__text">
            <p>
              I'm a software developer and machine learning engineer passionate about innovation and pushing technology boundaries. With expertise in backend development, I've built scalable systems and contributed to exciting projects like Selfbyt. I excel in dynamic environments, solving problems and delivering innovative solutions. Crafting clean and efficient code brings me joy, and I enjoy sharing knowledge through writing. In summary, I'm a dedicated developer embracing challenges, coding with passion, and contributing to the developer community.
            </p>
            </div>
            </div>
            </div>
            </div>
         
    </section>
  );
};

export default About;

