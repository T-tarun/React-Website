import React,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Clock from 'react-digital-clock';

const New =()=>{
    const[num,setNum]=useState(0);

    const incNum=()=>{
        setNum(num+1);
    }
    const decNum=()=>{
        if(num>0){
        setNum(num-1);
    }else   
        {
            window.alert("you fuckinn don't cross your limits")
            setNum(0);
        }
    }
return(
    <>
    <Clock/>
    <div className='main_div'>
        <div className='center_div'>
            <h1> {num} </h1>
            <div>
                <Tooltip title="Add">
                <Button onClick={incNum} className='btn'> <AddIcon/> </Button>
                </Tooltip>  
                <Tooltip title="Delete">
                <Button className='btn' onClick={decNum}> <DeleteIcon/> </Button>
                </Tooltip>
            </div>
        </div>

    </div>
    </>
)
}
export default New;
