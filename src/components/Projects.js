import '../css/Projects.css';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import pic from '../img/img-1.png';

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
      "background":""
    },
    {
      "key": 2,
      "title": "Kea Scientific",
      "subtitle":"Freelance PhD Scientist",
      "link":"https://www.keascientific.com",
      "description": "Simple and fast billingual website is English and French made with ReactJS. Tired of seeing page reload when changing the website language? Leveraging ReactJS, this page makes changing language easy and smooth.",
      "background":""
    },
    {
      "key": 3,
      "title": "ElectsmartUS (Landing Page)",
      "subtitle":"Stay informed and engaged with your elections",
      "link":"https://www.electsmart.us/",
      "description": "English and Spanish website developed using ReactJS. Initially developed with no code tool, Milind has now coded the landing page while continuing coding dynamic page of the full MVP.",
      "background":""
    },
    {
      "key": 4,
      "title": "ElectsmartUS (Archived MVP page)",
      "subtitle":"Type address and get your US elections",
      "link":"https://electsmart-beta.bubbleapps.io/version-test/preview",
      "description": "Milind founded this non-profit startup for 2020 US elections. It was developed using no-code tool 'Bubble'. This website is designed to get MVP out there quickly and iterate fast with user feedback. This site uses API and real database from which it fetches needed extensive amount of data from backend.",
      "background":""
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
      "background":""
    },
    {
      "key": 2,
      "title": "Kea Scientific",
      "subtitle":"Freelance PhD-wetenschapper",
      "link":"https://www.keascientific.com",
      "description": "Eenvoudige en snelle factureringswebsite is Engels en Frans gemaakt met ReactJS. Bent u het beu om de pagina opnieuw te zien laden bij het wijzigen van de taal van de website? Gebruikmakend van ReactJS, maakt deze pagina het veranderen van taal gemakkelijk en soepel.",
      "background":""
    },
    {
      "key": 3,
      "title": "ElectsmartUS (Bestemmingspagina)",
      "subtitle":"Blijf op de hoogte en betrokken bij uw verkiezingen",
      "link":"https://www.electsmart.us/",
      "description": "Engelse en Spaanse website ontwikkeld met ReactJS. Aanvankelijk ontwikkeld zonder codetool, heeft Milind nu de bestemmingspagina gecodeerd terwijl hij doorgaat met het coderen van de dynamische pagina van de volledige MVP.",
      "background":""
    },
    {
      "key": 4,
      "title": "ElectsmartUS (Gearchiveerde MVP-pagina)",
      "subtitle":"Typ het adres en ontvang uw Amerikaanse verkiezingen",
      "link":"https://electsmart-beta.bubbleapps.io/version-test/preview",
      "description": "Milind richtte deze non-profit startup op voor de Amerikaanse verkiezingen van 2020. Het is ontwikkeld met behulp van de no-code tool 'Bubble'. Deze website is ontworpen om MVP snel naar buiten te brengen en snel te herhalen met gebruikersfeedback. Deze site maakt gebruik van een API en een echte database waaruit het de benodigde uitgebreide hoeveelheid gegevens uit de backend haalt.",
      "background":""
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

    <div className={show ? "project-item show-animate flex-column" : "project-item flex-column"} ref={projectRef} >
      <div className="project-info flex-column">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <p>{props.description}</p>
        { props.link &&
          <a className="project-link cta" href={props.link} target="_blank" rel="noopener noreferrer">Visit Site</a>
        }

      </div>
      <div className="project-img">
        <img src={pic} alt="img"/>
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

  const ProjectItems = projects_filt.map( item => <ProjectItem title={item.title} subtitle={item.subtitle} key={item.key} description={item.description} link={item.link}/>)


  return (

    <div className="Projects container">
      <div className="projects-header">
        <h1 className="section-title">{title_filt.l1} <span>{title_filt.l2}</span></h1>
      </div>
      <div className="all-projects flex-column">
        {ProjectItems}
      </div>

      <div className='dummy-div' id="Contact"> </div>
    </div>

  );
}

export default Projects;
