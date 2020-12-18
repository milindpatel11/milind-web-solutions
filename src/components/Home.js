import '../css/Home.css';
import { useState, useEffect } from 'react';
// import pic from '../img/home.jpg'; // gives image path
const home_data =  {"EN" : {"l1": "Elegant, fast and mobile friendly sites", "l2":"for your personal and business needs", "l3":"to get your sh*t done", "bttn1":"Portfolio", "bttn2":"Services"} ,
   "NL" : {"l1": "Elegante, snelle en mobielvriendelijke sites", "l2":"voor uw persoonlijke en zakelijke behoeften", "l3":"om je sh*t gedaan te krijgen", "bttn1":"Portefeuille", "bttn2":"Diensten"}}

function Home(props) {

  //  useState using props coming from the parent

  const [language, setLang] = useState(props.language)

  // useEffect to apply / update this comp when props from parent change

  useEffect (() => {
    setLang(props.language);
  },[props.language])


  const home_filt = home_data[language];


  return (

    <div className="Home container"  id='Home'>

        <div className="intro flex-column">
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
