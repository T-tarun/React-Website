import React,{useState} from 'react';
import Para from './Para';


const App=() =>{
    const [visible, setvisible]= useState(true)
    const state = useState();
    const [count, setcount]= useState(0);
    const clk = () => {
                  setcount(count + 1);
                  setvisible(!visible);
                  
                }
                const newTime=new Date().toLocaleTimeString()
                console.log(typeof newTime);

 return(   
     <div>
   { (count%2==0) && <h1> {count} </h1> }
 <h1>{newTime}</h1>
     <button className='btn' onClick={clk}> Click me </button>
 {
visible && <Para/>
  }
    </div>
 )
};

  export default App ;

