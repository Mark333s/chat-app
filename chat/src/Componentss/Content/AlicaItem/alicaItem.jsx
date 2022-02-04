import React from "react";
import s from './../Alica.module.css'


const Messages =(props)=>{
    return     <div className={s.text}> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ups0cNsdCkLhITh9cR-zXWRlEZIxNF-W3g&usqp=CAU' alt='girl' ></img> 
    {props.text}
    <div className={s.data}>{props.data}</div>
    </div> 
}




export default Messages;