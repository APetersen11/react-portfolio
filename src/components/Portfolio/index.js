import React, { useState } from 'react'
import Project from '../Project'

function Portfolio() {

    // object w all project info

    const [projects] = useState([
        {

        }
    ])

    return (
        <div>
            <div className='projectCards'>
                {projects.map((project) => (
                    < Project project={Project} />
                ))}
            </div>
        </div>
    )

}

export default Portfolio
