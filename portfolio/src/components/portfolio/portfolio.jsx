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
      <h3 className="portfolio-title">Portfolio</h3>
      <div className="card-container">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <img src={project.previewImage} alt={project.title} className="card-image" />
            <div className="card-content">
              <h4 className="card-title">{project.title}</h4>
              <p className="card-description">{project.description}</p>
              <div className="card-links">
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
