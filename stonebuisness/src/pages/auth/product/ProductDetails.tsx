import { Button } from "@/components/ui/button";
import { products } from "@/constants";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { name } = useParams();
  const product = products.find((p) => p.name === name);

  if (!product) return <p>No product found</p>;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Product Image */}
        <div className="w-full h-auto">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Product Information */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Origin:</strong> {product.origin}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Color:</strong> {product.color}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Sizes:</strong> {product.sizes}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Capacity:</strong> {product.capacity}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Price:</strong> &#2547;20,000
          </p>
          <Button size={"lg"} className="w-full mt-4">
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
