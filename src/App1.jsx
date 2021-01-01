import React,{useState} from "react";


const App1 =() =>{
    const purple="#8e44ad"
    const [bg,setbg]=useState(purple);
    const[name,setName]= useState("Click Me");
    const bgChange = ()=>{
      let newBg ="#34495e";
      setbg(newBg);
      setName("oops");
    }


    return(
        <div style={{backgroundColor:bg}}>
        <button className="btn" onClick={bgChange}> {name}</button>
        </div>
    )


}
 export default App1;