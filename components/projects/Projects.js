import React from "react";
import Image from "next/image";
import styles from "../../styles/Projects.module.css";
import projectsData from "./projects.json";

const categories = [
  { key: "mobileDevelopment", title: "Mobile Development" },
  { key: "webDevelopment", title: "Web Development" },
  { key: "mobileApps", title: "Games & Interactive Apps" },
  { key: "customSolutions", title: "Custom Solutions" },
];

function ProjectCard({ project, priority = false }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.projectCard}
    >
      <div className={styles.projectImage}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          priority={priority}
        />
      </div>
      <div className={styles.projectContent}>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div className={styles.technologies}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Projects</h2>

        {categories.map((category) => (
          <div key={category.key} className={styles.categorySection}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.projectGrid}>
              {projectsData[category.key].map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  priority={category.key === "mobileDevelopment" && index < 2}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
