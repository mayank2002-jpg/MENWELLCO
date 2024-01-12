import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CartItem from "../Cart/cartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

import Modal from "@mui/material/Modal";
import Checkout from "../Checkout/checkout";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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

          <button onClick={handleOpen}>Checkout</button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Checkout />
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Cart;
