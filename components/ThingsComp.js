import React from "react";

import ThingsCard from "../components/ThingsCardComp";
import PasswordGenerator from "../components/PasswordGenerator";
import MyHead from "../components/MyHead";

export const projects = {
  websites: [
    {
      title: "Random Finger Picker Mobile Game",
      image:
        "https://raw.githubusercontent.com/mustafaberat/arusoft-website/refs/heads/main/public/img/clickbattle.jpg", //TODO: change it
      url: "https://play.google.com/store/apps/details?id=com.arusoft.randomfingerpicker",
    },
    {
      title: "Click Battle Mobile Game",
      image:
        "https://raw.githubusercontent.com/mustafaberat/arusoft-website/refs/heads/main/public/img/clickbattle.jpg",
      url: "https://play.google.com/store/apps/details?id=com.arusoft.clickbattle",
    },
    {
      title: "TYT20 Counter",
      image:
        "https://raw.githubusercontent.com/mustafaberat/tyt-sayac-2020/master/assert/screenshot.PNG",
      url: "https://tyt20-sayac.now.sh/",
    },
    {
      title: "Covid19",
      image:
        "https://raw.githubusercontent.com/mustafaberat/covid19-website/master/src/screenshot.PNG",
      url: "https://coronavirus-covid19.now.sh/",
    },
    {
      title: "Binarygap JS",
      image:
        "https://raw.githubusercontent.com/mustafaberat/binarygap-js/master/src/assets/screenshot.PNG",
      url: "https://github.com/mustafaberat/binarygap-js",
    },
    {
      title: "Calculate Average",
      image:
        "https://raw.githubusercontent.com/mustafaberat/calculate-average/refs/heads/main/assets/mainpage.png",
      url: "https://calculateaverage.vercel.app/",
    },
    {
      title: "Personal Website",
      image:
        "https://raw.githubusercontent.com/mustafaberat/personal-website-1/refs/heads/master/public/img/output.PNG",
      url: "/",
    },
    {
      title: "Hangi Ay",
      image:
        "https://raw.githubusercontent.com/mustafaberat/hangi-ay/main/public/output.png",
      url: "https://hangi-ay.vercel.app/",
    },
    {
      title: "WP Inst Msg",
      image:
        "https://raw.githubusercontent.com/mustafaberat/wp-instant-msg/main/public/output.png",
      url: "https://wp-instant-msg.vercel.app/",
    },
  ],
  games: [
    {
      title: "Flappy Bee",
      image:
        "https://raw.githubusercontent.com/mustafaberat/Flappy-bee/master/public/VizvizGame.png",
      url: "https://vizviz.now.sh/",
    },
    {
      title: "Minesweeper",
      image:
        "https://raw.githubusercontent.com/mustafaberat/MayinTarlasi-Game-by-Vue/master/src/output/screenshot.PNG",
      url: "https://mayin-tarlasi.now.sh/",
    },
    {
      title: "XOX Game",
      image:
        "https://raw.githubusercontent.com/mustafaberat/XOX-Game-by-Vue/master/src/img/Screenshot.PNG",
      url: "https://xox.now.sh/",
    },
    {
      title: "Piano",
      image:
        "https://raw.githubusercontent.com/mustafaberat/piano/master/public/screenshot.PNG",
      url: "https://piano-beta.now.sh/",
    },
  ],
};

const ProjectSection = ({ title, items }) => (
  <>
    <div className="things-titlediv">
      <h2 className="workexperience-title">{title}</h2>
    </div>
    <div className="things">
      {items.map((project, index) => (
        <ThingsCard
          key={index}
          text={project.title}
          imageSource={project.image}
          path={project.url}
        />
      ))}
      <div style={{ marginBottom: "20px" }}></div>
    </div>
  </>
);

const Things = () => {
  return (
    <div className="container">
      <MyHead />
      <h1 className="name-surname">Things</h1>

      <ProjectSection title="Websites" items={projects.websites} />
      <ProjectSection title="Games" items={projects.games} />

      <div className="things-titlediv">
        <h2 className="workexperience-title">Password Generator</h2>
      </div>
      <div>
        <PasswordGenerator />
      </div>
    </div>
  );
};

export default Things;
