import React from "react";
import Image from "next/image";
import styles from "../styles/About.module.css";

const timelineData = [
  {
    year: "2025",
    content:
      "At Getir, with a new team, we not only continued processes but also completed the rewriting of the system. The new architectures to be implemented were chosen and applied according to the needs. This unique experience significantly improved my abilities in understanding why we do what we do, the improvement processes after something is done, and presenting this knowledge. While going through these stages, I learned new things in areas I thought I already knew, as I delved deeper into the topics. This journey was not only about my technical experiences but also a year where I played a significant role in the dynamics of the team, applying what I had learned in social relationships. Instead of shared responsibilities, the expression of managing all processes of a task from start to finish with fully assigned responsibilities was something I fully completed.",
  },
  {
    year: "2024",
    content:
      "Over the past remarkable two years and eight months, I've transitioned between two diverse teams, each offering unique perspectives on business, approaches, and technologies. When I joined Trendyol, it was well-established, almost at its final iteration, which presented clear boundaries. I often found myself yearning to delve into its earlier versions to understand the evolution and rationale behind its current state. This curiosity led me to pursue a new opportunity with a dynamic, growing company where I could leverage my skills and experiences effectively. Now, I'm part of Getir, a company well known for its agile teams, relentless pace, and boundary-breaking challenges. I thrive in this environment and find it incredibly engaging.",
  },
  {
    year: "2020",
    content:
      "After an excellent 9 months, I got job offers from several companies before my graduation. I accepted the most reasonable offer where I could both improve myself in terms of technology, culture and mission and leave my comfort zone. After the process, I decided to set sail for new horizons at Trendyol, Turkey's largest e-commerce site.",
  },
  {
    year: "2019",
    content:
      "In the third year, I decided to take more lessons from the upper class to gain free time in the 4th grade. I quit my first part-time job because I took everything I could get from it, but I focused on being an instructor and gave many lessons to the children. As an intern at the end of the year I found an enormous defense company to serve my flag. After my internship, they give me the chance to continue in this company.",
  },
  {
    year: "2018",
    content:
      "The second year of my department, I was knowing much more than my classmates because i have already learned HTML,CSS and JS with real project experience. In that year, i realize that i have learned lots of subjects such as object oriented programming pillars and the logic of pointers and much more. Additionally, I took my second part-time job and on Sunday became a software teacher for high school students. At the end of the year I decided to take a crazy step about my career that I will go to TUBITAK BILGEM for internship program. It was impossible to apply because i was 2nd year of the department and normally they would not accept it but they did. After getting there, i asked human resources manager, why did you accept me? She said i have been following you from the Linkedin for along time. I think I'm still surprised about it.",
  },
  {
    year: "2017",
    content:
      "The first year of my department was like a dream because I saw a lot of code and it was great. I found a part-time job on web applications at my school. Then I learned that I love taking lessons and also working in a company at the same time. At the end of the year, I decided to do an internship without any idea about field work, but I thought I had done everything enough. The idea of getting my first internship was a great decision because I had the chance to observe what I had not yet learned.",
  },
  {
    year: "2016",
    content:
      "I started the English preparatory class in 2016 and that year, I chased a lot of tourists to practice on the street. Some of them tried to escape from my slow talk but I got better day by day.",
  },
];

const AboutPageSection = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.headerSection}>
        <div className={styles.profileInfo}>
          <Image
            src="/img/my-photo.jpeg"
            alt="Profile Photo"
            width={120}
            height={120}
            className={styles.profileImage}
          />
          <div className={styles.introText}>
            <h1 className={styles.name}>Mustafa Berat ARU</h1>
            <h2 className={styles.title}>Software Engineer</h2>
          </div>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Career History</h2>

      <div className={styles.timelineSection}>
        {timelineData.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineYear}>{item.year}</div>
            <div className={styles.timelineContent}>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPageSection;
