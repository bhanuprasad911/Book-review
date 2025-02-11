import React from 'react'
import styles from "./styles/Smallcard.module.css"

function Smallcard(props) {
  return (
    <>
    <div className={styles.card}>
        <div className={styles.cardbody}>
            <div className={styles.cardimg}>
                <img className={styles.img} src={props.img} alt="image"/>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Smallcard
