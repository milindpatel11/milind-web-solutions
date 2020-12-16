import '../css/Home.css';
import { useState, useEffect } from 'react';
import pic from '../img/home.jpg'; // gives image path

const home_data =  {"EN" : {"l1": "Elegent, fast and mobile friendly sites", "l2":"for your personal and business needs", "l3":"to get your sh*t done", "bttn1":"Portfolio", "bttn2":"See CV"} ,
   "NL" : {"l1": "Mantente Informada", "l2":"Mantente Comprometido", "l3":"Elegir Candidatos Correctos", "bttn1":"NL-Portfolio", "bttn2":"NL-See CV"}}

function Home(props) {

  //  useState using props coming from the parent

  const [language, setLang] = useState(props.language)

  // useEffect to apply / update this comp when props from parent change

  useEffect (() => {
    setLang(props.language);
  },[props.language])


  const home_filt = home_data[language];



  //
  // const home2_data =  {"ES" : {"l1": "À propos", "l2":"Avec 8 ans d’expérience en recherche académique en France et aux Etats-Unis, j’ai développé des compétences en méthodologie et rigueur scientifique, ainsi qu’en analyse critique.  En tant que consultante indépendante, mon objectif est d’apporter mon expertise et de développer des relations de confiance.",
  //   "l3":"Dr. Clotilde Jumelle"} ,
  //    "EN" : {"l1": "About", "l2":"With 8 years of academic research in both France and the United States, I developed skills in scientific methodology, rigor and critical analysis.  As an independent consultant, my goal is to provide my expertise and establish trust-based relationships.",
  //    "l3":"Dr. Clotilde Jumelle"}}
  // const home2_filt = home2_data[language]


  // return the div with new/ updated props data


  return (

    <div className="Home container"  id='Home'>

        <div className="intro">
          <h1>{home_filt.l1}<span></span></h1>
          <h1>{home_filt.l2}<span></span></h1>
          <h1>{home_filt.l3}<span></span></h1>
          <div className="home-bttns">
            <a href='#Projects' type="button" className="cta" >{home_filt.bttn1}</a>
            <a href='#' type="button" className="cta" >{home_filt.bttn2}</a>
          </div>
        </div>

      <div className='dummy-div' id="About"> </div>
    </div>

  );
}

export default Home;
