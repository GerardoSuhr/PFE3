
import React from 'react'
import styles from './card.module.css'


function Card({ piloto, equipo }) {
       return (
        <div className={styles.card}>
           <div>Has elegido como piloto a {piloto}.</div>
           <div>Has elegido el quipo {equipo}.</div>
        </div>
  
    )
  }

export default Card