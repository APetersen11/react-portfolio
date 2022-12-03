// About be selected by default on load
// recent photo and short bio

import React, { Component } from "react";
import currentPhoto from "../../assets/currentPhoto.png";

export default class index extends Component {
  render() {
    return (
      <div className="container-fluid bg-dark">
        <img className="img-fluid mw-75 mx-auto d-block" src={currentPhoto} />
        <div className="card mw-75 bg-dark mx-auto d-block">
          <div className="card-body text-info">
            <h5 className="card-title text-center">about me</h5>
            <p className="card-text text-center">
            Hello! My name is Alyssa Petersen. I am a 32 year old mom, small
          business owner, and educator. I have over eleven years of educating experience
          spanning all different ages and stages, in not only North Carolina,
          but New York and abroad. For the last 8 years I have taught ESL -
          English as a Second Language- in Hanoi, Vietnam, in the Charlotte public schools, and currently I am
          teaching adults in the Charlotte area. I have decided to transfer my
          love of language, organizational skills, and desire to continuously
          learn to a new career as a full stack developer.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
