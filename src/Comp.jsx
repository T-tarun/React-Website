import React, { createContext } from 'react';
import CompA from './CompA';

const Fname = createContext();
const Lname = createContext();

const Comp = () =>{
return <>
        <Fname.Provider value={'Tarun Kumar'}>
            <Lname.Provider value={'ji'}>
            <CompA/>
            </Lname.Provider>
        </Fname.Provider>
        </>
}
export default Comp;
export {Fname,Lname};