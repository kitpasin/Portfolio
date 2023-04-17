import React, { useContext } from "react";
import { DataContext } from "../App";
import './About.css'

function About() {
  const data = useContext(DataContext);
  const skills = [
  { name: "HTML", level: "Expert", keywords: [], rating: 5, yearsOfExperience: 6 },
  { name: "CSS", level: "Expert", keywords: [], rating: 5, yearsOfExperience: 6 },
  { name: "Sass", level: "Expert", keywords: [], rating: 5, yearsOfExperience: 1 },
  { name: "Tailwind CSS", level: "Intermediate", keywords: [], rating: 3, yearsOfExperience: 1 },
  { name: "JavaScript", level: "Intermediate", keywords: [], rating: 3, yearsOfExperience: 2 },
  { name: "Laravel", level: "Intermediate", keywords: [], rating: 3, yearsOfExperience: 1 },
  { name: "React", level: "Beginner", keywords: [], rating: 2, yearsOfExperience: 1 },
  { name: "Wordpress", level: "Intermediate", keywords: [], rating: 3, yearsOfExperience: 1 }
];

  return (
    <div className="about">
      <div className="about-wrapper">
        <div className="about-title">
          <p>About</p>
        </div>
        <hr />
        <figure className="about-image">
          <img src={data.basics?.picture} alt={data.basics?.name} />
        </figure>
        <hr />
        <div className="about-skill">
          <p>Skills</p>
          <ul className="about-skill-list">
            {skills.map((skill) => (
              <li>
                <p>{skill.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
