import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="desc">
        <p> {productName}</p>

        <p>
          <CurrencyRupeeIcon sx={{ fontSize: "2rem", margin: "-5px" }} />
          {price}
        </p>
        <div className="countHandler">
          <button
            className="bg-yellow-400 shadow-md w-16 h-12 rounded"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <input
            className="border-2 border-black m-4 h-12"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button
            className="bg-yellow-400 shadow-md w-16 h-12 rounded"
            onClick={() => addToCart(id)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
