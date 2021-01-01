import React from 'react'

function Card(props){
    console.log(props);
    return (
        <>
         <h1 className='heading_style'> List of top 5 web series</h1>
           <div className = 'cards'>
            <div className='card'>
                < img src = {props.imgsrc} alt ='my pic' className='card__img'/>
                < div className= 'card_info'>
                    <span className='card_categary'>{props.title} </span>
                    <h3 className='card_title'> {props.sname} </h3>
                    <a href ={props.link} target='blannk'>
                        <button className="btn">Watch now</button>
                        </a>
                        </ div>
                        </div>
                        </div>
                        </>

    );
}
export default Card;