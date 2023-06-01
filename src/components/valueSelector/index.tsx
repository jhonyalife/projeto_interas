import More from "../../assets/icons/more.svg";
import Less from "../../assets/icons/less.svg";
import Bin from "../../assets/icons/bin.svg";
import { useEffect, useState } from "react";

interface Props {
  value: number;
  setValue: (value: number) => void;
  priceProduct?: any;
  processLeft: boolean;
}

function ValueSelector({ value, processLeft, setValue, priceProduct }: Props) {
  const [price, setPrice] = useState(1);

  const decreaseQuantity = () => {
    if (value > 1) {
      const resultado = price - priceProduct;
      setPrice(+resultado.toFixed(2));
      setValue(value - 1);
    }
  };

  const increaseQuantity = () => {
    const resultado = priceProduct + price;
    setPrice(+resultado.toFixed(2));
    setValue(value + 1);
  };

  useEffect(() => {
    if (priceProduct) {
      setPrice(priceProduct);
    }
  }, [priceProduct]);
  return (
    <>
      {processLeft ? (
        <>
          <div className="w-[72px] h-auto gap-1 bg-base-button flex items-center justify-center rounded-[6px] p-2">
            <button id="decrease" onClick={decreaseQuantity}>
              <img src={Less} alt="icone de menos" />
            </button>
            <input
              id="value"
              type="text"
              className="text-base-title w-5 bg-transparent text-center text-base"
              value={value}
              readOnly
            />
            <button id="increase" onClick={increaseQuantity}>
              <img src={More} alt="icone de mais" />
            </button>
          </div>
          <button className="flex items-center rounded-md bg-base-button p-2">
            <img src={Bin} alt="icone de lixeira" />
            <p className="uppercase text-xs text-base-text">Remover</p>
          </button>
          <span className="text-base before:content-['R$'] text-base-text text-right mr-6">
            <span className="text-base text-base-text text-right font-baloo ml-1 font-extrabold">
              {price}
            </span>
          </span>
        </>
      ) : (
        <>
          <div className="flex items-center mt-[33px]">
            <span className="text-[14px] before:content-['R$'] text-base-text text-right mr-6">
              <span className="text-[24px] text-base-text text-right font-baloo ml-1 font-extrabold">
                {price}
              </span>
            </span>
            <div className="gap-10">
              <div className="flex gap-2 items-center">
                <div className="w-[72px] h-38px gap-1 bg-base-button flex items-center justify-center rounded-[6px] p-2">
                  <button id="decrease" onClick={decreaseQuantity}>
                    <img src={Less} alt="icone de menos" />
                  </button>
                  <input
                    id="value"
                    type="text"
                    className="text-base-title w-5 bg-transparent text-center"
                    value={value}
                    readOnly
                  />
                  <button id="increase" onClick={increaseQuantity}>
                    <img src={More} alt="icone de mais" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ValueSelector;
