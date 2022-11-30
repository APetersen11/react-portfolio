//template

import React from 'react'

function Project({ project }) {

    const { name, link, repo } = project

    return (
      <div className='card'>
        <a href={link}>
            <h3>{name}</h3>
        </a>
        

      </div>
    )
  
}

export default Project;
