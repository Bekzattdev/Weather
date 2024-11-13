import scss from "./Header.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../../assets/logo.png";
const Header = () => {
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
     Header
        </div>
      </div>
    </header>
  );
};

export default Header;
