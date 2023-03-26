import "./index.css";

const Cart = ({ cartItems, setCartItems, setCartVisibility }) => {
  const removeFromCart = (cartItem) => {
    const filteredCartList = cartItems.filter(
      (product) => product.id !== cartItem.id
    );

    setCartItems(() => filteredCartList);
  };

  return (
    <div className="Cart">
      {cartItems.length ? (
        cartItems.map((item) => (
          <div className="cart_content" key={item.id}>
            <img className="cart-image" src={item.thumbnail} alt={item.title} />
            <h3 className="cart-title">{item.title.slice(0, 11)}</h3>
            <p className="cart-price">$ {item.price}</p>
            <div className="cart-botton" onClick={() => removeFromCart(item)}>
              X
            </div>
          </div>
        ))
      ) : (
        <div className="empty-cart">
          <p className="empty-cart__text">
            Cart is empty... Start to add something!
          </p>
          <button
            className="empty-cart__button"
            onClick={(prev) => setCartVisibility(!prev)}
          >
            Go Shopping
          </button>
        </div>
      )}
      <div className="cart-down__content">
        {cartItems.length ? (
          <>
            <button className="clear-button" onClick={() => setCartItems([])}>
              Remove all
            </button>
            <h3 className="total">
              Totale:{" "}
              {cartItems.reduce((acc, product) => acc + product.price, 0)}$
            </h3>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
