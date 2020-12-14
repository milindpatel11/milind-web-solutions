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
      <h2>Stay Infomed, Stay Engaged, Elect Right People</h2>
      <p className='copy'>Copyright © 2020 electsmartUS. All rights reserved. Designed and Developed by Milind Patel</p>

      <div className='thanks'>
        <p> Thanks to Shaif Irfan for some design inspiration and the <a href="https://www.youtube.com/watch?v=ZFQkb26UD1Y" target="_blank" rel="noopener noreferrer" > Video Tutorial </a> </p>
        <p> Thanks to <a href="https://icons8.com" target="_blank" rel="noopener noreferrer" > https://icons8.com </a> for Icons in Resources Section  </p>
      </div>
    </div>

  );
}

export default Footer;
