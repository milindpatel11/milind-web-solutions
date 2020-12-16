import '../css/Services.css';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';


const service_title = { "EN": { "l1": "Our", "l2":'Services', "l3":"Fight fake news and media echo chambers by getting unbiased and relevant information on candidates running in your elections. Stay engaged by showing support/opposition for candidates and aspirants, and engaging in activism and running for office."},
  "NL" : { "l1": "Onze", "l2":'Services', "l3":"Uche contra las cámaras de eco de noticias y medios falsos obteniendo información imparcial y relevante sobre los candidatos que se presentan a sus elecciones. Manténgase comprometido mostrando apoyo / oposición a los candidatos y aspirantes, y participe en el activismo y se postule para un cargo."}}

const services_data = {
  "EN": [
    {
      "key": 1,
      "title": "Simple, Responsive and Elegant Landing Pages",
      "description": "Designing elegant and responsive websites for landing pages for your venture or personal website. We can develop and code site for clients who have their own design that needs to be coded from. We can also help you both design and develop the website as well.",
      "icon":""
    },
    {
      "key": 2,
      "title": "Launching MVP and Beta",
      "description": "Launch your MVP or Beta with fast no-code platforms such as Webflow, Buuble and more. These tools are effecient way to launch MVP (database and design) quickly and iterate according to user feedback.",
      "icon":""
    },
    {
      "key": 3,
      "title": "Lean Startup Methodologies",
      "description": "Launching MVP and beta quickly, iterating over fetures quickly as user feedback comes and experimenting with different style and messaging (A/B testing). Milind bring experience from multiple early stage startups including one very early stage e-commerce startup where we used lean practices to constanty iterate.",
      "icon":""
    },
    {
      "key": 4,
      "title": "Business and Finance",
      "description": "Milind has helped startups with investor pitches, financials, valuations, market research and many business aspects impacting early stage ventures.",
      "icon":""
    }
  ],
  "NL": [
    {
      "key": 1,
      "title": "",
      "description": "Obtenga información relevante e imparcial sobre los candidatos que se postulan en sus elecciones no presidenciales. Lucha contra las cámaras de eco de noticias falsas y medios.",
      "icon":"https://img.icons8.com/bubbles/100/000000/man-in-blue-jacket-information.png",
      "icon":""
    },
    {
      "key": 2,
      "title": "Mantente Comprometido!",
      "description": "Muestre apoyo u oposición a los candidatos, aspirantes y sus posturas políticas. Mantenga un registro de sus candidatos favoritos y sus elecciones finales.",
      "icon":""
    },
    {
      "key": 3,
      "title": "Enfoque de Razor en la Política",
      "description": "Vea cómo sus candidatos coinciden con usted en la postura política. Comunique sus posturas a sus candidatos y otros ciudadanos comunes que aspiran a postularse para un cargo.",
      "icon":""
    },
    {
      "key": 4,
      "title": "Todas las Elecciones son Importantes",
      "description": "Las elecciones en todos los niveles, federal o estatal, son importantes y gran parte del impacto tiende a ocurrir a nivel estatal y local. Es por eso que nuestro enfoque está en las elecciones no presidenciales con voto negativo.",
      "icon":""
    }
  ],
}


function ServiceItem(props) {

  return(

    <div className={props.animate ? "service-item show-animate" : "service-item"}>
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


  const [show, doShow] = useState(false);

  const serviceRef = useRef(null);

  useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top;
   //added to reduce redundancy
    const divPos = topPos(serviceRef.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (divPos < scrollPos) {
        doShow(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



  // return the div with new/ updated props data

  const ServiceItems = services_filt.map( item => <ServiceItem animate={show} title={item.title} key={item.key} description={item.description} icon={item.icon1}/>)


  return (

    <div className="Services container" id="Services-ID" >
      <div className="service-top">
        <h1 className="section-title">{title_filt.l1} <span>{title_filt.l2}</span></h1>
        <p>{title_filt.l3}</p>
      </div>
      <div className="service-bottom" ref={serviceRef}>
         {ServiceItems}
      </div>

      <div className='dummy-div' id="Projects"> </div>

    </div>

  );
}

export default Services;
