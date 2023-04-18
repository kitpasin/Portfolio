import React, { useContext } from "react";
import { DataContext } from "../App";

// Style
import "./Home.css"

function Home() {
  const data = useContext(DataContext);

  return (
    <div className="home" data-aos="fade-up">
      <div className="home-wrapper">
        <div className="home-title">
          <p>Resume</p>
        </div>
        <hr />
        <figure className="home-resume">
          <img src="/images/resume.jpg" alt="Resume" />
        </figure>
      </div>
    </div>
  );
}

export default Home;
