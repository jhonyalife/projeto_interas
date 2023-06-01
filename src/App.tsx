import { useEffect, useState } from "react";
import Banner from "./components/banner";
import Cart from "./components/cart";
import Header from "./components/header";
import ProductList from "./components/productList";
import "./styles/index.css";
import { Products } from "./types/products";

function App() {
  const [open, setOpen] = useState(false);
  const [cardProduct, setCardProduct] = useState<Products[]>([]);
  useEffect(() => {
    console.log(cardProduct);
  }, [cardProduct]);
  return (
    <>
      <div className="App">
        <Header
          open={open}
          setOpen={setOpen}
          cartQuantity={cardProduct.length}
        />
        <Banner />
        <div className="base-grid">
          <h3 className="font-baloo p-5 text-[32px] text-base-subtitle font-black mb-[54px] lg:py-5">
            Nossos cafés
          </h3>
          <ProductList addProduct={setCardProduct} cartProducts={cardProduct} />
        </div>
        <Cart open={open} setOpen={setOpen} products={cardProduct} />
      </div>
    </>
  );
}

export default App;
