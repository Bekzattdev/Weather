import scss from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={scss.MainPage}>
      <div className="container">
        <div className={scss.content}></div>
      </div>
    </div>
  );
};

export default MainPage;
