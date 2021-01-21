import React from 'react'
import style from "./Burger.module.css"

let Burger = (props) => {
    return (
      <div className={style.burger_container}>
        <div className={style.burger_line}></div>
        <div className={style.burger_line}></div>
        <div className={style.burger_line}></div>
      </div>
    )
}

export default Burger