import React from "react";
import s from './Sidebar.module.css';


const Sidebar =() => {
return(
    
    <div className={s.sidebar}>
  <h5>Chats</h5>

<div className={s.messages}>
  <a href='#'>message</a>
</div>

    </div>
    
)
}


export default Sidebar;