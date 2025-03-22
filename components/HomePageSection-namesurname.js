import React from "react";

import SocialMedia from "../components/SocialMedia";
import MailForHomePage from "../components/MailForHomePage";

const HomePageSection = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="name-surname">ARU SOFT</h1>
        <MailForHomePage />
      </div>
    </section>
  );
};

export default HomePageSection;
