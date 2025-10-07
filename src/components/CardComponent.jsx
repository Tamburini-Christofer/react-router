import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { product } = props;

  return (
  <Link to={`/prodotti/${product.id}`}>
    <div className="card">
      <div>
        <img className="productImg" src={product.image} alt={product.title} />
      </div>
      <div className="click">
      </div>
      <h5><span>Name:</span> {product.title}</h5>
      <div>
        <span>Price:</span> {product.price}
      </div>
      <div>
        <span>Category: </span>
        {product.category}
      </div>
    </div>
    </Link>
  );
}
