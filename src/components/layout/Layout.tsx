import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
const Layout = () => {
  return (
    <div className={scss.LayoutPage}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
