import React from "react";
import s from './../Josefina.module.css'


const Messages =(props)=>{
    return     <div className={s.text}> <img src='https://www.fotoprizer.ru/img/061017-064505-ft.jpg' alt='girl' ></img> 
    {props.text}
    <div className={s.data}>{props.data}</div>
    </div> 
}




export default Messages;