import Background from "../../assets/icons/banner-background.svg";
import CartFill from "../../assets/icons/cart-fill.svg";
import Box from "../../assets/icons/box.svg";
import Clock from "../../assets/icons/clock.svg";
import CoffeePot from "../../assets/icons/coffee-pot.svg";
import BannerImage from "../../assets/icons/banner-image.svg";

function Banner() {
  const productDetails = [
    {
      image: CartFill,
      description: "Compra simples e segura",
    },
    {
      image: Box,
      description: "Embalagem mantém o café intacto",
    },
    {
      image: Clock,
      description: "Entrega rápida e rastreada",
    },
    {
      image: CoffeePot,
      description: "O café chega fresquinho até você",
    },
  ];
  return (
    <div className="w-full relative mb-[32px]">
      <img
        src={Background}
        alt="banner background"
        className="w-full max-h-[544px] object-cover"
      />
      <div className="base-grid py-[94px] w-full absolute left-0 right-0 top-0 bottom-0 flex justify-between">
        <div className="max-w-[588px] w-full max-h-[52px]">
          <h1 className="!font-baloo text-5xl leading-[62px] mb-4 text-base-title">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <h2 className="font-normal text-xl leading-[26px] text-base-subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <div className="grid grid-cols-2 gap-10 mt-[66px]">
            {productDetails.map((item, key) => (
              <div key={key} className="flex items-center gap-3">
                <img src={item.image} alt="" />
                <span className="font-normal text-base leading-[20px] text-base-text">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>
        <img
          src={BannerImage}
          alt="banner image"
          className="ml-5 max-w-[480px]"
        />
      </div>
    </div>
  );
}

export default Banner;
