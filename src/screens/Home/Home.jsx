import './Home.css';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import NavbarSelf from '../../components/Navbar/Navbar';
import Projects from '../../components/Projects/Projects';
import {portfolioContext} from '../../components/Context/Context'
import { useState } from 'react';

function Home() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <portfolioContext.Provider value={{toggleMenu,setToggleMenu}}>
      <div className="Home">
        <NavbarSelf/>
        <Header/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </portfolioContext.Provider>
  );
}

export default Home;
