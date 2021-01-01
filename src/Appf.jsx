import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Homef from './Homef';
import Aboutf from './Aboutf';
import Contactf from './Contactf';
import Servicef from './Servicef';
import Navbarf from './Navbarf';
import Footer from './Footer';

const Appf = ()=>{
return( <>
<Navbarf/>
<Switch>
    <Route exact path='/' component={Homef}/>
    <Route exact path='/About' component={Aboutf}/>
    <Route exact path='/Service' component={Servicef}/>
    <Route exact path='/Contact' component={Contactf}/>
    <Redirect to='/'/>
</Switch>
<Footer/>
 </>
 )
}
export default Appf;