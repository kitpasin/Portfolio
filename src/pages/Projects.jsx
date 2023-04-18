import React from "react";

// Style
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="projects-wrapper">
        <div className="projects-title">
          <p>Projects</p>
        </div>
        <hr />
        <div className="projects-grid">
          <div className="projects-grid-box">
            <figure className="projects-grid-box-image">
              <img src="/images/manami_delivery.png" />
            </figure>
            <div className="projects-grid-box-link">
              <a href="https://manami-delivery.com" target="_blank">Manami-Delivery</a>
              <a href="https://github.com/kitpasin/Manami-Delivery" target="_blank">Source Code</a>
            </div>
            <div className="projects-grid-box-description">
                <p>Manami-Delivery, laundry service and food and drink delivery.</p>
            </div>
          </div>
          <div className="projects-grid-box">
            <figure className="projects-grid-box-image">
              <img src="/images/wynnsoftkh.png" />
            </figure>
            <div className="projects-grid-box-link">
              <a href="https://wynnsoftkh.com" target="_blank">Wynnsoft-KH</a>
              <a href="https://github.com/kitpasin/Wynnsoft-KH" target="_blank">Source Code</a>
            </div>
            <div className="projects-grid-box-description">
                <p>Wynnsoft-KH Wynnsoft Solution Cambodia website.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
