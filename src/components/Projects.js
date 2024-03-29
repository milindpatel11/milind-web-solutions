import '../css/Projects.css';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import pic from '../img/img-1.png';
import milind from '../img/milind.jpeg';
import kea from '../img/kea.jpeg';
import electsmart from '../img/electsmart.jpeg';
import electsmartbeta from '../img/electsmartmvp.jpeg';
import electsmartappmvp from '../img/electsmartappmvp.jpeg';


const projects_title = { "EN": { "l1": "Recent", "l2":'Portfolio'},
  "NL" : { "l1": "Recente", "l2":'Portfolio'}}

const projects_data = {
  "EN": [
    {
      "key": 1,
      "title": "This Website",
      "subtitle":"Business site for Milind Patel",
      "link":null,
      "description": "Initially developed by just HTML, CSS and JS with simple look and feel; now modified using ReactJS to use smooth billingual transition as well as some animations triggering with scrolling.",
      "background":milind
    },
    {
      "key": 2,
      "title": "Kea Scientific",
      "subtitle":"Freelance PhD Scientist",
      "link":"https://www.keascientific.com",
      "description": "Simple and fast billingual website is English and French made with ReactJS. Tired of seeing page reload when changing the website language? Leveraging ReactJS, this page makes changing language easy and smooth.  Minimalistic and light themes design was provided by client in form of Powerpoint and was developed by us to efficiently display relevant information on services and projects.",
      "background":kea
    },
    {
      "key": 3,
      "title": "ElectsmartUS (Landing Page)",
      "subtitle":"Stay informed and engaged with your elections",
      "link":"https://www.electsmart.us/",
      "description": "English and Spanish website developed using ReactJS. Initially developed with no code tool, Milind has now coded the landing page while continuing coding dynamic page of the full MVP.",
      "background":electsmart
    },
    {
      "key": 4,
      "title": "ElectsmartUS (MVP page - In Developement)",
      "subtitle":"Started from No-code now it is Yes-Code",
      "link":"https://electsmart-mvp.netlify.app",
      "description": "Milind founded this non-profit startup for 2020 US elections. Initially it was developed using no-code tool 'Bubble' to get MVP out there quickly and iterate fast with user feedback. From no-code to now it is developed with code (ReactJs on Frontend and Firebase with NodeJS/Express for server side). This site uses API and firebase database from which it fetches needed elections and candidates for address searched.",
      "background":electsmartbeta
    },
    {
      "key": 5,
      "title": "ElectsmartUS (MVP app - In Developement)",
      "subtitle":"Mobile app MVP with React Native",
      "link":"https://www.youtube.com/watch?v=P2Tdzv_1WOU",
      "description": "Work in Progress preview of unpublished mobile app MVP for electsmartUS. This is to completment electsmartUS web for more accesible form preffered by many users.",
      "background":electsmartappmvp
    }
  ],
  "NL": [
    {
      "key": 1,
      "title": "Deze website",
      "subtitle":"Bedrijfssite voor Milind Patel",
      "link":null,
      "description": "In eerste instantie ontwikkeld door alleen HTML, CSS en JS met een eenvoudige look en feel; nu aangepast met ReactJS om een soepele facturering te gebruiken, evenals enkele animaties die worden geactiveerd met scrollen.",
      "icon":"https://img.icons8.com/bubbles/100/000000/man-in-blue-jacket-information.png",
      "background":milind
    },
    {
      "key": 2,
      "title": "Kea Scientific",
      "subtitle":"Freelance PhD-wetenschapper",
      "link":"https://www.keascientific.com",
      "description": "Eenvoudige en snelle factureringswebsite is Engels en Frans gemaakt met ReactJS. Bent u het beu om de pagina opnieuw te zien laden bij het wijzigen van de taal van de website? Gebruikmakend van ReactJS, maakt deze pagina het veranderen van taal gemakkelijk en soepel. Minimalistisch en licht themaontwerp werd door de klant geleverd in de vorm van Powerpoint en is door ons ontwikkeld om op efficiënte wijze relevante informatie over diensten en projecten weer te geven.",
      "background":kea
    },
    {
      "key": 3,
      "title": "ElectsmartUS (Bestemmingspagina)",
      "subtitle":"Blijf op de hoogte en betrokken bij uw verkiezingen",
      "link":"https://www.electsmart.us/",
      "description": "Engelse en Spaanse website ontwikkeld met ReactJS. Aanvankelijk ontwikkeld zonder codetool, heeft Milind nu de bestemmingspagina gecodeerd terwijl hij doorgaat met het coderen van de dynamische pagina van de volledige MVP.",
      "background":electsmart
    },
    {
      "key": 4,
      "title": "ElectsmartUS (MVP-pagina - In ontwikkeling)",
      "subtitle":"Begonnen met No-code, nu is het Yes-Code",
      "link":"https://electsmart-mvp.netlify.app",
      "description": "Milind richtte deze non-profit startup op voor de Amerikaanse verkiezingen van 2020. Aanvankelijk werd het ontwikkeld met behulp van de tool 'Bubble' zonder code om MVP snel naar buiten te brengen en snel te herhalen met gebruikersfeedback. Van no-code tot nu is het ontwikkeld met code (ReactJs op Frontend en Firebase met NodeJS / Express voor serverzijde). Deze site maakt gebruik van een API en een firebase-database waaruit het de benodigde verkiezingen en kandidaten voor het zoeken naar adressen ophaalt.",
      "background":electsmartbeta
    },
    {
      "key": 5,
      "title": "ElectsmartUS (MVP-app - In ontwikkeling)",
      "subtitle":"MMVP voor mobiele apps met React Native",
      "link":"https://www.youtube.com/watch?v=P2Tdzv_1WOU",
      "description": "Werk in uitvoering preview van niet-gepubliceerde mobiele app MVP voor electsmartUS. Dit is om electsmartUS web te voltooien voor een meer toegankelijke vorm die door veel gebruikers wordt geprefereerd.",
      "background":electsmartappmvp
    }
  ],
}


