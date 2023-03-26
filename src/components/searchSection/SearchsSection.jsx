import { useState } from "react";
import "./index.css";

const SearchSection = ({
  categoryProducts,
  searchInputValue,
  setSearchInputValue,
  searchProduct,
  setSearchProduct,
  singleProduct,
  setSingleProduct,
  setCategoryProducts,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [productValue, setProductValue] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setSearchInputValue(() => inputValue);
    setSingleProduct([]);
    setInputValue("");
  };

  const onHandleProductSumbit = (e) => {
    e.preventDefault();
    setSearchProduct(() => productValue);
    setCategoryProducts([]);
    setProductValue("");
  };

  return (
    <div className="SearchSection">
      <div className="form-container">
        <h3 className="form-title">Find something you like...</h3>
        <form onSubmit={onHandleProductSumbit} className="search-product__form">
          <input
            value={productValue}
            onChange={(e) => setProductValue(e.target.value)}
            type="text"
            className="search-product__input"
            placeholder="Search for a product ..."
          />
        </form>
        <form onSubmit={onHandleSubmit} className="search-category__form">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="search-category__input"
            type="text"
            placeholder="Search for a category ..."
          />
        </form>
      </div>

      <div className="categoryList">
        {searchProduct
          ? singleProduct.map((category) => (
              <img
                className="categoryList__image"
                src={category.thumbnail}
                alt={category.title}
                key={category.id}
              ></img>
            ))
          : null}
        {searchInputValue
          ? categoryProducts.map((category) => (
              <img
                className="categoryList__image"
                src={category.thumbnail}
                alt={category.title}
                key={category.id}
              ></img>
            ))
          : null}
        {!searchProduct && !searchInputValue && (
          <ul className="categories">
            <li>Laptops</li>
            <li>Smartphones</li>
            <li>Skincare</li>
            <li>Fragrances</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchSection;
