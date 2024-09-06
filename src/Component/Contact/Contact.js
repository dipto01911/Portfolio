// @flow strict

import * as React from 'react';
import './Contact.css';
import theme from'../image/theme.png';
import mail_icon from '../assets/mail_icon.svg';
import phone from "../assets/call_icon.svg";
import location from "../assets/location_icon.svg";

function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "1b046c5f-9bc8-4328-89b9-0a63175173d3");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
    }

    return (
        <div className='contact' id='contact'>
            <div className='contact-title'>
 <h1>Get in touch</h1>
 <img src={theme} alt=''/>
            </div>
            
            <div className='contact-section'>

               <div className='contact-left'>
              <h1>Let's talk</h1>
              <p>I'm currently avaiable to take on new project. I will try my best to fullfill all 
                requirement of clinet</p>

<div className='contact-details'>
<div className='contact-detail'>
    <img src={mail_icon} alt=''/>
    <p>diptoghosh01911@gmail.com</p>
    </div> 
 <div className='contact-detail'>
    <img src={phone} alt=''/>
    <p>01911833591</p>
 </div>

 <div className='contact-detail'>
    <img src={location} alt=''/>
    <p>Kustia,Bangladesh</p>
 </div>
           </div>

               </div>
             <div>
               <form className='contact-right' onSubmit={onSubmit}>
           <label for='name'>Your name</label>
           <input type='text' placeholder='Enter name' name='name'/>
           <label for='email'>Your Email</label>
           <input type='text' placeholder='Enter email' name='email'/>
           <label for='message'>Write your message</label>
            <textarea name='message' placeholder='Enter text'>
          
            </textarea>
            <button className='contact-submit' type='submit' onSubmit={onSubmit} >Submit</button>
               </form>
</div>
            </div>
            
        </div>
    );
};

export default Contact;