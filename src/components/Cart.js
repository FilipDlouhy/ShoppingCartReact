import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
function Cart(props) {
  
  return (
    <Link id={props.id} to={`/car/${props.id}` }  className='cart'>
       <img src={props.img}></img>
       <h1> {props.title}</h1>
       <p>{props.price} Kč</p>
    </Link>
  )
}

export default Cart