import React from "react";
import s from './Alica.module.css';
import Messages from "./AlicaItem/alicaItem";





const Alica =(props) => {
    let messagesData =[ {
  id: 1,
  text: 'How are you?',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ups0cNsdCkLhITh9cR-zXWRlEZIxNF-W3g&usqp=CAU',
  data: '03/02/2022 , 14:10' 
    }, 
    
   {
        id: 2,
    text: 'Tell me something new.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ups0cNsdCkLhITh9cR-zXWRlEZIxNF-W3g&usqp=CAU',
    data: '03/02/2022 , 14:25' 
      },

     { id: 3,
      text: 'eyy',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ups0cNsdCkLhITh9cR-zXWRlEZIxNF-W3g&usqp=CAU',
      data: '03/02/2022 , 14:30' 
        }
    ]

    let messagesElements =  messagesData 
    .map(message=>  <Messages  src={message.img}    text={message.text} data={message.data}   />,)
   
    return (

      
        <>
        <div className={s.main}>
        <div className={s.user}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ups0cNsdCkLhITh9cR-zXWRlEZIxNF-W3g&usqp=CAU' alt='girl' ></img> 
            <h5>Alica</h5>
        </div>

        <div className={s.texts}>
            {messagesElements}
        
        </div>


<div className={s.yourMessage}>
<input placeholder="Type your message" className={s.input}></input>
    <button><img src='data:image/png;base64,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' className={s.plane}></img></button>
</div>


        </div>
        </>
    )
}



export default Alica;