import React, { useContext } from 'react'
import Product from '../components/Product'
import { ProductContext } from '../context/ProductContext'

function Home() {
  const {products} = useContext(ProductContext)

  return (
    <section className='home section'>
      <div className='home__container container'>
        {products.map(product=> {
          return <Product product={product}/>
        })}

      </div>
    </section>
  )
}

export default Home