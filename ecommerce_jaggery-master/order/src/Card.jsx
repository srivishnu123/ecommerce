import React from "react"
import "./Card.css"
import CR from './assets/cheruku-panakam.webp'
import { useNavigate} from 'react-router-dom'


function Card(props)   
{
    let navigate=useNavigate()
    function order()
    {
        console.log("dslkfjsd")
       navigate('/orderhere')
    }
    
    console.log(props)
    
    return(
        <>
        <div className="product-card">
        <img src={CR} alt="Product 1" className="product-image" />
        <h3 className="product-name">{props.name}panakammm</h3>
        <p className="product-price">₹{props.price} 100 kg</p>
        <button className="order-button" onClick={()=>{order()}}>Order Now</button>
      </div>
        </>
    )
}
export default Card
