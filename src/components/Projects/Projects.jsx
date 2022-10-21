import React, { useState } from 'react'
import './Projects.css'
import { BsPencilSquare } from "react-icons/bs";
import Projectsbox from '../Projectsbox/Projectsbox';
import { Project_data } from '../../Data/Project_data/Project_data';

export default function Projects() {

  const [buttonEnable1, setButtonEnable1] = useState(true);
  const [buttonEnable2, setButtonEnable2] = useState(false);
  const [buttonEnable3, setButtonEnable3] = useState(false);

  const projectsDatas = Project_data

  return (
    <section id='Projects'>
      <div className='symbolContainer reveal'>
        <BsPencilSquare className='symbol'/>
      </div>

      <h1 className='reveal'>My Projects</h1>
      <p className='section_description reveal'>Hope you enjoy my projects!</p>

      <div className='catagories reveal'>
          <button className={buttonEnable1?'buttonEnable':'buttonDisable'} onClick={() => {setButtonEnable1(true);setButtonEnable2(false);setButtonEnable3(false);}}>Web Project</button>
          <button className={buttonEnable2?'buttonEnable':'buttonDisable'} onClick={() => {setButtonEnable1(false);setButtonEnable2(true);setButtonEnable3(false);}}>App Project</button>
          <button className={buttonEnable3?'buttonEnable':'buttonDisable'} onClick={() => {setButtonEnable1(false);setButtonEnable2(false);setButtonEnable3(true);}}>Python Project</button>
      </div>

      <div className='Projectsboxs reveal'>
        {
          buttonEnable1 && 
          projectsDatas[0].map((projectsData) => 
          <Projectsbox 
            id={projectsData.id} 
            language={projectsData.language} 
            title={projectsData.title} 
            info_heading={projectsData.info_heading}
            info_list={projectsData.info_list}
            images={projectsData.images}/>)
        }

        {
          buttonEnable2 && 
          projectsDatas[1].map((projectsData) => 
          <Projectsbox 
            id={projectsData.id} 
            language={projectsData.language} 
            title={projectsData.title} 
            info_heading={projectsData.info_heading}
            info_list={projectsData.info_list}
            images={projectsData.images}/>)
        }

        {
          buttonEnable3 && 
          projectsDatas[2].map((projectsData) => 
          <Projectsbox 
            id={projectsData.id} 
            language={projectsData.language} 
            title={projectsData.title} 
            info_heading={projectsData.info_heading}
            info_list={projectsData.info_list}
            images={projectsData.images}/>)
        } 
      </div>
    </section>
  )
}