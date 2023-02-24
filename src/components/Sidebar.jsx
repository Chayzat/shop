import React, { useContext } from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { CartContext } from '../context/CartContext'
import { SidebarContext } from '../context/SidebarContext'
import CartItem from './CartItem'

function Sidebar() {
  const {cart} = useContext(CartContext)
  const {isOpen, handleClose} = useContext(SidebarContext)

  return (
    <section className={`sidebar ${isOpen ? 'isOpen' : ''}`}>
      <div className='sidebar__container'>
        <div className='sidebar__header'>
          <div className='sidebar__header-title'>shopping bag(1)</div>
          <div onClick={handleClose} className='sidebar__header-back'>
            <AiOutlineArrowRight/>
          </div>
        </div>
        <div className='sidebar__content'>
          {
            cart.map(item => {
            return <CartItem item={item} key={item.id} />})
          }
        </div>
        <div className='sidebar__footer'>footer</div>
      </div>
    </section>
  )
}

export default Sidebar