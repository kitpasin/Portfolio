import React, { useContext } from "react";
import { DataContext } from "../App";

// Style
import "./About.css";

function About() {
  const data = useContext(DataContext);

  console.log(data);

  return (
    <div className="about">
      <div className="about-wrapper">
        <div className="about-title">
          <p>About</p>
        </div>
        <hr />
        <div className="about-profile">
          <figure className="about-profile-image">
            <img src={data.basics?.picture} alt={data.basics?.name} />
          </figure>
          <div className="about-profile-information">
            <div className="about-profile-information-title">
              <p>Information</p>
            </div>
            <div className="about-profile-information-name">
              <p>Name : {data.basics?.name}</p>
            </div>
            <div className="about-profile-information-headline">
              <p>{data.basics?.headline}</p>
            </div>
          </div>
          {data.education?.map((value, index) => (
            <div className="about-profile-education">
              <div className="about-profile-education-title">
                <p>Education</p>
              </div>
              <div className="about-profile-education-description" key={index}>
                <p>
                  {value.area} {value.institution}
                </p>
              </div>
            </div>
          ))}
          {data.work?.map((value, index) => (
            <div className="about-profile-experience">
              <div className="about-profile-experience-title">
                <p>Experience</p>
              </div>
              <div className="about-profile-experience-description" key={index}>
                <p>Position : {value.position}</p>
                <p>Company : {value.name}</p>
                <p>Address : {value.location}</p>
                <p>Employment Period : {value.startDate}-Present</p>
              </div>
            </div>
          ))}
        </div>
        <strong>Skills</strong>
        <div className="about-skill">
          <div className="about-skill-markup">
            <div className="about-skill-markup-title">
              <p>Markup</p>
            </div>
            <ul className="about-skill-markup-list">
              {data.skills
                ?.filter((skill) => skill.keywords.includes("Mark up"))
                .map((value, index) => (
                  <li key={index}>
                    <p>{value.name}</p>
                    <p>Level : {value.level}</p>
                  </li>
                ))}
            </ul>
          </div>
          <div className="about-skill-style">
            <div className="about-skill-style-title">
              <p>Style</p>
            </div>
            <ul className="about-skill-style-list">
              {data.skills
                ?.filter((skill) => skill.keywords.includes("Style"))
                .map((value, index) => (
                  <li key={index}>
                    <p>{value.name}</p>
                    <p>Level : {value.level}</p>
                  </li>
                ))}
            </ul>
          </div>
          <div className="about-skill-script">
            <div className="about-skill-script-title">
              <p>Script</p>
            </div>
            <ul className="about-skill-script-list">
              {data.skills
                ?.filter((skill) => skill.keywords.includes("Script"))
                .map((value, index) => (
                  <li key={index}>
                    <p>{value.name}</p>
                    <p>Level : {value.level}</p>
                  </li>
                ))}
            </ul>
          </div>
          <div className="about-skill-framework">
            <div className="about-skill-framework-title">
              <p>Framework / Library</p>
            </div>
            <ul className="about-skill-framework-list">
              {data.skills
                ?.filter((skill) => skill.keywords.includes("Web Framework"))
                .map((value, index) => (
                  <li key={index}>
                    <p>{value.name}</p>
                    <p>Level : {value.level}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
