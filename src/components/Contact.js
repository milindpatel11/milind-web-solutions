import '../css/Contact.css';
import { useState, useEffect } from 'react';
import twitter from "../icons/twitter.png";
import insta from "../icons/instagram.png";
import linkedin from "../icons/linkedin.png";


const contact_data =  {"EN" : {"l1": "Contact", "l2":"Us", "name":"Your Name:" , "email":"Your Email:", "message":"Your Message:", "bttn":"Send"} ,
   "NL" : {"l1": "Contacteer", "l2":"Ons", "name":"Uw naam:" , "email":"Jouw Email:", "message":"Jouw Bericht:", "bttn":"Sturen"}}

// const social_data = [ {"key":1 , "icon":twitter, "handle":'@electsmartUS', "link":'https://twitter.com/electsmartUS'} ,
//   {"key":2 , "icon": insta, "handle":'@electsmart.us', "link":'https://www.instagram.com/electsmart.us/'},
//   {"key":3 , "icon": linkedin, "handle":'@electsmartUS', "link":'https://www.linkedin.com/company/electsmart-us/'} ]
//



function Contact(props) {

  //  useState using props coming from the parent

  const [language, setLang] = useState(props.language)

  // useEffect to apply / update this comp when props from parent change

  useEffect (() => {
    setLang(props.language);
  },[props.language])


  const contact_filt = contact_data[language];


  // return the div with new/ updated props data


  return (

    <div className="Contact container"  id='About-ID'>

      <h1 className="section-title">{contact_filt.l1} <span>{contact_filt.l2}</span></h1>


        <div className="contact-right flex-column">
          <form className="contact-form" name="contact" method="POST">
            <input type="hidden" name="form-name" value="contact" />
            <p> <label> {contact_filt.name} <input type="text" name="name" /></label></p>
            <p> <label> {contact_filt.email} <input type="email" name="email" /></label></p>
            <p><label>{contact_filt.message} <textarea name="message"></textarea></label> </p>
            <p><button type="submit">{contact_filt.bttn}</button></p>
          </form>
        </div>


    </div>

  );
}

export default Contact;
