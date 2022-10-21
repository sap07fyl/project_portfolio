import React from 'react'
import './Projectinfobox.css'
import { BiCategoryAlt } from "react-icons/bi";
import { BsCalendarWeek } from "react-icons/bs";
import { TbMessageLanguage, TbPlayerPlay } from "react-icons/tb";

const Projectinfobox = (props) => {

  function displayLiveDemo(){
    if (props.data.link !== '' || props.data.qr_code !== ''){
      return(
        <li>
          <div className="Projectinfobox_listLeft">
            <div className="dot1">
              <TbPlayerPlay className='Projectinfobox_icon'/>
            </div>
          </div>
          <div className="Projectinfobox_listRight">
            <div className="info_heading">
              Live Demo:
            </div>
            <div className="info_display">
              <a href={props.data.link}>{props.data.link}</a>
              <img src={props.data.qr_code} alt="" />
            </div>
          </div> 
        </li>
      )
    }
  }

  return (
    <div id='Projectinfobox'>
      <div className="Projectinfobox_title">
        Project Information
      </div>

      <ul>
        <li>
          <div className="Projectinfobox_listLeft">
            <div className="dot1">
            <BiCategoryAlt className='Projectinfobox_icon'/>
            </div>
          </div>
          <div className="Projectinfobox_listRight">
            <div className="info_heading">
              Category:
            </div>
            <div className="info_display">
              {props.data.category}

            </div>
          </div> 
        </li>

        <li>
          <div className="Projectinfobox_listLeft">
            <div className="dot1">
              <BsCalendarWeek className='Projectinfobox_icon'/>
            </div>
          </div>
          <div className="Projectinfobox_listRight">
            <div className="info_heading">
              Period:
            </div>
            <div className="info_display">
              {props.data.period}
            </div>
          </div> 
        </li>

        <li>
          <div className="Projectinfobox_listLeft">
            <div className="dot1">
              <TbMessageLanguage className='Projectinfobox_icon'/>
            </div>
          </div>
          <div className="Projectinfobox_listRight">
            <div className="info_heading">
              Language:
            </div>
            <div className="info_display">
              {props.data.language}
            </div>
          </div> 
        </li>
        
        {displayLiveDemo()}
        
      </ul>
    </div>
  )
}

export default Projectinfobox