import React from 'react';
import styles from '../../styles/Projects.module.css';
import projectsData from './projects.json';

const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Projects</h2>
        
        {/* Mobile Development Projects */}
        <div className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>Mobile Development</h3>
          <div className={styles.projectGrid}>
            {projectsData.mobileDevelopment.map((project, index) => (
              <a key={index} href={project.url} target="_blank" rel="noopener noreferrer" className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <img src={project.image} alt={project.title} />
                </div>
                <div className={styles.projectContent}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className={styles.technologies}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Web Development Projects */}
        <div className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>Web Development</h3>
          <div className={styles.projectGrid}>
            {projectsData.webDevelopment.map((project, index) => (
              <a key={index} href={project.url} target="_blank" rel="noopener noreferrer" className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <img src={project.image} alt={project.title} />
                </div>
                <div className={styles.projectContent}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className={styles.technologies}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Apps Projects */}
        <div className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>Games & Interactive Apps</h3>
          <div className={styles.projectGrid}>
            {projectsData.mobileApps.map((project, index) => (
              <a key={index} href={project.url} target="_blank" rel="noopener noreferrer" className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <img src={project.image} alt={project.title} />
                </div>
                <div className={styles.projectContent}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className={styles.technologies}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Custom Solutions Projects */}
        <div className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>Custom Solutions</h3>
          <div className={styles.projectGrid}>
            {projectsData.customSolutions.map((project, index) => (
              <a key={index} href={project.url} target="_blank" rel="noopener noreferrer" className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <img src={project.image} alt={project.title} />
                </div>
                <div className={styles.projectContent}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className={styles.technologies}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 