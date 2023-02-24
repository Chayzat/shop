import React, { useContext } from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'

function Sidebar() {
  const {cart} = useContext(CartContext)
  console.log('from sidebar',cart)
  return (
    <section className='sidebar'>
      <div className='sidebar__container'>
        <div className='sidebar__header'>
          <div className='sidebar__header-title'>shopping bag(1)</div>
          <div className='sidebar__header-back'>
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