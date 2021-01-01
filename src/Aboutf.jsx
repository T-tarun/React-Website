import React from 'react';
import { NavLink } from 'react-router-dom';
import Web from '../src/Images/S8.jpg';
import Common from './Common';

const Aboutf = ()=>{
return( <>
        <Common 
        name='Welcome to About Page'
        imgsrc={Web}
        visit='/Contact'
        btname='Contact Now'
        />
 </>
 )
}
export default Aboutf;