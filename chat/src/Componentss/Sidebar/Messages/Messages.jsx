import React from "react";
import s from './Messages.module.css'



const Messages =()=>{
    
    return (
        <div className={s.dialogs}>
        
<div className={s.messages}>
  <a href='/message1'>message</a>
  <a href='/message2'>message</a>
  <a href='/message3'>message</a>

</div>
        
        </div>
    )
}

export default Messages;