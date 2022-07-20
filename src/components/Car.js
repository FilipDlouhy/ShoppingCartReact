import React from 'react'
import {Carimg,Cars} from "./Cars"
import { useParams } from 'react-router-dom'

function Car(props) {



    const {id} = useParams()
  return (
  
    <div className='car'> 
    <div className='car-name'><h1>{Cars[id].name} </h1></div>
    <div className='car-img'> <img src={Carimg[id]}></img></div>
    <div className='car-price'> <p>{Cars[id].price} Kč</p>
    
    <button id={id} className='add-to-cart-btn' onClick={(event)=>{
let id = event.target.id

Cars[id].quantity++

let quantMax=0;
Cars.map(car=>{
  if(car.quantity !== 0){
    quantMax=quantMax +   parseInt(car.quantity)
  }})

props.setQuantity(quantMax)

    }} >ADD TO CART</button>
    </div>
    </div>
   )
}

export default Car