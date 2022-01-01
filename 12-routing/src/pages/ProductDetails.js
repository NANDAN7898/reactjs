import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const param = useParams();
  return (
    <section>
      <h1>Product Details</h1>
      <p>{param.productId}</p>
    </section>
  );
};

export default ProductDetails;
