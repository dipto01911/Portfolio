// @flow strict

import * as React from 'react';
import log from '../image/log.jpeg';
import './Navbar.css';
import logo from '../assets/nav_underline.svg';
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import  menu_open from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg';
import { useRef } from 'react';
function Navbar() {
    const [menu,setmenu]=useState('home');
    const menuRef=useRef();
    const openMenu=()=>{
       menuRef.current.style.right='0';
    }
    const closeMenu=()=>{
        menuRef.current.style.right='-350px';
    }
    return (
        <div className='navbar'>
            <img src={log} alt='' id='img'/>
            <img src={menu_open} alt='' className='nav-open' onClick={openMenu}/>
            <ul className='nav-menu' ref={menuRef}>
                <img src={menu_close} alt='' className='nav-close'
                onClick={closeMenu}/>
                 <li><AnchorLink className='anchor-link' href='#hero'><p onClick={()=>setmenu('home')}>Home</p></AnchorLink>{menu ==='home'? <img src={logo} alt=''/>:<></>}</li>
               <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setmenu('Aboutme')}>About me</p></AnchorLink>{menu ==='Aboutme'? <img src={logo} alt=''/>:<></>}</li>
               <li><AnchorLink className='anchor-link' offset={50}  href='#services'><p onClick={()=>setmenu('Service')}>Service</p></AnchorLink>{menu ==='Service'? <img src={logo} alt=''/>:<></>}</li>
               <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setmenu('Portfolio')}>Portfolio</p></AnchorLink>{menu ==='Portfolio'? <img src={logo} alt=''/>:<></>}</li>
               <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setmenu('Contact')}>Contact</p></AnchorLink>{menu ==='Contact'? <img src={logo} alt=''/>:<></>}</li>
     </ul>
        <div className='nav-connect'>
       <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink> 
        </div>
        </div>
    );
};

export default Navbar;