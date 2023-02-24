import React, { useContext } from "react";

import { AiOutlinePlus } from "react-icons/ai";
import { CartContext } from "../context/CartContext";

function Product({ product }) {
  const { addToCart } = useContext(CartContext);
  const { id, image, name, price } = product;
  return (
    <div className="product__cart">
      <div className="product__cart-content">
        <div className="content__img">
          <img src={image} alt={name} />
        </div>
        <div className="content__btns">
          <button
            onClick={() => addToCart(product, id)}
            className="content__btn"
          >
            <AiOutlinePlus />
          </button>
        </div>
        <div className="content__text">
          <h3 className="content__text-name">{name}</h3>
          <p className="content__text-price">{price} P</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
