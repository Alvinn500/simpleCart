import { useEffect, useState } from "react";
import "./App.css";
import CardProduct from "./components/CardProducts";
import axios from "axios";
import Sidebar from "./components/Sidebar";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("https://65c975233b05d29307de9428.mockapi.io/api/v1/product")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleAddToCart = (e) => {
    // console.log(e);
    if (cart.find((product) => product.id === e)) return;
    setCart([...cart, products.find((product) => product.id === e)]);
  };

  const handleDelete = () => {};

  return (
    <main className="py-8 bg-gray-900 relative">
      <h1 className="text-7xl mb-16 font-bold text-center text-white ">
        MyShop
      </h1>
      <div className="grid grid-cols-3 gap-y-8">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            name={product.name}
            description={product.description}
            img={product.image}
            price={product.price}
            onClick={() => handleAddToCart(product.id)}
          />
        ))}
      </div>
      <div className="fixed top-0 right-0 bg-gray-800 h-screen w-96 ">
        <Sidebar
          products={cart}
          onClick={() => cart.find((carts) => products.id !== carts.id)}
        />
      </div>
    </main>
  );
}

export default App;
