import './ProjectDetail.css';
import Footer from '../../components/Footer/Footer';
import NavbarSelf from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import {portfolioContext} from '../../components/Context/Context'
import { useState } from 'react';
import ProjectInfo from '../../components/ProjectInfo/ProjectInfo';

function ProjectDetail() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <portfolioContext.Provider value={{toggleMenu,setToggleMenu}}>
      <div className="ProjectDetail">
        <NavbarSelf/>
        <Banner/>
        <ProjectInfo/>
        <Footer/>
      </div>
    </portfolioContext.Provider>
  );
}

export default ProjectDetail;
