import React from 'react';
import { useParams,useLocation, useHistory} from 'react-router-dom';

const User =()=>{
    const {fname , lname}=useParams();
    const locatiom=useLocation();
    const history=useHistory();
    return <>
         <h1> I am {fname} {lname}  </h1>
         <p> My location is {locatiom.pathname} </p>
         {locatiom.pathname ===`/user/Deepak/Don` ? (
        <button onClick={()=>{history.push('/')}}> Home Page </button>
         ): null}
    </>
}
export default User;