import "./index.css";
import { BsCartPlus } from "react-icons/bs";

const ProductCard = ({
  productData,
  setModalVisibility,
  setPopUpVisibility,
  cartItems,
  setCartItems,
}) => {
  const onHandleOpen = () => {
    setModalVisibility(() => productData);
  };

  const addToCart = () => {
    const itemInCart = cartItems.find((item) => item.id === productData.id);
    if (itemInCart) {
      alert("Il prodotto è già presente nel carrello!");
      return;
    }
    setCartItems([...cartItems, productData]);

    setPopUpVisibility(true);

    setTimeout(() => {
      setPopUpVisibility(false);
    }, 2000);
  };

  return (
    <div className="ProductCard">
      <img
        className="card__image"
        src={productData.thumbnail}
        alt={productData.title}
        onClick={onHandleOpen}
      />
      <h1 className="card__title">{productData.title.slice(0, 11)}</h1>
      <p className="card__price">$ {productData.price}</p>
      <button className="card__button" onClick={addToCart}>
        <BsCartPlus />
      </button>
    </div>
  );
};

export default ProductCard;
