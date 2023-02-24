import React, { useContext } from "react";
import Product from "../components/Product";
import { ProductContext } from "../context/ProductContext";

function Home() {
  const { products } = useContext(ProductContext);

  return (
    <section className="home section">
      <div className="home__container container">
        <div className="home__products">
          {products.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Home;
