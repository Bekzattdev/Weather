import { Link } from "react-router-dom";
import scss from "./ErrorPage.module.scss";

const ErrorPage = () => {
  return (
    <div className={scss.errorPage}>
      <div className={scss.content}>
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className={scss.link}>
          Go back to the HomePage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
