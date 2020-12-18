import '../css/Services.css';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import develop from '../icons/develop.png';
import launch from '../icons/launch.png';
import lean from '../icons/lean.png';
import finance from '../icons/finance.png';



const service_title = { "EN": { "l1": "Our", "l2":'Services', "l3":"Reach out to Milind for following: simple and elegant personal or company landing websites; Launch MVP or beta with database and design; Lean Startup methodologies; Business and Finance For Startups."},
  "NL" : { "l1": "Onze", "l2":'Diensten', "l3":"Neem contact op met Milind voor het volgende: eenvoudige en elegante persoonlijke of bedrijfslandingswebsites; Start MVP of bèta met database en ontwerp; Lean Startup-methodologieën; Bedrijven en financiën voor startups."}}

const services_data = {
  "EN": [
    {
      "key": 1,
      "title": "Simple, Responsive and Elegant Landing Pages",
      "description": "Designing elegant and responsive websites for landing pages for your venture or personal website. We can develop and code site for clients who have their own design that needs to be coded from. We can also help you both design and develop the website as well.",
      "icon":develop
    },
    {
      "key": 2,
      "title": "Launching MVP and Beta",
      "description": "Launch your MVP or Beta with fast no-code platforms such as Webflow, Bubble and more. These tools are efficient way to launch MVP (database and design) quickly and iterate according to user feedback.",
      "icon":launch
    },
    {
      "key": 3,
      "title": "Lean Startup Methodologies",
      "description": "Launching MVP and beta quickly, iterating over fetures quickly as user feedback comes and experimenting with different style and messaging (A/B testing). Milind bring experience from multiple early stage startups including one very early stage e-commerce startup where we used lean practices to constanty iterate.",
      "icon":lean
    },
    {
      "key": 4,
      "title": "Business and Finance",
      "description": "Milind has helped startups with investor pitches, financials, valuations, market research and many other business aspects impacting early stage ventures such as digital marketing, operations and analytics.",
      "icon":finance
    }
  ],
  "NL": [
    {
      "key": 1,
      "title": "Eenvoudige, responsieve en elegante bestemmingspagina's",
      "description": "Ontwerpen van elegante en responsieve websites voor bestemmingspagina's voor uw onderneming of persoonlijke website. We kunnen sites ontwikkelen en coderen voor klanten die hun eigen ontwerp hebben waaruit moet worden gecodeerd. We kunnen u ook helpen bij het ontwerpen en ontwikkelen van de website.",
      "icon":"https://img.icons8.com/bubbles/100/000000/man-in-blue-jacket-information.png",
      "icon":develop
    },
    {
      "key": 2,
      "title": "MVP en bèta starten",
      "description": "Start uw MVP of bèta met snelle platforms zonder code, zoals Webflow, Bubble en meer. Deze tools zijn een efficiënte manier om MVP (database en ontwerp) snel te starten en te herhalen op basis van gebruikersfeedback.",
      "icon":launch
    },
    {
      "key": 3,
      "title": "Lean Startup-methodologieën",
      "description": "Snelle lancering van MVP en bèta, snel herhalend over fetures naarmate gebruikersfeedback komt en experimenteert met verschillende stijlen en berichten (A / B-testen). Milind brengt ervaring mee van meerdere startups in een vroeg stadium, waaronder een zeer vroege e-commerce startup waar we gestroomlijnde praktijken gebruikten om iteratie te behouden.",
      "icon":lean
    },
    {
      "key": 4,
      "title": "Zaken en financiën",
      "description": "Milind heeft startups geholpen met presentaties van investeerders, financiële gegevens, waarderingen, marktonderzoek en vele andere zakelijke aspecten die van invloed zijn op vroege ondernemingen, zoals digitale marketing, operations en analytics",
      "icon":finance
    }
  ],
}


function ServiceItem(props) {

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


    console.log("ServiceItem Logged");

  return(

    <div className={show ? "service-item show-animate flex-column" : "service-item flex-column"} ref={serviceRef}>
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

  console.log("Service Section Logged");

  // return the div with new/ updated props data

  const ServiceItems = services_filt.map( item => <ServiceItem title={item.title} key={item.key} description={item.description} icon={item.icon}/>)


  return (

    <div className="Services container" id="Services-ID" >
      <div className="service-top">
        <h1 className="section-title">{title_filt.l1} <span>{title_filt.l2}</span></h1>
        <p>{title_filt.l3}</p>
      </div>
      <div className="service-bottom">
         {ServiceItems}
      </div>

      <div className='dummy-div' id="Projects"> </div>

    </div>

  );
}

export default Services;
