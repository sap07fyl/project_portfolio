import React from 'react'
import './Contactbox.css'

const Contactbox = (props) => {
  const title = props.title
  const link = props.link
  const info = props.info
  const icon = props.icon

  function displayContactBox(){
    if (link != ''){
      return(
        <a href={link} className='Contactbox' target="_blank" rel="noreferrer">
        <div className='dot'>
          {icon}
        </div>
  
        <div className="ContactboxTitle">
          {title}
        </div>
        <div className="Contactboxinfo">
          <a href={link}>{info}</a>
        </div>
      </a>
      )
    }

    else{
      return(
        <div className='Contactbox'>
          <div className='dot'>
            {icon}
          </div>

          <div className="ContactboxTitle">
            {title}
          </div>
          <div className="Contactboxinfo">
            <p>{info}</p>
          </div>
        </div>
      )
    }
  }

  return (
    displayContactBox()
    // <a href={link} className='Contactbox' target="_blank" rel="noreferrer">
    //   <div className='dot'>
    //     {icon}
    //   </div>

    //   <div className="ContactboxTitle">
    //     {title}
    //   </div>
    //   <div className="Contactboxinfo">
    //     <a href={link}>{info}</a>
    //   </div>
    // </a>
  )
}

export default Contactbox