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
import { Products } from "../../types/products";
import { useCallback, useState } from "react";

interface Product {
  addProduct: React.Dispatch<React.SetStateAction<Products[]>>;
  cartProducts: Products[];
}

function ProductList({ addProduct, cartProducts }: Product) {
  const [defaultProducts, setDefaultProducts] = useState<Products[]>([
    {
      id: "1",
      image: CoffeeExpress,
      type: ["Tradicional"],
      title: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.99,
      amount: 0,
    },
    {
      id: "2",
      image: CoffeeAmerican,
      type: ["Tradicional"],
      title: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 9.99,
      amount: 0,
    },
    {
      id: "3",
      image: CoffeeExpressCreamy,
      type: ["Tradicional", "gelado"],
      title: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: 9.99,
      amount: 0,
    },
    {
      id: "4",
      image: CoffeeIce,
      type: ["Tradicional", "com leite"],
      title: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: 9.99,
      amount: 0,
    },
    {
      id: "5",
      image: CoffeeWithMilk,
      type: ["Tradicional", "com leite"],
      title: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: 9.99,
      amount: 0,
    },
    {
      id: "6",
      image: Latte,
      type: ["Tradicional", "com leite"],
      title: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.99,
      amount: 0,
    },
    {
      id: "7",
      image: Capuccino,
      type: ["Tradicional", "com leite"],
      title: "Capuccino",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: 9.99,
      amount: 0,
    },
    {
      id: "8",
      image: Macchiato,
      type: ["Tradicional", "com leite"],
      title: "Macchiato",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      price: 9.99,
      amount: 0,
    },
    {
      id: "9",
      image: Mochaccino,
      type: ["Tradicional", "com leite"],
      title: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: 9.99,
      amount: 0,
    },
    {
      id: "10",
      image: CoffeeHot,
      type: ["especial", "com leite"],
      title: "Chocolate Quente",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      price: 9.99,
      amount: 0,
    },
    {
      id: "11",
      image: Cubano,
      type: ["especial", "alcoólico", "gelado"],
      title: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: 9.99,
      amount: 0,
    },
    {
      id: "12",
      image: Havaiano,
      type: ["especial"],
      title: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: 9.99,
      amount: 0,
    },
    {
      id: "13",
      image: Arabe,
      type: ["especial"],
      title: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      price: 9.99,
      amount: 0,
    },
    {
      id: "14",
      image: Irlandes,
      type: ["especial", "alcoólico"],
      title: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: 9.99,
      amount: 0,
    },
  ]);

  const addCartProduct = useCallback(
    (id: string, amount: number, product: Products) => {
      const current = cartProducts.find((item) => item.id === id);
      if (current) {
        const updated = cartProducts.map((item) => {
          if (item.id === id && item.amount) {
            return {
              ...item,
              amount: amount,
            };
          }
          return item;
        });
        addProduct(updated);
      } else {
        addProduct((prev) => {
          return [...prev, { ...product, amount: amount }];
        });
      }
    },
    [cartProducts]
  );

  return (
    <div className="grid gap-x-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 lg:grid-cols-4 px-5">
      {defaultProducts.map((item, key) => (
        <Product
          key={key}
          product={item}
          addProduct={() => {
            if (item.amount) addCartProduct(item.id, item.amount, item);
          }}
          setValue={(value) => {
            setDefaultProducts((prev) => {
              const newState = [...prev];
              newState[key].amount = value;
              return newState;
            });
          }}
        />
      ))}
    </div>
  );
}

export default ProductList;
