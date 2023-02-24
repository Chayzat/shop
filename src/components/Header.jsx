import React, { useContext } from 'react'
import {AiTwotoneHome, AiOutlineShoppingCart} from 'react-icons/ai'
import { SidebarContext } from '../context/SidebarContext'

function Header() {
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  return (
    <header className='header'>
      <nav className='nav container'>
        <ul className='nav__menu list'>
          <li className='nav__menu-item'>
            <AiTwotoneHome/>
          </li>
          <li className='nav__menu-item'>
            <div onClick={() => {
              console.log('clicked')
              setIsOpen(!isOpen)}
            }
            >
              <AiOutlineShoppingCart/>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header