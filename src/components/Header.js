import '../css/Header.css';
import { useState, useEffect } from 'react';
import pic from '../img/Logo.png'; // gives image path
import menu from '../icons/menu@1x.png';
import close from '../icons/close@1x.png';


function Header(props) {

  //  useState using props coming from the parent

  const [language, setLang] = useState(props.language);
  const [headerColor, setHeaderColor] = useState(false);

  const listenScrollEvent = e => {
    if (window.scrollY > 100) {
      setHeaderColor(true)
    } else {
      setHeaderColor(false)
    }
  };

  // useEffect to apply / update this comp when props from parent change

  useEffect (() => {
    setLang(props.language);
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  },[props.language])


  const header_data =  {"NL" : {"l1": "Begin", "l2":"Over", "l3":"Diensten", "l4":"Portefeuille", "l5":"Contact"} ,
   "EN" : {"l1": "Home", "l2":"About", "l3":"Services",  "l4":"Portfolio", "l5":"Contact"}}

  const header_filt = header_data[language]
  console.log(header_filt);


  // return the div with new/ updated props data


  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const toggleMenu = () => {
    setActive(false);
  }



  return (

    <div className="Header" id='Header' style={{backgroundColor: headerColor? 'var(--brand-main-full)' : 'transparent'}} >
        <div className="nav-bar">
          <div className="brand">
            <a href="#">
              <img src={pic} alt="logo-electsmart-US"/>
            </a>
          </div>

          <select value={props.language} disabled={false} onChange={e => props.changeLang(e.target.value)}>
          <option value="EN">English</option>
          <option value="NL">Nederlands (beta)</option>
          </select>

          <div className="nav-list">
            <div className={isActive ? 'hamburger active':'hamburger' } onClick={toggleClass} >
              <img src={isActive ? close : menu }/>

            </div>
            <ul className={isActive ? 'active': null} onClick={toggleMenu}>
              <li><a href= '#Home' data-after="Home" > {header_filt.l1} </a></li>
              <li><a href='#About' data-after="About" > {header_filt.l2} </a></li>
              <li><a href='#Services' data-after="Services" > {header_filt.l3} </a></li>
              <li><a href='#Projects' data-after="Portfolio" > {header_filt.l4} </a></li>
              <li><a href="#Contact" data-after="Contact" > {header_filt.l5} </a></li>
            </ul>
          </div>
        </div>
      </div>

  );
}

export default Header;
