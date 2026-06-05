function ProductCard({ product }) {
  return (
    <>
      <h3>{product.title}</h3>
      <h4>{product.price}</h4>
      <img src={product.thumbnail} alt="" />
    </>
  );
}
export default ProductCard;
