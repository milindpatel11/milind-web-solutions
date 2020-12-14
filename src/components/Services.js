import '../css/Services.css';
import { useState, useEffect } from 'react';
import pic from '../img/home.jpg'; // gives image path
import info from '../icons/information.png'
import engage from '../icons/approval.png'
import policy from '../icons/scales.png'
import elections from '../icons/elections.png'

const service_title = { "EN": { "l1": "Our", "l2":'Services', "l3":"Fight fake news and media echo chambers by getting unbiased and relevant information on candidates running in your elections. Stay engaged by showing support/opposition for candidates and aspirants, and engaging in activism and running for office."},
  "NL" : { "l1": "Onze", "l2":'Services', "l3":"Uche contra las cámaras de eco de noticias y medios falsos obteniendo información imparcial y relevante sobre los candidatos que se presentan a sus elecciones. Manténgase comprometido mostrando apoyo / oposición a los candidatos y aspirantes, y participe en el activismo y se postule para un cargo."}}

const services_data = {
  "EN": [
    {
      "key": 1,
      "title": "Simple, Responsive and Elegant Landing Pages",
      "description": "Designing elegant and responsive websites for landing pages for your venture or personal website. We can develop and code site for clients who have their own design that needs to be coded from. We can also help you both design and develop the website as well.",
      "icon1":info
    },
    {
      "key": 2,
      "title": "Launching MVP and Beta",
      "description": "Launch your MVP or Beta with fast no-code platforms such as Webflow, Buuble and more. These tools are effecient way to launch MVP (database and design) quickly and iterate according to user feedback.",
      "icon1":engage
    },
    {
      "key": 3,
      "title": "Lean Startup Methodologies",
      "description": "Launching MVP and beta quickly, iterating over fetures quickly as user feedback comes and experimenting with different style and messaging (A/B testing). Milind bring experience from multiple early stage startups including one very early stage e-commerce startup where we used lean practices to constanty iterate.",
      "icon1":policy
    },
    {
      "key": 4,
      "title": "Business and Finance",
      "description": "Milind has helped startups with investor pitches, financials, valuations, market research and many business aspects impacting early stage ventures.",
      "icon1":elections
    }
  ],
  "NL": [
    {
      "key": 1,
      "title": "Mantente Informada!",
      "description": "Obtenga información relevante e imparcial sobre los candidatos que se postulan en sus elecciones no presidenciales. Lucha contra las cámaras de eco de noticias falsas y medios.",
      "icon":"https://img.icons8.com/bubbles/100/000000/man-in-blue-jacket-information.png",
      "icon1":info
    },
    {
      "key": 2,
      "title": "Mantente Comprometido!",
      "description": "Muestre apoyo u oposición a los candidatos, aspirantes y sus posturas políticas. Mantenga un registro de sus candidatos favoritos y sus elecciones finales.",
      "icon1":engage
    },
    {
      "key": 3,
      "title": "Enfoque de Razor en la Política",
      "description": "Vea cómo sus candidatos coinciden con usted en la postura política. Comunique sus posturas a sus candidatos y otros ciudadanos comunes que aspiran a postularse para un cargo.",
      "icon1":policy
    },
    {
      "key": 4,
      "title": "Todas las Elecciones son Importantes",
      "description": "Las elecciones en todos los niveles, federal o estatal, son importantes y gran parte del impacto tiende a ocurrir a nivel estatal y local. Es por eso que nuestro enfoque está en las elecciones no presidenciales con voto negativo.",
      "icon1":elections
    }
  ],
}


function ServiceItem(props) {


  return(

    <div className="service-item">
      <div className="icon"><img src={props.icon}/></div>
      <h2> {props.title}</h2>
      <p> {props.description}</p>
    </div>

);}


function Services(props) {

  //  useState using props coming from the parent

  const [language, setLang] = useState(props.language)

  // useEffect to apply / update this comp when props from parent change

  useEffect (() => {
    setLang(props.language);
  },[props.language])

  const title_filt = service_title[language];
  const services_filt = services_data[language];


  // const home2_data =  {"ES" : {"l1": "À propos", "l2":"Avec 8 ans d’expérience en recherche académique en France et aux Etats-Unis, j’ai développé des compétences en méthodologie et rigueur scientifique, ainsi qu’en analyse critique.  En tant que consultante indépendante, mon objectif est d’apporter mon expertise et de développer des relations de confiance.",
  //   "l3":"Dr. Clotilde Jumelle"} ,
  //    "EN" : {"l1": "About", "l2":"With 8 years of academic research in both France and the United States, I developed skills in scientific methodology, rigor and critical analysis.  As an independent consultant, my goal is to provide my expertise and establish trust-based relationships.",
  //    "l3":"Dr. Clotilde Jumelle"}}
  // const home2_filt = home2_data[language]


  // return the div with new/ updated props data

  const ServiceItems = services_filt.map( item => <ServiceItem title={item.title} key={item.key} description={item.description} icon={item.icon1}/>)


  return (

    <div className="Services container" id="Services-ID">
      <div className="service-top">
        <h1 className="section-title">{title_filt.l1} <span>{title_filt.l2}</span></h1>
        <p>{title_filt.l3}</p>
      </div>
      <div className="service-bottom">
         {ServiceItems}
      </div>

      <div className='dummy-div' id="Contact"> </div>

    </div>

  );
}

export default Services;
