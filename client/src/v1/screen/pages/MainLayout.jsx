import { Outlet } from "react-router-dom";
import Header from "../../components/layouts/Header";
import SideBar from "../../components/layouts/SideBar";

const MainLayout = () => {
  return (
    <main className="flex h-screen">
      <div className="flex-[2] bg-amber-100 hidden lg:block">
        <SideBar />
      </div>
      <div className="flex-[10] flex-col flex h-full">
        <Header />
        <div className="flex-1 p-2 w-full overflow-y-auto main-content">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
