// About be selected by default on load
// recent photo and short bio

import React, { Component } from 'react'
import currentPhoto from '../../assets/currentPhoto.jpg'


export default class index extends Component {
  render() {
    return (
      <div>
        <h2>About Me</h2>
        <p> Hello! My name is Alyssa Petersen. I am a 33 year old mom, small
            business owner, and educator with eleven years of educating
            experience spanning all different ages and stages, in not only North
            Carolina, but New York and abroad. For the last 8 years I have
            taught ESL - English as a Second Language- in Vietnam, with CMS, and
            currently I am teaching adults in the Charlotte area. I have decided
            to transfer my love of language, organizational skills, and desire
            to continuously learn to a new career as a full stack developer.</p>
        <img src={ currentPhoto } />

    </div>
    )
  }
}
