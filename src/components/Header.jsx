import React from 'react'
import {AiTwotoneHome, AiOutlineShoppingCart} from 'react-icons/ai'

function Header() {
  return (
    <header className='header'>
      <nav className='nav container'>
        <ul className='nav__menu list'>
          <li className='nav__menu-item'>
            <AiTwotoneHome/>
          </li>
          <li className='nav__menu-item'>
            <AiOutlineShoppingCart/>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header