import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './experience.css';
import API from '../../url/api.json';

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    // Fetch experience data from the Django backend API
    axios.get(API.experience)
      .then(response => {
        setExperienceData(response.data);
      })
      .catch(error => {
        console.error('Error fetching experience data:', error);
      });
  }, []);

  return (
    <section id="experience">
      <h3>Experience</h3>
      <div className="experience__container">
        {experienceData.map((experience, index) => (
          <div key={index} className="experience__card">
            <img src={experience.image} alt={experience.title} className="experience__image" />
            <h4 className="experience__title">{experience.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
