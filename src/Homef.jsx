import React from 'react';
import { NavLink } from 'react-router-dom';
import Web from '../src/Images/S7.jpg';
import Common from './Common';

const Homef = ()=>{
return( <>
        <Common 
        name='Grow your business with'
        imgsrc={Web}
        visit='/Service'
        btname='Get Started'
        />
 </>
 )
}
export default Homef;