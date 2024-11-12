import scss from "./Header.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../../assets/logo.png";
const Header = () => {
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <img src={logo} alt="" />
          </div>
          <nav>
            <p>Courses</p>
            <p>Free Workshops</p>
            <p>Blog</p>
            <p>About</p>
            <p>Contact</p>
          </nav>
          <span>
            <AiOutlineShoppingCart />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
