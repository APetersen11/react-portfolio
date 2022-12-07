//template

import React from 'react'
import bootstrap from 'bootstrap' 

function Project({ item }) {

    const { image, title, appLink, repoLink } = item

    return (
      <div className="col">
        <div className="card border-info">
          <img src={image} className="card-img-top" alt="..."/>
          <div className="card-body bg-dark">
            <h5 className="card-title text-center text-info mx">{title}</h5>
          </div>
          <div className="card-body text-center bg-dark btn-toolbar">
            <a href={appLink} target="_blank" className="btn btn-outline-info mx-auto position-relative col-4">
              <i className="bi bi-link" />
            </a>
            <a href={repoLink} target="_blank" className="btn btn-outline-info mx-auto position-relative col-4">
              <i className="bi bi-github" />
            </a>
          </div>
        </div>
      </div>
    ) 
}

export default Project;
