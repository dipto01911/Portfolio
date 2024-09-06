// @flow strict

import * as React from 'react';
import icon from "../assets/arrow_icon.svg";
import './Product.css'
function Product(props) {
    const pt=props.pt;
    return (
        <div className='product'>
            <h3>{pt.s_no}</h3>
            <h2>{pt.s_name}</h2>
            <p>{pt.s_desc}</p>

            <div className='product1'>
                <p id='pro'>Read more</p>
                <img src={icon} alt=''/>
            </div>

        </div>
    );
};

export default Product;