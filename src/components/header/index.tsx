import Logo from "../../assets/icons/logo.svg";
import Marker from "../../assets/icons/marker.svg";
import Cart from "../../assets/icons/cart.svg";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  cartQuantity: number;
}

function Header({ open, setOpen, cartQuantity }: Props) {
  return (
    <header className="h-[104px] w-full bg-background">
      <div className="base-grid flex justify-between items-center h-full px-5">
        <img src={Logo} alt="logo" className="w-[84px]" />
        <div className="flex gap-3">
          <div className="flex items-center w-fit bg-purple-light h-9 rounded-md p-2 gap-1">
            <img src={Marker} alt="purple-marker" />
            <p className="text-sm text-purple-dark">Porto Alegre, RS</p>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="relative w-[38px] h-[38px] flex justify-center items-center rounded-md bg-yellow-light ease-out duration-300"
          >
            <img
              className=" w-fit hover:bg-yellow-light"
              src={Cart}
              alt="yellow cart"
            />
            <span className="absolute -top-2 -right-2 rounded-full w-5 h-5 bg-yellow-dark text-white text-xs grid place-items-center font-bold">
              {cartQuantity}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
