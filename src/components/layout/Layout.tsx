import Footer from "./footer/Footer";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import LayoutSite from "../pages/LayoutSite";
const Layout = () => {
  return (
    <div className={scss.LayoutPage}>
      <div className={scss.scitka}>
        <p>One week only—50% off all courses with code</p>
      </div>
      <Header />
      <main>
        <LayoutSite />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
