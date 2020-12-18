import { useState, useEffect } from 'react';
import pic from '../img/Logo.png';

const footer_data =  {"EN" : {"l1": "Stay Informed", "l2":"Stay Engaged", "l3":"Elect Right Candidates", "bttn1":"See Preview"} ,
   "NL" : {"l1": "Mantente Informada", "l2":"Mantente Comprometido", "l3":"Elegir Candidatos Correctos", "bttn1":"Ver Vista Previa"}}


function Footer(props) {

  //  useState using props coming from the parent

  const [language, setLang] = useState(props.language)

  // useEffect to apply / update this comp when props from parent change

  useEffect (() => {
    setLang(props.language);
  },[props.language])

  const footer_filt = footer_data[language];



  // return the div with new/ updated props data


  return (

    <div className="Footer"  id='Footer'>

      <div className="brand">
        <a href="#">
          <img src={pic} alt="logo-electsmart-US"/>
        </a>
      </div>
      <h2>Complete Website and Business solution</h2>
      <p className='copy'>Copyright © 2020 Milind Patel. All rights reserved.</p>

      <div className='thanks'>
        <p> Thanks to <a href="https://www.iconpacks.net" target="_blank" rel="noopener noreferrer" > https://www.iconpacks.net </a> for Icons.</p>
      </div>
    </div>

  );
}

export default Footer;
