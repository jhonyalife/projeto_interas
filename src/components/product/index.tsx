import { useState } from "react";
import SaleCart from "../../assets/icons/saleCart.svg";
import More from "../../assets/icons/more.svg";
import Less from "../../assets/icons/less.svg";

function Product(props: {
  image: string;
  type: string[];
  title: string;
  description: string;
}) {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };


  return (
    <div className="relative flex justify-center bg-base-card w-[256px] h-[310px] rounded-tl-[6px] rounded-tr-[36px] rounded-bl-[36px] rounded-b-[6px]">
      <div className="absolute -top-10 z-10 flex flex-col items-center justify-center">
        <img
          src={props.image}
          className="h-[120px] w-[120px] rounded-full mb-3"
        />
        <div className="flex justify-center items-center bg-yellow-light mb-4 py-1 px-2 rounded-[100px] gap-3">
          {props.type.map((item, key) => {
            return (
              <div className="gap-3">
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
            {props.title}
          </h2>
          <p className="text-sm text-center text-base-label w-[216px]">
            {props.description}
          </p>
        </div>
        <div className="flex items-center mt-[33px]">
          <span className="text-[14px] before:content-['R$'] text-base-text text-right mr-6">
            <span className="text-[24px] text-base-text text-right font-baloo ml-1 font-extrabold">
              {quantity * 9.99}
            </span>
          </span>
          <div className="flex gap-2 items-center">
            <div className="w-[72px] h-38px gap-1 bg-base-button flex items-center justify-center rounded-[6px] p-2">
              <button id="decrease" onClick={decreaseQuantity}>
                <img src={Less} alt="icone de menos" />
              </button>
              <input
                id="quantity"
                type="text"
                className="text-base-title w-5 bg-transparent text-center"
                value={quantity}
                readOnly
              />
              <button id="increase" onClick={increaseQuantity}>
                <img src={More} alt="icone de mais" />
              </button>
            </div>
            <button className="w-[38px] h-[38px] rounded-[6px] p-2 gap-2 bg-purple-dark">
              <img src={SaleCart} alt="icone carrinho de compra" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
