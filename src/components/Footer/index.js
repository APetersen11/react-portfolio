// text or icon links to 3 platforms (github, linkedin, and a third profile)
import React, { Component } from 'react'
import '../../App.css'

function Footer() {
  return (
    
    <div className="d-flex justify-content-center text-info">
            <a href="" target="_blank" className="btn btn-outline-dark mx-auto position-relative col-4">
              <i className="bi bi-github text-info" />
            </a>
            <a href="" target="_blank" className="btn btn-outline-dark mx-auto position-relative col-4">
              <i className="bi bi-linkedin text-info" />
            </a> 
            <a href="" target="_blank" className="btn btn-outline-dark mx-auto position-relative col-4">
              <i className="bi bi-twitter text-info" />
            </a>
 
    </div>
  );
}
export default Footer
