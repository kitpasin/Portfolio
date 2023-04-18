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
          <p>Home</p>
        </div>
        <hr />
        <div className="home-profile">
          <figure className="home-profile-image">
            <img src="/public/images/aisu_image_01.jpg" alt={data.basics?.name} />
          </figure>
          <ul className="home-profile-information">
            <li className="home-profile-information-name">
              <p>Name : {data.basics?.name}</p>
            </li>
            <li className="home-profile-information-headline">
              <p>{data.basics?.headline}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
