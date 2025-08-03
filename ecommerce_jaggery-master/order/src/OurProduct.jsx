import React from 'react'
import Navbar4 from './Navbar4'
import Card from './Card'
import Card2 from './Card2'
import Card3 from './Card3'
import './OurProduct.css' 


const OurProduct = () => {
  return (
    <>
      <Navbar4 />
       <div className="card-wrapper">
        <Card />
        <Card2 />
        <Card3 />
      </div>
    </>
  )
}

export default OurProduct
