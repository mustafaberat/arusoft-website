import React from "react";
import styles from "../../styles/WorkExperience.module.css";
import Image from "next/image";

const workExperiences = [
  {
    title: "Senior Back End Developer",
    company: "Getir",
    companyLogo: "/img/getir-logo.jpeg",
    date: "22/02/24 - Present",
    location: "Istanbul, Turkey",
    details: [
      "Responsible for maintaining and rewriting microservices within the Market Order Checkout and Basket Funnel, managing the entire process from basket creation to order delivery. Key responsibilities include stock checking, product updates, promotions, courier management, listing updates, and client interactions.",
    ],
    technologies: [
      "Golang",
      "Node.js",
      "MongoDB",
      "Confluent Kafka",
      "RabbitMQ",
      "AWS Lambda",
      "Redis",
    ],
  },
  {
    title: "Instructor",
    company: "Turkish Technology Team",
    date: "06/02/19 - Present",
    location: "Istanbul, Turkey",
    details: [
      "Conducted lessons every Sunday, covering various topics including Energy Technology, Internet of Things, Artificial Intelligence, Mobile Application Development, and Programming, with each course lasting over four months",
    ],
    companyLogo: "/img/t3-logo.jpeg",
  },
  {
    title: "Back End Developer",
    company: "Trendyol Group",
    date: "14/09/21 - 01/01/24",
    location: "Istanbul, Turkey",
    details: [
      "Contributed to the TDESK Project (tdesk.trendyol.com), a platform enabling Trendyol and its stakeholders to track all tickets before and after an order.",
    ],
    technologies: [
      "Golang",
      ".NET Core",
      "C#",
      "Java Spring Boot",
      "Python",
      "Kafka",
      "Cassandra",
      "Elasticsearch",
      "Kubernetes",
      "Redis",
      "CI/CD",
      "Docker",
    ],
    companyLogo: "/img/trendyol-logo.jpeg",
  },
  {
    title: "Software Engineer",
    company: "Baykar Defense",
    date: "13/07/20 - 09/06/21",
    location: "Istanbul, Turkey",
    details: ["Tools for internal company use have been developed"],
    technologies: [
      "C#",
      "WPF",
      "Node.js",
      "PHP",
      "PostgreSQL",
      "JavaScript",
      "CSS",
    ],
    companyLogo: "/img/baykar-logo.jpeg",
  },
  {
    title: "Full Stack & React Native Developer",
    company: "TUBITAK BILGEM Software Technologies Research Institute",
    date: "17/06/19 - 09/08/19",
    location: "Ankara, Turkey",
    details: [
      "Developed Facebook login and registration pages for a hybrid React Native application compatible with both mobile and web platforms. Additionally, created an application that dynamically requested official websites, retrieved their response codes, and stored the results in a database.",
    ],
    technologies: [
      "Java",
      "Spring Framework",
      "JavaScript",
      "React",
      "React Native",
      "PostgreSQL",
    ],
    companyLogo: "/img/tubitak-logo.jpeg",
  },
  {
    title: "Website Manager",
    company: "IZU Career Center",
    date: "10/09/17 - 07/06/19",
    location: "Istanbul, Turkey",
    details: [
      "In a part-time role, I was responsible for updating content and making necessary changes to the official website of the institution.",
    ],
    technologies: [
      "WordPress",
      "Microsoft Office",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    companyLogo: "/img/izu-logo.jpeg",
  },
  {
    title: "Frontend Developer Intern",
    company: "Inlab Smart Technologies",
    date: "20/08/18 - 16/09/18",
    location: "Istanbul, Turkey",
    details: [
      "Completed my first internship, where I was tasked with converting design mockups into functional web pages",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    companyLogo: "/img/inlab-logo.jpeg",
  },
];

const WorkExperience = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Work Experience</h2>

      {workExperiences.map((experience, index) => (
        <div className={styles.timelineItem} key={index}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.companyInfo}>
                {experience.companyLogo && (
                  <div className={styles.logoContainer}>
                    <Image
                      src={experience.companyLogo}
                      alt={`${experience.company} logo`}
                      width={40}
                      height={40}
                      className={styles.logo}
                    />
                  </div>
                )}
                <div>
                  <h3 className={styles.jobTitle}>{experience.title}</h3>
                  <span className={styles.company}>{experience.company}</span>
                </div>
              </div>
              <div className={styles.meta}>
                <span className={styles.date}>{experience.date}</span>
                <span className={styles.location}>{experience.location}</span>
              </div>
            </div>

            {experience.details.length > 0 && (
              <div className={styles.details}>
                {experience.details.map((detail, i) => (
                  <p key={i} className={styles.detail}>
                    {detail}
                  </p>
                ))}
              </div>
            )}

            {experience.technologies && (
              <div className={styles.technologies}>
                {experience.technologies.map((tech, i) => (
                  <span key={i} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
