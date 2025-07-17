import AuthRouter from "./AuthRouter";
import MainRouter from "./MainRouter";

const Router = () => {
  return 1 > 2 ? <AuthRouter /> : <MainRouter />;
};

export default Router;
