import React from "react";
import s from './Messages.module.css'
import { NavLink } from "react-router-dom";



const Messages =(props)=>{
    
    return (
        <div className={s.dialogs}>
        
<div className={s.messages}>
  <NavLink to='/message1'>message</NavLink>
  <NavLink to='/message2'>message</NavLink>
  <NavLink to='/message3'>message</NavLink>

</div>
        
        </div>
    )
}

export default Messages;