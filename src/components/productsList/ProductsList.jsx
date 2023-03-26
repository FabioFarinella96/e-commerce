import ProductCard from "../productCard/ProductCard";
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";

import "./index.css";

const ProductsList = ({
  title,
  setModalVisibility,
  setPopUpVisibility,
  setCartItems,
  cartItems,
  endpoint,
}) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    GET(endpoint).then((data) => setProductData(data.products));
  }, []);

  return (
    <div className="ProductsList">
      <div className="productsList__title">
        <h2>{title}</h2>
      </div>
      <div className="productsList__items">
        {productData.map((product) => (
          <ProductCard
            productData={product}
            key={product.id}
            setModalVisibility={setModalVisibility}
            setPopUpVisibility={setPopUpVisibility}
            setCartItems={setCartItems}
            cartItems={cartItems}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
