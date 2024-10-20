import MaxWithWrapper from "@/components/MaxWithWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products } from "@/constants";

type Product = {
  product: {
    name: string;
    origin: string;
    color: string;
    sizes: string;
    capacity: string;
    image: string;
  };
};

const ProductCard = ({ product }: Product) => (
  <Card className="w-full max-w-md mx-auto">
    <CardHeader>
      <CardTitle>{product.name}</CardTitle>
      <CardDescription>{product.origin}</CardDescription>
    </CardHeader>
    <CardContent>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <p>
        <strong>Color:</strong> {product.color}
      </p>
      <p>
        <strong>Sizes:</strong> {product.sizes}
      </p>
      <p>
        <strong>Capacity/Month:</strong> {product.capacity}
      </p>
      <Link to={`/business/product/${product.name}`}>
        <Button size="lg" className="w-full mt-8">
          View Details
        </Button>
      </Link>
    </CardContent>
  </Card>
);

const OrderFormalities = () => (
  <Card className="w-full   mx-auto mt-8">
    <CardHeader>
      <CardTitle>Order Formalities</CardTitle>
    </CardHeader>
    <CardContent>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Payment Policy</AccordionTrigger>
          <AccordionContent>
            DD, Pay Order, Online Payment or Cash
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Delivery Time</AccordionTrigger>
          <AccordionContent>
            <p>First Delivery: 30 Days after receiving the LC</p>
            <p>
              Next Deliveries: 20-25 Days after the first delivery (varies by
              product)
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Price Validity</AccordionTrigger>
          <AccordionContent>
            60 Days from the date of issuance of the offer letter
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Price Change</AccordionTrigger>
          <AccordionContent>
            Any changes in price will be notified with a notice period of at
            least 15 days.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </CardContent>
  </Card>
);

const BusinessAndProducts = () => {
  return (
    <MaxWithWrapper className=" py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        BUSINESS AND PRODUCTS
      </h1>
      <h2 className="text-2xl font-semibold mb-6">
        Stone Categories and Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <OrderFormalities />
    </MaxWithWrapper>
  );
};

export default BusinessAndProducts;
