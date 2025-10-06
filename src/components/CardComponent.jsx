export default function ProductCard(props) {
  const { product } = props;

  return (
    <div className="card">
      <div>
        <img className="productImg" src={product.image} alt={product.title} />
      </div>

      <h5>Name: {product.title}</h5>
      <div>
        <span>Price:</span> {product.price}
      </div>
      <div>
        <span>Description:</span> {product.description}
      </div>
      <div>
        <span>Category: </span>
        {product.category}
      </div>
    </div>
  );
}
