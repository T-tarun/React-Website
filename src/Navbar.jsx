import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar =()=>{
    return <>
    <div className='menu_style'>
            <NavLink exact activeClassName='active_class' to='/' >  About US /Home Page </NavLink>
            <NavLink activeClassName='active_class' to='/contact' > Contact US </NavLink>
            <NavLink activeClassName='active_class' to='/search' > Search </NavLink>
            <NavLink activeClassName='active_class' to='/service' > Service </NavLink>
            <NavLink activeClassName='active_class' to='/user/:fname/:lname' > User </NavLink>
            </div>
<br/>
                <a href='/'> AboutUS </a>
                <a href='/contact'> ContactUS </a>
                
            </>
}
export default Navbar;