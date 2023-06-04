import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './portfolio.css';
import API from '../../url/api.json';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(API.projects);
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  return (
    <section id="portfolio">
      <h3>Portfolio</h3>
      <div className="card-container">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <img src={project.previewImage} alt={project.title} className="card__image" />
            <div className="card__content">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="card__links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
