import Product from "../product";
import CoffeeExpress from "../../assets/icons/coffee-express.svg";
import CoffeeAmerican from "../../assets/icons/coffee-american.svg";
import CoffeeExpressCreamy from "../../assets/icons/coffee-express-creamy.svg";
import CoffeeIce from "../../assets/icons/coffee-ice.svg";
import CoffeeWithMilk from "../../assets/icons/coffee-with-milk.svg";
import Latte from "../../assets/icons/latter.svg";
import Capuccino from "../../assets/icons/capuccino.svg";
import Macchiato from "../../assets/icons/coffee-macchiato.svg";
import Mochaccino from "../../assets/icons/mochaccino.svg";
import CoffeeHot from "../../assets/icons/coffee-hot.svg";
import Cubano from "../../assets/icons/coffee-cubano.svg";
import Havaiano from "../../assets/icons/coffee-havaino.svg";
import Arabe from "../../assets/icons/coffee-arabe.svg";
import Irlandes from "../../assets/icons/coffee-irlandes.svg";  

function ProductList() {
  const productDetails = [
    {
      image: CoffeeExpress,
      type: ["Tradicional"],
      title: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
    },
    {
      image: CoffeeAmerican,
      type: ["Tradicional"],
      title: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
    },
    {
      image: CoffeeExpressCreamy,
      type: ["Tradicional", "gelado"],
      title: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
    },
    {
      image: CoffeeIce,
      type: ["Tradicional", "com leite"],
      title: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
    },
    {
      image: CoffeeWithMilk,
      type: ["Tradicional", "com leite"],
      title: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
    },
    {
      image: Latte,
      type: ["Tradicional", "com leite"],
      title: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    },
    {
      image: Capuccino,
      type: ["Tradicional", "com leite"],
      title: "Capuccino",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
    },
    {
      image: Macchiato,
      type: ["Tradicional", "com leite"],
      title: "Macchiato",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
    },
    {
      image: Mochaccino,
      type: ["Tradicional", "com leite"],
      title: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
    },
    {
      image: CoffeeHot,
      type: ["especial", "com leite"],
      title: "Chocolate Quente",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
    },
    {
      image: Cubano,
      type: ["especial", "alcoólico", "gelado"],
      title: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
    },
    {
      image: Havaiano,
      type: ["especial"],
      title: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
    },
    {
      image: Arabe,
      type: ["especial"],
      title: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
    },
    {
      image: Irlandes,
      type: ["especial", "alcoólico"],
      title: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-x-8 gap-y-10">
      {productDetails.map((item, key) => (
        <Product
          key={key}
          image={item.image}
          type={item.type}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default ProductList;
