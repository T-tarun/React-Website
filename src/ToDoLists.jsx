import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const ToDoLists =() =>{
   return <>
          <div className='main_div'>
              <div className='center_div'>
                    <br/>
                    <h1> ToDO Lists </h1>
                    <input type='text' placeholder='Add a Item'/>
                    <Button className='btn' variant="contained" color="secondary"> <AddIcon/> </Button>
                    <ol>
                        <li> buy apple</li>
                    </ol>
              </div>
          </div>  
   </>

}
export default ToDoLists;