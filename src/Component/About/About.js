// @flow strict

import * as React from 'react';
import './About.css';
import image from '../image/logo.jpg';
function About() {
    return (
        <div className='about' id='about'>

         <div className='about-title'>
            <h1>About me</h1>
            </div>  

            <div className='about-section'>

                <div className='about-left'>
               <img src={image} alt='' id='image'/>
                </div>
         <div className='about-right'>
            
           <div className='about-paragraph'>
            <p>i am a fresher graduate from Islamic University,Kustia.I had recently finish my graduation in  Department of Computer Science and Engineering from Iu.</p>
            <p>i have dream to built my carrier in web development.I enjoy very much in this field</p>
           </div>

           <div className='about-skills'>
           <div className='about-skill'><p>HTML&CSS</p><hr style={{width:"70%"}}/></div> 
           <div className='about-skill'><p>Javascript</p><hr style={{width:"50%"}}/></div> 
           <div className='about-skill'><p>React</p><hr style={{width:"60%"}}/></div> 
           <div className='about-skill'><p>Mongodb</p><hr style={{width:"40%"}}/></div> 
           </div>

         </div>

            </div>

        </div>
    );
};

export default About;