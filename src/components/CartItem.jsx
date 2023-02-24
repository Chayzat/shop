import React from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function CartItem({ item }) {
  const { id, name, price, image } = item;
  return (
    <div className="content__cart flex">
      <div className="content__cart-img">
        <img src={image} alt={name} />
      </div>
      <div className="content__cart-box">
        <div className="content__cart-box__top">
          <div className="box__top-name">{name}</div>
          <div className="box__top-remove">
            <AiOutlineClose />
          </div>
        </div>
        <div className="content__cart-box__bottom">
          <div className="box__bottom-amount flex">
            <div className="box__bottom-amount__minus">
              <AiOutlineMinus />
            </div>
            <div className="box__bottom-amount__text">2</div>
            <div className="box__bottom-amount__plus">
              <AiOutlinePlus />
            </div>
          </div>
          <div className="box__bottom-price__first">155 P</div>
          <div className="box__bottom-price__end">799 P</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
