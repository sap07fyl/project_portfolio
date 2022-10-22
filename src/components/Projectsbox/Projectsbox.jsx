import React from 'react'
import './Projectsbox.css'

const Projectsbox = (props) => {
  const images = props.images
  const language = props.language
  const title = props.title
  const link = "/project_portfolio/#/project/"+props.id

  return (
      <a href={link} className='Projectsbox'>
        <div className='ProjectsboxImage'>
          <img src={images} alt="" />
        </div>
        <div className="ProjectsboxTitle">
          <div className="language">
            {language}
          </div>
          <div className="title">
            {title}
          </div>
        </div>
      </a>
  )
}

export default Projectsbox
