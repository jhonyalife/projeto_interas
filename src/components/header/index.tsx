import Logo from "../../assets/icons/logo.svg";
import Marker from "../../assets/icons/marker.svg";
import Cart from "../../assets/icons/cart.svg";

function Header() {
  return (
    <header className="h-[104px] w-full bg-background">
      <div className="base-grid flex justify-between items-center h-full px-5">
        <img src={Logo} alt="logo" className="w-[84px]" />
        <div className="flex gap-3">
          <div className="flex items-center w-fit bg-purple-light h-9 rounded-md p-2 gap-1">
            <img src={Marker} alt="purple-marker" />
            <p className="text-sm text-purple-dark">Porto Alegre, RS</p>
          </div>
          <button className="w-[38px] h-[38px] flex justify-center items-center rounded-md bg-yellow-light">
            <img className=" w-fit" src={Cart} alt="yellow cart" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
