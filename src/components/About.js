import '../css/About.css';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import profile from '../img/profile.png';
// import pic from '../img/about-img.jpg'; // gives image path

const about_data =  {"EN" : {"l1": "About", "l2":"Milind", "l3":"Physician, Business Professional, and aspiring Programmer", "l4":"Milind is a Physician from India with an MBA in the US. While in the business school, he gradually started learning data science and computer science. During his MBA in the US, he worked at a health insurance company on procurement and finance. After MBA, he worked with two early stage startups (e-commerce and diagnostic device) helping them with most business aspects of starting a venture. These include finance, research, operations and logistics, customer service, data analysis, SEO/SEM, lean methodologies, fundraising, marketing and strategy. Milind has been web development online for the last two years and this website is to demonstrate some of the work on web development for freelancing and employment purposes in web development and launching MVP for startups.", "bttn":"See LinkedIn"} ,
   "NL" : {"l1": "Over", "l2":"Milind", "l3":"Arts, Business Professional en aspirant-programmeur", "l4": "NL - Milind is a Physician from India with an MBA in the US. While in the business school, he gradually started learning data science and computer science. During his MBA in the US, he worked at a health insurance company on procurement and finance. After MBA, he worked with two early stage startups (e-commerce and diagnostic device) helping them with most business aspects of starting a venture. These include finance, research, operations and logistics, customer service, data analysis, SEO/SEM, lean methodologies, fundraising, marketing and strategy. Milind has been web development online for the last two years and this website is to demonstrate some of the work on web development for freelancing and employment purposes in web development and launching MVP for startups.", "bttn":"Zie LinkedIn"}}

const skills = { "F": [ {"key":1 , "name":"HTML", "percentage":'90%'} ,
  {"key":2 , "name":"CSS", "percentage":'80%'},
  {"key":3 , "name":"ReactJS", "percentage":'70%'},
  {"key":4 , "name":"React-Native", "percentage":'50%'},
  {"key":5 , "name":"AngularJS", "percentage":'30%'},
  {"key":6 , "name":"Bootstrap", "percentage":'40%'},
  {"key":7 , "name":"VueJS", "percentage":'20%'}
],
"B": [ {"key":1 , "name":"Firebase", "percentage":'40%'} ,
  {"key":2 , "name":"MongoDB", "percentage":'20%'},
  {"key":3 , "name":"NodeJS", "percentage":'20%'},
  {"key":4 , "name":"Python", "percentage":'30%'},
  {"key":5 , "name":"Java", "percentage":'10%'},
],
"S": [ {"key":1 , "name":"Finance", "percentage":'80%'} ,
  {"key":2 , "name":"SEO/SEM", "percentage":'70%'},
  {"key":3 , "name":"Pitching", "percentage":'80%'},
  {"key":4 , "name":"Operation", "percentage":'70%'},
  {"key":5 , "name":"Market Research", "percentage":'70%'},
  {"key":6 , "name":"Medicine", "percentage":'80%'},
  {"key":7 , "name":"Analytics", "percentage":'70%'},
],
}

function SkillItem(props) {

  console.log("SkillItem Logged");

 return(

   <div className="bar-cont flex-row">
     <div className="skill">{props.name}</div>
     <div className='bar-outer flex-row'>
       <div className="bar-filled" style={{width:`${props.percentage}`}}></div>
       <div className='perc'>{props.percentage}</div>
     </div>
   </div>

   );}



function About(props) {

  //  useState using props coming from the parent

  const [language, setLang] = useState(props.language)

  // useEffect to apply / update this comp when props from parent change

  useEffect (() => {
    setLang(props.language);
  },[props.language])


  const about_filt = about_data[language];
  // console.log(about_filt);

  console.log("About Section Logged");

  const [show, doShow] = useState(false);

  const skillsRef = useRef(null);

  useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top;
   //added to reduce redundancy
    const divPos = topPos(skillsRef.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (divPos < scrollPos) {
        doShow(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [skill, setSkill] = useState("F");

  const skills_filt = skills[skill];

  const SkillItems = skills_filt.map(item => <SkillItem name={item.name} percentage={show ? item.percentage : 0} key={item.key}/>)

  //
  //
  // useEffect (() => {
  //
  // },[skill])

  return (


    <div className="About container"  id='About-ID'>
      <img className='avtar' src={profile} alt="img"/>
      <h1 className="section-title">{about_filt.l1} <span>{about_filt.l2}</span></h1>
        <h2>{about_filt.l3}</h2>
      <div className = 'about-inner flex-column'>
        <div className="col-left">
          <p>{about_filt.l4}</p>
        </div>
        <div className="col-right flex-column">
          <div className='skills-filter flex-row'>
            <h5 className={(skill=="F")&&"active"} onClick={()=>setSkill("F")}>Frontend</h5>
            <h5 className={(skill=="B")&&"active"} onClick={()=>setSkill("B")}>Backend</h5>
            <h5 className={(skill=="S")&&"active"} onClick={()=>setSkill("S")}>{(props.language=="EN") ? "Subject-Matter" : "Onderwerp"}</h5>
          </div>
          <div className='skills' ref={skillsRef}>
            {SkillItems}
          </div>
        </div>

      </div>

      <a href='https://www.linkedin.com' target="_blank" rel="noopener noreferrer" type="button" className="cta">{about_filt.bttn}</a>


      <div className='dummy-div' id="Services"> </div>

    </div>

  );
}

export default About;
