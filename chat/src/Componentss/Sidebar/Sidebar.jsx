import React from "react";
import s from './Sidebar.module.css';


const Sidebar =() => {
return(
    
    <div className={s.sidebar}>
  <h5>Chats</h5>

  <div className={s.messages}>

  <div className={s.item}><a href='/Josefina'>Josefina</a></div>
  <div className={s.item}><a href='/Alica'>Alica</a></div>
  <div className={s.item}><a href='/Velazquez'>Velazquez</a></div>

</div>
    </div>
    
)
}


export default Sidebar;