import React,{useState} from 'react';
import ToDoList from './ToDoList';

const Project = ()=>{
    const[inputlist,setInputList]=useState('');
    const[items,setItems]=useState([]);

    const itemEvent =(event)=>{
        setInputList(event.target.value);

    }
    const listofItems=()=>{
        setItems((oldItem)=>{
            return[...oldItem,inputlist];
        });
        setInputList("");
    };
    const deletItems=(id)=>{
        
        setItems((oldItem)=>{
            return oldItem.filter((arrElem,index)=>{
                return index !== id;
            });
        });
    };
    return <>
            <div className="main_div">
            <div className="center_div">
                <br/>
                <h1> ToDo List </h1>
                <br/>
                <input type="text" placeholder="Add a Items" value={inputlist} onChange={itemEvent}/>
                <button className='btn' onClick={listofItems}> + </button>
                <ol>
                    {/* <li> {inputlist} </li> */}
                    {items.map((itemval,index) => {
                    return <ToDoList 
                    key={index}
                    id={index} 
                    text={itemval}
                    onSelect={deletItems}/>
                    })}
                </ol>
            </div>
            </div>
    </>

}
export default Project;