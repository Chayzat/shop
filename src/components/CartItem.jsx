import React, { useContext } from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CartContext } from "../context/CartContext";

function CartItem({ item }) {
  const { id, name, price, image, amount } = item;
  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext)
  return (
    <div className="content__cart flex">
      <div className="content__cart-img">
        <img src={image} alt={name} />
      </div>
      <div className="content__cart-box">
        <div className="content__cart-box__top">
          <div className="box__top-name">{name}</div>
          <div onClick={() => removeFromCart(id)} className="box__top-remove">
            <AiOutlineClose />
          </div>
        </div>
        <div className="content__cart-box__bottom">
          <div className="box__bottom-amount flex">
            <div onClick={() => decreaseAmount(id)} className="box__bottom-amount__minus">
              <AiOutlineMinus />
            </div>
            <div className="box__bottom-amount__text">{amount}</div>
            <div onClick={() => {
              increaseAmount(id)
            }} className="box__bottom-amount__plus">
              <AiOutlinePlus />
            </div>
          </div>
          <div className="box__bottom-price__first">{price} P</div>
          <div className="box__bottom-price__end">{parseFloat(price * amount).toFixed(2)} P</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
