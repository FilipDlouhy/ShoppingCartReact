import React from 'react'
import Instagram from './img/Instagram.png'
import Facebook from './img/Facebook.png'
import Twitter from './img/Twitter.png'
import Github from './img/Github.png'
function Contact() {
  return (
    <div className='contact'>
      <div className='logos'>
        <img src={Instagram}>
        </img>
        <img src={Facebook}>
        </img>
        <img src={Twitter}>
        </img>
        <img src={Github}>
        </img>
      </div>

<h1 className='adresss'>Adress: Superbus E-shop, Prague 4,Black bridge 1212</h1>

    </div>
  )
}

export default Contact