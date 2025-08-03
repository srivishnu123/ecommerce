
import React from "react"
import './OrderForm.css'
function OrderForm()
{
    return(
        <>
        <form className="order-form">
  <input type="text" name="name" placeholder="Name"  required />
  <input type="email" name="email" placeholder="Email"  required />
  <input type="tel" name="phone" placeholder="Phone Number"  required />
  <textarea name="address" placeholder="Address" required />

  <label>White Jaggery (₹100/kg)</label>
  <input
    type="number"
    name="whiteJaggery"
    placeholder="Enter quantity in kg"
 
  />

  <label>Black Jaggery (₹100/kg)</label>
  <input
    type="number"
    name="blackJaggery"
    placeholder="Enter quantity in kg"
  
  />

  <label>White Panakam (₹100/kg)</label>
  <input
    type="number"
    name="panakam"
    placeholder="Enter quantity in kg"
  
  />

  <label>Payment Mode</label>
  <select name="paymentMode" >
    <option>Cash on Delivery</option>
    <option>UPI</option>
    <option>Card Payment</option>
  </select>

  <div className="total">Total Amount:</div>

  <button type="submit">Submit Order</button>
</form>
        </>
    )
}
export default OrderForm

