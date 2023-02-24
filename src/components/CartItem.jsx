import React from 'react'

function CartItem({item}) {
  const {id, name, description, price, image} = item
  return (
    <div className='content__cart'>
      <div className='content__cart-img'>
        <img src={image} alt={name}/>
      </div>
      <div className='content__cart-text'>
        {name}
      </div>
    </div>
  )
}

export default CartItem