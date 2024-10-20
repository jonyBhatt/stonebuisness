import { products } from "@/constants";
import { useParams } from "react-router-dom";

function Order() {
  const { name } = useParams();
  const product = products.find((p) => p.name === name);
  return (
    <section className="py-16 container mx-auto">
      <h2 className="font-semibold text-lg md:text-2xl pb-2  border-b">
        Order here
      </h2>
      <div className="flex flex-col w-full md:flex-row items-start  justify-between gap-8 min-h-dvh mt-16">
        <div className="w-full">
          <img
            src={product?.image}
            alt={`${product?.name}`}
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full">form</div>
      </div>
    </section>
  );
}
export default Order;
