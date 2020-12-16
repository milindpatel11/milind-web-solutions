import '../css/About.css';
import { useState, useEffect } from 'react';
import pic from '../img/about-me.png';
// import pic from '../img/about-img.jpg'; // gives image path

const about_data =  {"EN" : {"l1": "About", "l2":"Milind", "l3":"Physican, Business Professional, and aspiring Full Stack Developer", "l4":"Milind is a Physician from India with an MBA in the US. While in the business school, he gradually started learning data science and computer science. During his MBA in the US, he worked at a health insurance company on procurement and finance. After MBA, he worked with two early stage startups (e-commerce and diagnostic device) helping them with most business aspects of starting a venture. These include finance, research, operations and logistics, customer service, data analysis, SEO/SEM, lean methodologies, fundraising, marketing and strategy. Milind has been web development online for the last two years and this website is to demonstrate some of the work on web development for freelancing and employment purposes in web development and launching MVP for startups.", "bttn":"See LinkedIn"} ,
   "NL" : {"l1": "Sobre", "l2":"Milind", "l3":"", "l4": "NL - Milind is a Physician from India with an MBA in the US. While in the business school, he gradually started learning data science and computer science. During his MBA in the US, he worked at a health insurance company on procurement and finance. After MBA, he worked with two early stage startups (e-commerce and diagnostic device) helping them with most business aspects of starting a venture. These include finance, research, operations and logistics, customer service, data analysis, SEO/SEM, lean methodologies, fundraising, marketing and strategy. Milind has been web development online for the last two years and this website is to demonstrate some of the work on web development for freelancing and employment purposes in web development and launching MVP for startups.", "bttn":"LinkedIn"}}


function About(props) {

  //  useState using props coming from the parent

  const [language, setLang] = useState(props.language)

  // useEffect to apply / update this comp when props from parent change

  useEffect (() => {
    setLang(props.language);
  },[props.language])


  const about_filt = about_data[language];
  console.log(about_filt);

  // const home2_data =  {"ES" : {"l1": "À propos", "l2":"Avec 8 ans d’expérience en recherche académique en France et aux Etats-Unis, j’ai développé des compétences en méthodologie et rigueur scientifique, ainsi qu’en analyse critique.  En tant que consultante indépendante, mon objectif est d’apporter mon expertise et de développer des relations de confiance.",
  //   "l3":"Dr. Clotilde Jumelle"} ,
  //    "EN" : {"l1": "About", "l2":"With 8 years of academic research in both France and the United States, I developed skills in scientific methodology, rigor and critical analysis.  As an independent consultant, my goal is to provide my expertise and establish trust-based relationships.",
  //    "l3":"Dr. Clotilde Jumelle"}}
  // const home2_filt = home2_data[language]


  // return the div with new/ updated props data


  return (

    <div className="About container"  id='About-ID'>
      <h1 className="section-title">{about_filt.l1} <span>{about_filt.l2}</span></h1>
        <h2>{about_filt.l3}</h2>
      <div className = 'about-inner'>
        <div className="col-left">
          <div className="about-img">
            <img src={pic} alt="img"/>
          </div>
        </div>
        <div className="col-right">
          <p>{about_filt.l4}</p>
        </div>

      </div>

      <a href='https://www.linkedin.com' target="_blank" rel="noopener noreferrer" type="button" className="cta">{about_filt.bttn}</a>

      <div className='dummy-div' id="Services"> </div>

    </div>

  );
}

export default About;
