import React from 'react';
import { NavLink } from 'react-router-dom';

const Error=()=>{
        return<>
        <div className='main_div'>
                <h1> 404 Error page </h1>
                <p> Sorry, This page is not valid </p>
                <NavLink to='/'> Go Back </NavLink>
        </div>
              </>
}
export default Error;
