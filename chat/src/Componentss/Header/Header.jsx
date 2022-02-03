import React from "react";
import s from './Header.module.css'

const Header = () => {
    return (
        <>
        <header className={s.header}> 
        <div className={s.img}>
            <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt='user' width='30px'></img>
        </div>

        <div className={s.search}>
        <input placeholder="Start searching" className={s.input}></input>
            <button>search</button>
        </div>
        
        
        
         </header>
        </>
    )
}



export default Header;