import scss from "./Header.module.scss";
const Header = () => {
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <img src="" alt="" />
          <nav>
            <h1>Header</h1>
          </nav>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
