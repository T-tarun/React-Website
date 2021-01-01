import React,{useState} from 'react';

const App2 =() =>{
    const[fullname,setFullName]=useState({
        fname:'',
        lname:'',
        email:'',
        phone:'',
    });

    const inputEvent =(event) =>{
        console.log(event.target.value);
        console.log(event.target.name);

        const{value,name}=event.target;

        setFullName((preValue)=>{
            console.log(preValue);

            return{
                ...preValue,
                [name]:value,
            }
        // if(name==='fname'){
        //     return{
        //         fname:value,
        //         lname:preValue.lname,
        //         email:preValue.email,
        //         phone:preValue.phone,
        //     }
        // }else if(name==='lname'){
        //     return{
        //         fname:preValue.fname,
        //         lname:value,
        //         email:preValue.email,
        //         phone:preValue.phone,
        //     }
        // }
        // else if(name==='phone'){
        //     return{
        //         fname:preValue.fname,
        //         lname:preValue.lname,
        //         email:preValue.email,
        //         phone:value,
        //     }
        // }
        // else if(name==='email'){
        //     return{
        //         fname:preValue.fname,
        //         lname:preValue.lname,
        //         email:value,
        //         phone:preValue.phone,
        //     }
        // }

        });
    }
const onSubmit =(event)=>{
    event.preventDefault();
    alert('form submitted');
    // setFullName('')
}

    
    
    return(
            <>
            <h1>Hello {fullname.fname} {fullname.lname} </h1>
            <p>{fullname.email}</p>
            <p>{fullname.phone}</p>
            <p>{fullname.nickname}</p>
            <input type='text' placeholder='Enter Your Name'
            name='fname'
            onChange={inputEvent} 
            value={fullname.fname}/>
            <br/>
             {/* <h1>Hello {lastnme}</h1> */}
            <input type='text' placeholder='Enter Your Last Name'
            name='lname'
            onChange={inputEvent} 
            value={fullname.lname}/>

            <input type='email' placeholder='Enter Your email'
            name='email'
            onChange={inputEvent} 
            value={fullname.email}
            />

            <input type='phone' placeholder='Enter Your Phone Number'
            name='phone'
            onChange={inputEvent} 
            value={fullname.phone}/>
            
            <input type='nickname' placeholder='Enter Your Nick Name'
            name='nickname'
            onChange={inputEvent} 
            value={fullname.nickname}/> 

            <button className='btn' onClick={onSubmit}> Click Me </button>
            </>
    );

}
export default App2;