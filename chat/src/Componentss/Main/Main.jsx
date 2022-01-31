import React from "react";
import s from './Main.module.css';


const Main =() => {
    return (
        <>
        <div className={s.main}>
        <div className={s.user}>
            <img src='https://www.fotoprizer.ru/img/061017-064505-ft.jpg' alt='girl' ></img> 
            <h5>Josefina</h5>
        </div>


<div className={s.yourMessage}>
    <input type='text'></input>
    <button>send</button>
</div>


        </div>
        </>
    )
}



export default Main;