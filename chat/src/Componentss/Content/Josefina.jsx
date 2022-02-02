import React from "react";
import s from './Josefina.module.css';


const Josefina =() => {
    return (
        <>
        <div className={s.main}>
        <div className={s.user}>
            <img src='https://www.fotoprizer.ru/img/061017-064505-ft.jpg' alt='girl' ></img> 
            <h5>Josefina</h5>
        </div>

        <div className={s.text}>
            Hello!
        </div>


<div className={s.yourMessage}>
    <input type='text'></input>
    <button>send</button>
</div>


        </div>
        </>
    )
}



export default Josefina;