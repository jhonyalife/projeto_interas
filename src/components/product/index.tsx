import ValueSelector from "../valueSelector";
import { Products } from "../../types/products";
import { useState } from "react";
import SaleCart from "../../assets/icons/saleCart.svg";

interface Props {
  product: Products;
  setValue: (value: number) => void;
  addProduct: () => void;
}

function Product(props: Props) {
  const [amount, setAmount] = useState(1);

  return (
    <div className="relative flex justify-center  bg-base-card w-full  lg:w-[256px] h-[310px] rounded-tl-[6px] rounded-tr-[36px] rounded-bl-[36px] rounded-b-[6px] md:w">
      <div className="absolute items-center -top-10 z-10 flex flex-col items-enter justify-center">
        <img
          src={props.product.image}
          className="h-[120px] w-[120px] rounded-full mb-3"
        />
        <div className="flex justify-center items-center gap-1">
          {props.product.type.map((item, key) => {
            return (
              <div className="bg-yellow-light mb-4 py-1 px-2 rounded-[100px]">
                <p key={key} className="text-[10px] uppercase text-yellow-dark">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="mt-24">
          <h2 className="font-baloo text-center text-base-subtitle text-xl mb-2">
            {props.product.title}
          </h2>
          <p className="text-sm text-center text-base-label w-[216px]">
            {props.product.description}
          </p>
        </div>
        <div className="flex items-end">
          <ValueSelector
            value={amount}
            setValue={(val) => {
              props.setValue(val);
              setAmount(val);
            }}
            priceProduct={props.product.price}
            processLeft={false}
          />
          <button
            onClick={props.addProduct}
            className="w-[38px] block ml-2 h-[38px] rounded-[6px] p-2 gap-2 bg-purple-dark hover:bg-purple ease-out duration-300 "
          >
            <img src={SaleCart} alt="icone carrinho de compra" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
