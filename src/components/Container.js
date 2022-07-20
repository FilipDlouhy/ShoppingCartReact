import React, { useState } from 'react'
import cart from '../cart.svg'
import Home from './Home'
import Shop from './Shop'
import {Carimg,Cars} from "./Cars"
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Contact from './Contact'
import Car from './Car'
import CartItem from './CartItem'
import { isEditable } from '@testing-library/user-event/dist/utils'
function Container() {


const [show,setShow] = useState(false)
const [total,setTotal] = useState(0)
const [quantity,setQuantity] = useState(0)

const [carQuantity,setCarQuantity] = useState(0)
function increment (event){
  let index = event.target.id

setCarQuantity(carQuantity+1)  
}

function showMenu(){
 
  let items = document.querySelector(".items")

setShow(!show)

let quantMax=0;
let max=0;;Cars.map(car=>{if(car.quantity !== 0){max= max + parseInt(car.price * car.quantity); setTotal()}})
Cars.map(car=>{
  if(car.quantity !== 0){
    quantMax=quantMax +   parseInt(car.quantity)
  }



setQuantity(quantMax)
  console.log(max)
})
items.innerHTML = " ";

Cars.map(car=>
{

  if(car.quantity>0)
{

  items.innerHTML += 
  `<div class='item'>
    <img src=${car.img} ></img>
    <p> ${car.name}</p>
    <button class="increment" id=${car.id}  >+</button>
    <p>${car.price} Kč </p>
    <button class="decrement"  id=${car.id} >-</button>
    <p class=quantity${car.id}> Quantity ${car.quantity} </p>
  </div> `

}
})
let incetment =document.querySelectorAll(".increment")
incetment.forEach((button)=>{button.addEventListener("click",(event)=>{  Cars[event.target.id].quantity++ ;let quant =document.querySelector( `.quantity${event.target.id}`);quant.innerHTML=`Quantity ${Cars[event.target.id].quantity}`;let max=0;;Cars.map(car=>{if(car.quantity !== 0){max= max + parseInt(car.price * car.quantity); setTotal(max)}}) })});
let decrement =document.querySelectorAll(".decrement")
decrement.forEach((button)=>{button.addEventListener("click",(event)=>{ 
  if( Cars[event.target.id].quantity!==0)
   {Cars[event.target.id].quantity-- ;
   let quant =document.querySelector( `.quantity${event.target.id}`);
   quant.innerHTML=`Quantity ${Cars[event.target.id].quantity}`;
   let max=0;
   ;Cars.map(car=>{if(car.quantity !== 0){max= max + parseInt(car.price * car.quantity);
     setTotal(max)}}) }})});



setTotal(max)
}


  return (
<Router><div className='container '> 
    <nav>
      <div className='logo-text'><Link to="/">Superbus E-shop</Link></div>
    <ul>
    <li><Link to="/">Home</Link></li>
        <li><Link  to="/shop">Cars</Link></li>
        <li><Link  to="/contact">Contact</Link></li>
    </ul>
     <div className='shop-logo'> {quantity} <img onClick={showMenu} src={cart}></img></div>
    </nav>
    

<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/shop' element={<Shop />} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/car/:id' element={<Car quantity={quantity}  setQuantity={setQuantity} />} />
</Routes>



<div className={ show ? "backgorund" : "backgoasdoas"}>
</div>
<div className={ show ? "shopping-cart" : 'cartNONE'}>
  <h1> Your shopping cart <span onClick={showMenu}>X</span></h1>
  <div className='items'>
  

      
  </div>
  
 
  
  <div className='text-cart-footer'>
  <p className='price'>Total price {total} Kč:</p>
  <button className='pay-btn'> Pay</button>
  </div>
 
 </div>

</div>
</Router>


 
    
    
  )
}

export default Container
 
/*

<div key={item.id} className='item'>
      <img src={item.img} ></img>
      <p> {item.name} </p>
      <button id={item.id} onClick={(event)=>{
        Cars[event.target.id].quantity++
      }} >+</button>
      <p>{item.price} Kč </p>
      <button  id={item.id}onClick={(event)=>{
        if(item.quantity <0 ){
          console.log("niet")
        }else{
          Cars[event.target.id].quantity--
        }
      
      }} >-</button>
      <p> Quantity {Cars[index].quantity}</p>
    </div>

    
    }) */