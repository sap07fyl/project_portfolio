import React from 'react'
import './ProjectInfo.css'
import Projectinfobox from '../Projectinfobox/Projectinfobox';
import Projectdescription from '../Project_description/Project_description';
import { useParams } from 'react-router-dom';
import { Project_data } from '../../Data/Project_data/Project_data';

const ProjectInfo = () => {

  let params = useParams()

  var currentProject_data = null

  for (let i = 0; i < Project_data.length; i++) {
    for (let j = 0; j < Project_data[i].length; j++) {
      // eslint-disable-next-line
      if (params.id == Project_data[i][j].id)
        currentProject_data = Project_data[i][j]
    }
  }

  return (
    <div id='ProjectInfo'>
      <div className="ProjectInfo_Left">
          <Projectdescription data={currentProject_data}/>
      </div>
      <div className="ProjectInfo_Right">
          <Projectinfobox data={currentProject_data}/>
      </div>
    </div>
  )
}

export default ProjectInfo