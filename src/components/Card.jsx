import React from 'react'
import style from '../style.module.css'

function Card({ name , band}) {
  return (
    <div className={style.card} >
      Hola {name}!
      <p>Sabemos que tu banda favorita es:</p>
      <span className={style.span}>{band}</span>
    </div>
  )
}
export default Card