import { Link } from "react-router-dom";
import scss from "./Header.module.scss";
const Header = () => {
  return (
    <div className={scss.header}>
      <div className="container">
        <nav>
          <Link to={"#"}>To day</Link>
          <Link to={"#"}>To 10 days</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
