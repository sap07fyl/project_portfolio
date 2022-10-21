import React from 'react'
import './Previewbutton.css'

const Previewbutton = (props) => {
  
  return (
      <a href={props.data.link} id='Previewbutton'>
        <div className="PreviewbuttonTitle">
          {props.title}
        </div>
      </a>
  )
}

export default Previewbutton