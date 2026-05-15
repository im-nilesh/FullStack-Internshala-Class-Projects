function Product({ product }) {
  return (
    <div>
      <h1>
        {product.map((item) => (
          <ul>{item.title}</ul>
        ))}
      </h1>
    </div>
  );
}

export default Product;