function ProjectItem(props) {

  const [show, doShow] = useState(false);

  const projectRef = useRef(null);

  useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top;


   //added to reduce redundancy
    const divPos = topPos(projectRef.current);

    console.log("ProjectItem Logged");

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (divPos < scrollPos) {
        doShow(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return(

    <div className={show ? "project-item show-animate flex-column" : "project-item flex-column"}>
      <div className="project-info flex-column">
        <h1 >{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <p className="para">{props.description}</p>
        { props.link &&
          <a className="project-link cta" href={props.link} target="_blank" rel="noopener noreferrer">{(props.language==="EN") ? "Visit Site" : "Bezoek de Site"}</a>
        }

      </div>
      <div className="project-img" ref={projectRef}>
        <img src={props.pic} alt="img"/>
      </div>
    </div>

);}


function Projects(props) {

  //  useState using props coming from the parent

  const [language, setLang] = useState(props.language)

  // useEffect to apply / update this comp when props from parent change

  useEffect (() => {
    setLang(props.language);
  },[props.language])

  const title_filt = projects_title[language];
  const projects_filt = projects_data[language];

  console.log("Project Section Logged");

  const ProjectItems = projects_filt.map( item => <ProjectItem title={item.title} subtitle={item.subtitle} key={item.key} description={item.description} link={item.link} language={language} pic={item.background}/>)


  return (

    <div className="Projects container">
      <div className="projects-header">
        <h1 className="section-title">{title_filt.l1} <span>{title_filt.l2}</span></h1>
      </div>
      <div className="all-projects flex-column">
        {ProjectItems}
      </div>
    { /* <div className="upcoming-project flex-column">
        <h3 className='flex-row'> What's Cooking Next <h2>  ‍🍳 </h2> </h3>
        <h3> ElectsmartUS coded MVP Mobile App with Firebase (React-Native + NodeJS/Express)</h3>
      </div> */}

      <div className='dummy-div' id="Contact"> </div>
    </div>

  );
}

export default Projects;
