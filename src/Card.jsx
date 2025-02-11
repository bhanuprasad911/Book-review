import React from 'react'
import './styles/Card.css'

function Card(props) {
  return (
    <div className="card">
        <div className="card-body">
            <div className="card-image">

            <img src={props.img} alt="book image"/>
            </div>
            <h5 className="card-title">{props.title}</h5>
            {props.children}
        </div>
    </div>
  )
}

export default Card
