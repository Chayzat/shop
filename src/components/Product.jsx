import React from 'react'

function Product({product}) {
  const {image, name, price} = product
  return (
    <div>
      <div>
        <img src={image} alt={name}/>
      </div>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  )
}

export default Product