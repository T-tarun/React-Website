import React,{useState,useEffect} from 'react';

const Effect =()=>{
    const [num,setNum]=useState(0);
    // const [nums,setNums]=useState(0);
  
    useEffect(()=>{
    // alert('I am clicked')
    document.title=`you click me ${num}`;
    });
    return(
        <>
        <button onClick={(()=>{
            setNum(num+1)
        })}>
            click me {num}
        </button>
        <br/>
        </>
    )

}
export default Effect;