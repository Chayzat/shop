import React, { useContext } from "react";
import { AiTwotoneHome, AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../context/CartContext";
import { SidebarContext } from "../context/SidebarContext";

function Header() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  return (
    <header className="header">
      <nav className="nav container">
        <ul className="nav__menu list">
          <li className="nav__menu-item">
            <AiTwotoneHome />
          </li>
          <li className="nav__menu-item">
            <div
              className="nav__manu-item__busket"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <AiOutlineShoppingCart />
              <div className="nav__menu-item__amount">{itemAmount}</div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
