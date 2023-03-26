import "./App.css";
import { useState, useEffect } from "react";
import { GET } from "./utils/http";
import Header from "./components/header";
import PopUp from "./components/popUp";
import Cart from "./components/cart";
import Hero from "./components/hero";
import SearchSection from "./components/searchSection";
import ProductsList from "./components/productsList";
import ProductDetails from "./components/productDetails";
import Footer from "./components/footer";

function App() {
  const [searchProduct, setSearchProduct] = useState("");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [singleProduct, setSingleProduct] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [popUpVisibility, setPopUpVisibility] = useState(false);
  const [cartVisibility, setCartVisibility] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    GET(
      searchProduct ? `/products/search?q=${searchProduct}` : "/products"
    ).then((product) => setSingleProduct(() => product.products));
  }, [searchProduct]);

  useEffect(() => {
    GET(
      searchInputValue ? `/products/category/${searchInputValue}` : "/products"
    ).then((category) => setCategoryProducts(() => category.products));
  }, [searchInputValue]);

  return (
    <div className="App">
      <Header setCartVisibility={setCartVisibility} />
      <Hero />
      <SearchSection
        singleProduct={singleProduct}
        categoryProducts={categoryProducts}
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
        searchProduct={searchProduct}
        setSearchProduct={setSearchProduct}
        setSingleProduct={setSingleProduct}
        setCategoryProducts={setCategoryProducts}
      />
      <ProductsList
        title={"Skincare"}
        setModalVisibility={setModalVisibility}
        setPopUpVisibility={setPopUpVisibility}
        cartItems={cartItems}
        setCartItems={setCartItems}
        endpoint={"/products?limit=10&skip=10"}
      />
      <ProductsList
        title={"Technology"}
        setModalVisibility={setModalVisibility}
        setPopUpVisibility={setPopUpVisibility}
        cartItems={cartItems}
        setCartItems={setCartItems}
        endpoint={"/products?limit=10"}
      />
      <ProductsList
        title={"Food"}
        setModalVisibility={setModalVisibility}
        setPopUpVisibility={setPopUpVisibility}
        cartItems={cartItems}
        setCartItems={setCartItems}
        endpoint={"/products?limit=10&skip=20"}
      />
      {modalVisibility && (
        <ProductDetails
          setModalVisibility={setModalVisibility}
          data={modalVisibility}
        />
      )}
      {cartVisibility && (
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          setCartVisibility={setCartVisibility}
        />
      )}
      {popUpVisibility && <PopUp />}
      <Footer />
    </div>
  );
}

export default App;
