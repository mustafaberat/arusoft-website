import React from "react";
import styles from "../../styles/Education.module.css";
import { FaMedal } from "react-icons/fa";

const educationData = [
  {
    degree: "Software Engineering",
    school: "Istanbul Sabahattin Zaim University",
    date: "16/08/2016 - 09/07/2021",
    location: "Istanbul, Turkey",
    achievements: [
      {
        text: "Top scoring student in the department",
        icon: <FaMedal />,
      },
    ],
  },
];

const Education = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Education</h2>
      {educationData.map((education, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.cardHeader}>
            <div className={styles.schoolInfo}>
              <div>
                <h3 className={styles.degree}>{education.degree}</h3>
                <span className={styles.school}>{education.school}</span>
              </div>
            </div>
            <div className={styles.meta}>
              <span className={styles.date}>{education.date}</span>
              <span className={styles.location}>{education.location}</span>
            </div>
          </div>

          <div className={styles.achievementsContainer}>
            {education.achievements &&
              education.achievements.map((achievement, i) => (
                <span key={i} className={styles.techTag}>
                  <span className={styles.achievementIcon}>
                    {achievement.icon}
                  </span>
                  {achievement.text}
                </span>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
