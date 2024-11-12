import Footer from "./footer/Footer";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import LayoutSite from "../pages/LayoutSite";
const Layout = () => {
  return (
    <div className={scss.LayoutPage}>
      <Header />
      <main>
        <LayoutSite />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
