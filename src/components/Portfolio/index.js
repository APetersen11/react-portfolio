import React, { useState } from "react";
import Project from "../Project";
import bootstrap from "bootstrap";
import HeaderImage from '../../assets/portfolio-header.png';
import LaunchImage from '../../assets/applicationPhotos/launch.png'
import HotShotsImage from '../../assets/applicationPhotos/hot-shots.png'
import WeatherWizardImage from '../../assets/applicationPhotos/weather.png'
import ForgetImage from '../../assets/applicationPhotos/forget.png'
import RememberImage from '../../assets/applicationPhotos/remembrall.png'
import ArijImage from '../../assets/applicationPhotos/arij.png'

const projects = [
  {
    image: ArijImage,
    title: "Arij",
    appLink: "https://pacific-cliffs-88620.herokuapp.com/",
    repoLink: "https://github.com/Jstelzl/arij ",
  },
    {
      image: LaunchImage,
      title: "Launch!",
      appLink: "https://richielollis.github.io/launch/",
      repoLink: "https://github.com/richielollis",
    },
    {
      image: HotShotsImage,
      title: "Hot Shots",
      appLink: "https://boiling-caverns-86509.herokuapp.com/",
      repoLink: "https://github.com/APetersen11/Hot-Shots",
    },
    {
      image: WeatherWizardImage,
      title: "Weather Wizard",
      appLink: "https://apetersen11.github.io/carmen-sandiego/",
      repoLink: "https://github.com/APetersen11/carmen-sandiego",
    },
    {
      image: ForgetImage,
      title: "Forget Me Not",
      appLink: "https://apetersen11.github.io/forget-me-not",
      repoLink: "https://github.com/APetersen11/forget-me-not",
    },
    {
      image: RememberImage,
      title: "Remembrall",
      appLink: "https://fast-earth-07781.herokuapp.com/ Links to an external site. ",
      repoLink: "https://github.com/APetersen11/Remembrall",
    },
  ];


function Portfolio() {
  // object w all project info

  return (
   < React.Fragment >
     <div className="container-fluid">
      <img
        className="img-fluid mw-75 mx-auto d-block"
        src={HeaderImage}
      />
    </div>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        {projects.map((project) => (
          <Project item ={project} />
        ))}
      </div>
    </div>
    </React.Fragment>
  );
}

export default Portfolio;
