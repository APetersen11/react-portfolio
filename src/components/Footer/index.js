// text or icon links to 3 platforms (github, linkedin, and a third profile)
import React, { Component } from 'react'
import '../../App.css'

function Footer() {
  return (
    
    <div className="d-flex justify-content-center text-info">
            <a href="https://github.com/APetersen11" target="_blank" className="btn btn-outline-dark mx-auto position-relative col-4">
              <i className="bi bi-github text-info" />
            </a>
            <a href="https://www.linkedin.com/in/alyssa-petersen-855000246/" target="_blank" className="btn btn-outline-dark mx-auto position-relative col-4">
              <i className="bi bi-linkedin text-info" />
            </a> 
            <a href="https://twitter.com/Alyssa_Jill" target="_blank" className="btn btn-outline-dark mx-auto position-relative col-4">
              <i className="bi bi-twitter text-info" />
            </a>
 
    </div>
  );
}
export default Footer
