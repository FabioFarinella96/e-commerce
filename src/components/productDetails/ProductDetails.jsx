import "./index.css";

const ProductDetails = ({ data, setModalVisibility }) => {
  return (
    <div className="ProductDetails">
      <div className="ProductDetails__content">
        <img className="image" src={data.thumbnail} alt={data.title} />
        <h3 className="title">{data.title.slice(0, 11)}</h3>
        <p className="description">{data.description.slice(0, 50)}</p>
        <p className="brand">{data.brand}</p>
        <button
          onClick={() => setModalVisibility(false)}
          className="ProductDetails__button"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
