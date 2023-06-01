import { useState } from "react";
import ValueSelector from "../valueSelector";
import { Products } from "../../types/products";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  products: Products[];
}

function Cart({ open, setOpen, products }: Props) {
  const [value, setValue] = useState(1);
  return (
    <div>
      <div
        className={`fixed w-full h-full top-0 left-0 z-10 bg-black opacity-40 ${
          open ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed right-0 top-0 ml-auto w-[350px] ease-in duration-300 bg-white h-full transform z-10 ${
          open ? "translate-x-[0px]" : "translate-x-[100%]"
        }`}
      >
        <button
          className="text-black p-3 text-2xl bg-background"
          onClick={() => {
            setOpen(!open);
          }}
        >
          x
        </button>
        <div>
          <h2 className="text-black text-center text-xl mb-6">
            Carrinho de Compras
          </h2>
          {products.map((item, key) => {
            return (
              <div
                key={key}
                className="flex max-w-4xl h-20 bg-base-card w-full justify-between items-center"
              >
                <img
                  src={item.image}
                  className="w-16 h-16 rounded-full ml-5"
                  alt=""
                />
                <div>
                  <h2 className="text-base text-base-subtitle mb-2">
                    {item.title}
                  </h2>
                  <div className="flex gap-2 items-center">
                    <ValueSelector
                      value={value}
                      setValue={setValue}
                      processLeft={true}
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div>
            <h2 className="text-black text-center my-10 text-xl">
              Resumo do Pedido
            </h2>
            <div className="border border-black mb-4"></div>
          </div>
          <div className="flex justify-center items-end gap-2 mx-auto">
            <button
              onClick={() => {
                setOpen(!open);
              }}
              className="block bg-base-button p-4 rounded-md text-base-subtitle hover:bg-base-hover ease-out duration-300"
            >
              Fechar
            </button>
            <button className="block bg-purple p-4 rounded-md text-white hover:bg-purple-dark subti ease-out duration-300">
              Prosseguir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
