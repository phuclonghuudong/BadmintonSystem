import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "../screen/pages/Category";
import Customer from "../screen/pages/Customer";
import HomeScreen from "../screen/pages/HomeScreen";
import MainLayout from "../screen/pages/MainLayout";
import Personnel from "../screen/pages/Personnel";
import Product from "../screen/pages/Product";
import TypeYard from "../screen/pages/TypeYard/TypeYard";
import Yard from "../screen/pages/Yard";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path="category" element={<Category />} />
          <Route path="type" element={<TypeYard />} />
          <Route path="customer" element={<Customer />} />
          <Route path="personnel" element={<Personnel />} />
          <Route path="product" element={<Product />} />
          <Route path="yard" element={<Yard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
