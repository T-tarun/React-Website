import React from 'react';

const Footer = () =>{
    const year = new Date().getFullYear();
    return<>
           <footer className='w-100 bg-light text-center'>
               <p> Ⓒ {year} Deepak Don | Terms and Condition | Happy New Year</p>
           </footer>
        </> 
}
export default Footer;