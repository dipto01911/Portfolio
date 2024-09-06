// @flow strict

import * as React from 'react';
import './Footer.css';
import icon from '../assets/user_icon.svg';
function Footer() {
    return (
        <div className='footer'>
            <div className='footer-top'>
             <div className='footer-top-left'>
         
         <h1>Dipto</h1>
         <p>I am a frontend devoloper. i am a fresher graduate with no expreience</p>

         </div>
         
         <div className='footer-top-right'>
              <div className='footer-email-input'>
              <img src={icon} alt=''/>
              <input type='text' placeholder='Enter your email'/>
              </div>

              <div className='footer-subscribe'>Subscribe</div>
            </div>

              </div> 
            <hr/>

            <div className='footer-bottom'>
            <p className='footer-bottom-left'>@ 2024 Dipto Ghosh.All rights </p>
          <div className='footer-bottom-right'>
            <p>Term of Services</p>
            <p>Privacy policy</p>
            <p>connect with me</p>
          </div>
            
            </div>
        </div>
    );
};

export default Footer;