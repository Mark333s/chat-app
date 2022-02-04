import React from "react";
import s from './../Velazquez.module.css'


const Messages =(props)=>{
    return     <div className={s.text}> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLjRDrylE_ZBdMzZ_cO8nO8sYFXFFYjOPlQ&usqp=CAU' alt='girl' ></img>
    {props.text}
    <div className={s.data}>{props.data}</div>
</div>
}




export default Messages;