import './NotFound.css';
import Footer from '../../components/Footer/Footer';
import NavbarSelf from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import {portfolioContext} from '../../components/Context/Context'
import { useState } from 'react';

function NotFound() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <portfolioContext.Provider value={{toggleMenu,setToggleMenu}}>
      <div className="NotFound">
        <NavbarSelf/>
        <div id='Banner'>
          <div className="bannerTitle">
            Page Not Found
          </div>
        </div>
        <div className="errormessageContainer">
          <h1>Error404</h1>
        </div>
        <Footer/>
      </div>
    </portfolioContext.Provider>
  );
}

export default NotFound;
