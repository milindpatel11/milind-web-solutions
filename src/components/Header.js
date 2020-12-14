import '../css/Header.css';
import { useState, useEffect } from 'react';
import pic from '../img/Logo.png'; // gives image path
import menu from '../icons/menu@1x.png';
import close from '../icons/close@1x.png';


function Header(props) {

  //  useState using props coming from the parent

  const [language, setLang] = useState(props.language)


  // useEffect to apply / update this comp when props from parent change

  useEffect (() => {
    setLang(props.language);
  },[props.language])


  const header_data =  {"NL" : {"l1": "Inicio", "l2":"Sobre", "l3":"Recursos", "l4":"Portafolio", "l5":"Contacto"} ,
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

    <div className="Header" id='Header' style={{backgroundColor:props.headerColor}} >
        <div className="nav-bar">
          <div className="brand">
            <a href="#">
              <img src={pic} alt="logo-electsmart-US"/>
            </a>
          </div>

          <select value={props.language} disabled={true} onChange={e => props.changeLang(e.target.value)}>
          <option value="EN">English</option>
          <option value="NL">Nederlands</option>
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
