import React, { useEffect, useState } from 'react';

import Empty_Cart_State from '../../../assets/images/Empty_Cart_State.png'

import { ApiEndPoint } from '../../../Api/Api_Calls'
import { useAuthContext } from '../../auth/context/AuthContext';
import { useCartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
function Cart() {
  const { state: { cart }, dispatch, qtyData, setQtyData } = useCartContext();
  const { login, setLogin, role } = useAuthContext();
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate()
  useEffect(() => {
    console.log("cart", cart)
    setCartItems(cart);

  }, [cart]);
  // const handleRemove = (product_id, weight_id) => {

  //   const key = `${product_id}-${weight_id}`
  //   const updatedCart = cartItems.filter((w) => w.cart_id !== key)
  //   setCartItems(updatedCart);
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   dispatch({ type: 'ADD_CART', products: updatedCart })

  // }
  // const calculateTotalPrice = () => {
  //   return cartItems.reduce((total, product) => {
  //     const price = product.selectedWeight.price;
  //     const qty = product.qty;
  //     return total + qty * price;
  //   }, 0);
  // }

  // const calculateTotalWeight = () => {
  //   return cartItems.reduce((total, product) => {
  //     const weight = product.selectedWeight?.weight_value;
  //     const qty = product.qty;
  //     return total + qty * weight;
  //   }, 0);
  // }
  // const totalPrice = calculateTotalPrice();
  // const totalWeight = calculateTotalWeight();
  // const handleQuantity = (id, w_id, qty, flag) => {
  //   if (flag === "add") {
  //     qty = qty + 1

  //   }
  //   else {
  //     qty = qty - 1
  //     if (qty <= 0) {
  //       qty = 1;
  //     }
  //   }
  //   dispatch({ type: 'update_qty', Qty: { qty, id, w_id } })
  // }
  // const checkOutPage = () => {
  //   if (login) {
  //     navigate("/checkout")

  //   }
  //   else {
  //     navigate("/login")
  //   }
  // }
  // const handleCheckOut = () => {
  //   const isChecked = document.getElementById("termsCheckbox").checked;
  //   if (!isChecked) {
  //     alert("Please accept the privacy policy and T&C before proceeding.");
  //   }
  //   else {
  //     checkOutPage();
  //   }
  // }
  return (
    <div className='container'>
      {cartItems.length === 0 ? (<div className='text-center'>
        <img src={Empty_Cart_State} style={{ width: "150px", height: "100%", objectFit: "cover" }} />
        <h3>Your cart is getting lonely</h3>
        <p>Fill it up with all things good!</p>
        <button className='btn mb-3' style={{ backgroundColor: "#ffeee5", color: "#ff5211", fontFamily: "bold", fontSize: "25px" }} onClick={() => { navigate("/") }}>Start Shopping</button>
      </div>) : (

        role === 0 ? (< div >
          <div className='row text-center mt-5'>
            <div className='col-2 col-sm-2 col-md-2 col-lg-2'>
              Product
            </div>
            <div className='col-2 col-sm-2 col-md-2 col-lg-2'>
              Product Name
            </div>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3'>
              Item Price(Each)
            </div>

            <hr></hr>

          </div>

          {cartItems.map((item, index) => {
            return <div key={index}>
              <div className='row text-center mt-5'>
                <div className='col-2 col-sm-2 col-md-2 col-lg-2'>
                  <img src={item.image} style={{ width: "50px" }} />
                </div>
                <div className='col-2 col-sm-2 col-md-2 col-lg-2'>
                  {item.ITEM_NAME}{item.PRODUCT_NAME}
                </div>

                <div className='col-3 col-sm-3 col-md-3 col-lg-3'>
                  <b> RS:/-</b>  {item.PRICE}
                </div>


              </div>
            </div>
          })}

        </div>) : (<div className="text-center mt-5 text-danger fw-semibold">
          Seller doesn't have access to the cart details.
        </div>))
      }

    </div >
  );
}

export default Cart;