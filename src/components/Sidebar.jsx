import { ShoppingBagIcon, TrashIcon } from "@heroicons/react/24/solid";

function Sidebar({ products, onClick }) {
  return (
    <div className="p-4 flex flex-col justify-between gap-y-8">
      <div className="flex items-center gap-4 ">
        <ShoppingBagIcon color="white" height={40} />
        <h1 className="text-white text-3xl font-bold">Cart</h1>
      </div>
      <div className="flex flex-col gap-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center pr-4 bg-gray-200 gap-4 rounded-lg"
          >
            <img
              className="h-20 bg-cover rounded-s-xl"
              src={product.image}
              alt="img-profuct"
            />
            <div className="flex flex-col gap-y-2">
              <h2 className="text-xl font-bold">
                {product.name || "Product Name"}
              </h2>
              <p>${product.price}</p>
            </div>
            <TrashIcon
              onClick={onClick}
              color="black"
              className="ml-auto cursor-pointer"
              height={30}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
