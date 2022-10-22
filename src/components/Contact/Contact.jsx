import React from 'react'
import './Contact.css'
import { MdOutlineContactPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import Contactbox from '../Contactbox/Contactbox';


const Contact = () => {
  
  const contactDatas = [
    {
      title: 'Email Me',
      link: 'mailto:sunnyfungwork@gmail.com',
      info: 'sunnyfungwork@gmail.com',
      icon: <MdOutlineMailOutline className='Contactbox_icon'/>
    },

    {
      title: 'Call Now',
      link: '',
      info: '93304549',
      icon: <BsTelephone className='Contactbox_icon'/>
    },

    {
      title: 'Whatsapp Me',
      link: "https://wa.me/85293304549?text=Hello!I got some questions!",
      info: '93304549',
      icon: <BsWhatsapp className='Contactbox_icon'/>
    }
  ];

  const listItems = contactDatas.map((contactData) => 
    <Contactbox 
      title={contactData.title} 
      link={contactData.link} 
      info={contactData.info} 
      icon={contactData.icon}/>
  ) ;

  return (
    <section id='Contact'>
      <div className='symbolContainer reveal'>
        <MdOutlineContactPhone className='symbol'/>
      </div>
      <h1 className='reveal'>Contact Me</h1>
      <p className='section_description reveal'>
        Got Questions? Feel free to contact me!
      </p>
      <div className='Contactboxs reveal'>
        {listItems}
      </div>
    </section>
  )
}

export default Contact