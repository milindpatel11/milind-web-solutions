import '../css/Projects.css';
import pic from '../img/img-1.png';
import { useState, useEffect, useLayoutEffect, useRef } from 'react'; // gives image path
import info from '../icons/information.png'
import engage from '../icons/approval.png'
import policy from '../icons/scales.png'
import elections from '../icons/elections.png'

const projects_title = { "EN": { "l1": "Recent", "l2":'Portfolio'},
  "NL" : { "l1": "Onze", "l2":'Portfolio'}}

const projects_data = {
  "EN": [
    {
      "key": 1,
      "title": "This Website",
      "subtitle":"Business site for Milind Patel",
      "link":"",
      "description": "Designing elegant and responsive websites for landing pages for your venture or personal website. We can develop and code site for clients who have their own design that needs to be coded from. We can also help you both design and develop the website as well.",
      "background":info
    },
    {
      "key": 2,
      "title": "Kea Scientific",
      "subtitle":"Freelance PhD Scientist",
      "link":"https://www.keascientific.com",
      "description": "Simple and fast billingual website is English and French made with ReactJS. Tired of seeing page reload when changing the website language? Leveraging ReactJS, this page makes changing language easy and smooth.",
      "background":engage
    },
    {
      "key": 3,
      "title": "ElectsmartUS (Landing Page)",
      "subtitle":"Stay informed and engaged with your elections",
      "link":"https://www.electsmart.us/",
      "description": "English and Spanish website developed using ReactJS. Initially developed with no code tool, Milind has now coded the landing page while continuing coding dynamic page of the full MVP.",
      "background":policy
    },
    {
      "key": 4,
      "title": "ElectsmartUS (Archived MVP page)",
      "subtitle":"Type address and get your US elections",
      "link":"https://electsmart-beta.bubbleapps.io/version-test/preview",
      "description": "Milind founded this non-profit startup for 2020 US elections. It was developed using no-code tool 'Bubble'. This website is designed to get MVP out there quickly and iterate fast with user feedback. This site uses API and real database from which it fetches needed extensive amount of data from backend.",
      "background":elections
    }
  ],
  "NL": [
    {
      "key": 1,
      "title": "Mantente Informada!",
      "subtitle":"",
      "link":"",
      "description": "Obtenga información relevante e imparcial sobre los candidatos que se postulan en sus elecciones no presidenciales. Lucha contra las cámaras de eco de noticias falsas y medios.",
      "icon":"https://img.icons8.com/bubbles/100/000000/man-in-blue-jacket-information.png",
      "background":info
    },
    {
      "key": 2,
      "title": "Mantente Comprometido!",
      "subtitle":"",
      "link":"",
      "description": "Muestre apoyo u oposición a los candidatos, aspirantes y sus posturas políticas. Mantenga un registro de sus candidatos favoritos y sus elecciones finales.",
      "background":engage
    },
    {
      "key": 3,
      "title": "Enfoque de Razor en la Política",
      "subtitle":"",
      "link":"",
      "description": "Vea cómo sus candidatos coinciden con usted en la postura política. Comunique sus posturas a sus candidatos y otros ciudadanos comunes que aspiran a postularse para un cargo.",
      "background":policy
    },
    {
      "key": 4,
      "title": "Todas las Elecciones son Importantes",
      "subtitle":"",
      "link":"",
      "description": "Las elecciones en todos los niveles, federal o estatal, son importantes y gran parte del impacto tiende a ocurrir a nivel estatal y local. Es por eso que nuestro enfoque está en las elecciones no presidenciales con voto negativo.",
      "background":elections
    }
  ],
}


function ProjectItem(props) {

  const [show, doShow] = useState(false);

  const projectRef = useRef(null);

  useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top;

    const heightPos = element => element.getBoundingClientRect().height;

   //added to reduce redundancy
    const divPos = topPos(projectRef.current);
    console.log(divPos);

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

    <div className={show ? "project-item show-animate" : "project-item"} ref={projectRef} >
      <div className="project-info">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <p>{props.description}</p>
        <a class="project-link cta" href={props.link} target="_blank" rel="noopener noreferrer">Visit Site</a>
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



  const ProjectItems = projects_filt.map( item => <ProjectItem title={item.title} subtitle={item.subtitle} key={item.key} description={item.description} link={item.link}/>)


  return (

    <div className="Projects container">
      <div className="projects-header">
        <h1 className="section-title">{title_filt.l1} <span>{title_filt.l2}</span></h1>
      </div>
      <div className="all-projects">
        {ProjectItems}
      </div>

      <div className='dummy-div' id="Contact"> </div>
    </div>

  );
}

export default Projects;
