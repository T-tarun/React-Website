import React,{useContext} from 'react';
import { Fname,Lname } from './Comp';

const CompB = () =>{
    const fname =useContext(Fname);
    const lname =useContext(Lname);
 return <>
        <h1> hello {fname} {lname} </h1>
    {/* <Fname.Consumer>
        {(fname) =>{
         return (
             <Lname.Consumer>
                 {(lname)=>{
                   return  <h1> hello {fname} {lname} </h1>
                 }}
             </Lname.Consumer>
         )   
        }}
    </Fname.Consumer> */}
    </>
}
export default CompB;