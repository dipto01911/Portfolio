// @flow strict

import * as React from 'react';
import './Servics.css';
import theme from '../image/theme.png';
import service from '../assets/services_data';
import Product from './Product';
function Service() {
    return (
        <div className='services' id='services'>
            <div className='service-title'>
            <h1>My Services</h1>
            <img src={theme} alt=''/>
            </div>
            <div className='services-container'>
             {
                service.map(pt => <Product pt={pt}></Product>)
             }
            </div>
        </div>
        
    );
};

export default Service;