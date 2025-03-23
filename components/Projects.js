import React from 'react';
import styles from '../styles/Projects.module.css';

const projects = {
  webDevelopment: [
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with real-time inventory management',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '/images/web-dev-1.jpg'
    },
    {
      title: 'Corporate Website',
      description: 'Professional business website with CMS integration',
      technologies: ['Next.js', 'Tailwind CSS', 'WordPress'],
      image: '/images/web-dev-2.jpg'
    }
  ],
  mobileApps: [
    {
      title: 'Fitness Tracker',
      description: 'Cross-platform mobile app for tracking workouts and nutrition',
      technologies: ['React Native', 'Firebase', 'Redux'],
      image: '/images/mobile-1.jpg'
    },
    {
      title: 'Task Manager',
      description: 'Intuitive task management application for teams',
      technologies: ['Flutter', 'Node.js', 'PostgreSQL'],
      image: '/images/mobile-2.jpg'
    }
  ],
  customSolutions: [
    {
      title: 'CRM System',
      description: 'Custom CRM solution for enterprise clients',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      image: '/images/custom-1.jpg'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization and reporting platform',
      technologies: ['React', 'D3.js', 'Python'],
      image: '/images/custom-2.jpg'
    }
  ]
};

const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Projects</h2>
        
        {/* Web Development Projects */}
        <div className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>Web Development</h3>
          <div className={styles.projectGrid}>
            {projects.webDevelopment.map((project, index) => (
              <div key={index} className={styles.projectCard}>
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
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Apps Projects */}
        <div className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>Mobile Applications</h3>
          <div className={styles.projectGrid}>
            {projects.mobileApps.map((project, index) => (
              <div key={index} className={styles.projectCard}>
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
              </div>
            ))}
          </div>
        </div>

        {/* Custom Solutions Projects */}
        <div className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>Custom Solutions</h3>
          <div className={styles.projectGrid}>
            {projects.customSolutions.map((project, index) => (
              <div key={index} className={styles.projectCard}>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 