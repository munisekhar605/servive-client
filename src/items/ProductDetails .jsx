import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams(); // Get the product ID from the URL
  
  // In a real app, you would fetch the product details from an API or state
  const product = {
    1: { title: "Shirt", description: "A casual cotton shirt", price: 555 },
    2: { title: "Shirt", description: "A formal cotton shirt", price: 555 },
  }[id]; // Replace with your actual data fetching logic

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}₹</p>
    </div>
  );
}

export default ProductDetails;
