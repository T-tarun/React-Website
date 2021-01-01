import React from 'react';
import Homie from './Images/Homie.jpg';

const Header =() =>{
    return <>
            <div>
            <img src={Homie} alt='logo' height='50' width='70'/>
            <h1> Homie back </h1>
            </div>
            </>
}
export default Header;