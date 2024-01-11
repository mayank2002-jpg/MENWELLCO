import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CartItem from "../Cart/cartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <>
      <div className="cart container mx-auto mt-5">
        <div>
          <h1 className="text-3xl font-medium">Your Cart items</h1>
        </div>
        <div className="cartItems">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>

        <div className="checkout">
          <p>Subtotal: {totalAmount}/-</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
