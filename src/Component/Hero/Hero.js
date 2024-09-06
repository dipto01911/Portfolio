// @flow strict

import * as React from 'react';
import './Hero.css';
import profile from'../image/logo.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
function Hero() {
    return (
        <div className='hero' id='hero'>
            <img src={profile} alt='' id='img'/>
            <h1><span>I'm Dipto Ghosh,</span> frontend developer in Bangladsh.</h1>
            
        <p>i am a frontend devoloper from Khulna,Bangladesh.i am a fresher graduate from Islamic University,Kustia</p>

        <div className='hero-action'>
       <div className='hero-connect'><AnchorLink className='anchor-link' href='#contact'>Connect with me</AnchorLink> </div>
       <div className='hero-resume'>My resume</div>
</div>

        </div>
    );
};

export default Hero;