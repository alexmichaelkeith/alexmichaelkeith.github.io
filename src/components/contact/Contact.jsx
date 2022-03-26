import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import {Mail, LinkedIn} from "@material-ui/icons"
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import "./contact.scss";

export default function Contact() {

  const {message,setMessage} = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)

  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [emailSent, setEmailSent] = useState(false);



  const submit = () => {
    if (name && email && body) {
        const serviceId = process.env.REACT_APP_EmailJS_Service_ID;
        const templateId = process.env.REACT_APP_EmailJS_Template_ID;
        const userId = process.env.REACT_APP_EmailJS_User_ID;
        const templateParams = {
            name,
            email,
            body
        };

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => console.log(response))
            .then(error => console.log(error));

        setName('');
        setEmail('');
        setBody('');
        setEmailSent(true);
        setMessage(true)

    } else {
        alert('Please fill out all fields.');
    }
  }


  return (
    <div className="contact" id="contact">
      <div className="left">
        
        <LinkedIn className="icon"/>
        <GitHubIcon className="icon"/>
        <LinkedIn className="icon"/>
        <LinkedIn className="icon"/>

      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
          <input type="text" placeholder="Your Email Address" value={email} onChange={e => setEmail(e.target.value)} />
          <textarea placeholder="Your Message" value={body} onChange={e => setBody(e.target.value)}></textarea>
          <button type="submit" onClick={submit}>Send Email</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
