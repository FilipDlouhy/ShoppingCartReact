import React from 'react'
import {Carimg,Cars} from "./Cars"
import { useEffect } from 'react'
import { useState } from 'react'

function CartItem(props) {

   
    function add(event)  {
        
        Cars[event.target.id].quantity++

      }
      function minus(event){
        if(props.quantity <0 ){
          console.log("niet")
        }else{
          
          Cars[event.target.id].quantity--
       
        }}


}

export default CartItem