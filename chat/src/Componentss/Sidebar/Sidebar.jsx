import React from "react";
import s from './Sidebar.module.css';
import { NavLink } from "react-router-dom";


const Sidebar =() => {
return(
    
    <div className={s.sidebar}>
  <h5>Chats</h5>

  <div className={s.messages}>

  <div className={s.item}><NavLink to='/Josefina'>Josefina</NavLink></div>
  <div className={s.item}><NavLink to='/Alica'>Alica</NavLink></div>
  <div className={s.item}><NavLink to='/Velazquez'>Velazquez</NavLink></div>

</div>
    </div>
    
)
}


export default Sidebar;