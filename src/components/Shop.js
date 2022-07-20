import React from 'react'
import {Carimg,Cars} from "./Cars"
import Cart from './Cart'
import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
function Shop( props) {
    const [filter,setFilter] = useState("all")
  return (
    <div className='shop'>
        <div className='filter'>
            <h1> <span>Cars</span>/All</h1>
            <ul>
                <li onClick={()=>{setFilter("Superb")}}>Superb</li>
                <li onClick={()=>{setFilter("Octavia")}}>Octavia</li>
                <li onClick={()=>{setFilter("Rapid")}}>Rapid</li>
                <li onClick={()=>{setFilter("Fabia")}}>Fabia</li>
                <li onClick={()=>{setFilter("Legend")}}>Legend</li>
                <li onClick={()=>{setFilter("all")}}>All</li>
            </ul>
        </div>

        <div className='cars'>
    { Cars.map((car,index)=>{
if(filter === "all"){
    return<Cart key={index} function={props.function} id={car.id} img={Carimg[index]} title={car.name} price= {car.price}></Cart>
}else{
    if(car.type===filter){
         return<Cart key={index} onClick={props.function} id={car.id} img={Carimg[index]} title={car.name} price= {car.price}></Cart>
    }
}



   

    }) }

        </div>

    </div>
  )
}

export default Shop