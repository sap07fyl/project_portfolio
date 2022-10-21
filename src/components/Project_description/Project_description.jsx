import React from 'react'
import './Project_description.css'

const Project_description = (props) => {
  
  return (
    <section id='Project_description'>
      <img src={props.data.images} alt="" />

      <div className="Project_description_title">
        {props.data.title}
      </div>

      <div className="Project_description_objective">
        <h2>Objective</h2>
        <p>{props.data.objective}</p>
      </div>

      <div className="Project_description_objective">
        <h2>Task</h2>
        <h3>{props.data.info_heading}</h3>
        <ul>
          {
            props.data.info_list.map(item=>
              <li>{item}</li>
            )
          }
        </ul>
      </div>

      {props.data.id === 4 &&
        <div className="Project_description_objective">
          <br />
          <h3>{props.data.info_heading1}</h3>
          <ul>
            {
              props.data.info_list1.map(item=>
                <li>{item}</li>
              )
            }
          </ul>
        </div>
      }
    </section>
  )
}

export default Project_description