import Banner from "./components/banner";
import Header from "./components/header";
import ProductList from "./components/productList";
import "./styles/index.css";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Banner />
        <div className="base-grid">
          <h3 className="font-baloo text-[32px] text-base-subtitle font-black mb-[54px]">
            Nossos cafés
          </h3>
          <ProductList />
        </div>
      </div>
    </>
  );
}

export default App;
