import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import Service from './Service';
import User from './User';
import Search from './Search';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Routing =()=> {
return(
    <>
    <br/>
    <Navbar/>
    <br/>
    <br/>
     <Switch>
        <Route exact path='/' render={()=> <About name='about'/>}/>
        <Route exact path='/Service' component={Service}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/search' component={Search}/>
        <Route path='/User/:fname/:lname' component={User}/>
        {/* <Route component={Error} />  */}
        <Redirect to='/'/>
     </Switch>
        {/* <About/>
        <Contact/> */}
    </>
    );
}
export default Routing;