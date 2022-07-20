import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
function Home() {
  return (
    <div className='home' >
        <div className='what-we-are'>
            We are largest and greatest shop in the world for the best car brand ŠKODA
        </div>

        <button className='home-button'><Link  to="/shop">Shop for your new ŠKODA</Link></button>
    </div>
  )
}

export default Home