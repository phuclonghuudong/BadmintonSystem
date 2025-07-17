import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaHome, FaUsersCog } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { PiCourtBasketballFill } from "react-icons/pi";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { SiProtonvpn } from "react-icons/si";
import { TbBrandBitbucketFilled } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import ICON from "../../assets/badminton-100.png";

const TextMenuTaskbar = ({ title, icon: ICON, size, bold, path }) => {
  const location = useLocation();

  const isActive = location.pathname === path;
  return (
    <Link
      to={path}
      className={`flex justify-start gap-2 items-center text-sm p-3 cursor-pointer transition-colors duration-300
        ${bold ? "font-bold" : ""}
        ${
          isActive
            ? "bg-yellow-100 text-gray-800"
            : "text-gray-600 dark:text-zinc-300"
        }
        hover:bg-amber-100 hover:text-gray-700`}
    >
      <ICON size={size || 20} />

      <p>{title || ""}</p>
    </Link>
  );
};
const SideBar = () => {
  return (
    <div className="sideBar-box">
      <div className="header-sideBar ">
        <img src={ICON} className="w-12 h-10 object-scale-down" />
        <div className="w-full font-bold text-sm">Manage Badminton</div>
      </div>

      <div className="text-zinc-700 overflow-y-auto flex-1 custom-scrollbar">
        <TextMenuTaskbar path={"/"} title={"Trang chủ"} icon={FaHome} bold />
        <TextMenuTaskbar
          bold
          path="/category"
          title={"Loại Sản phẩm"}
          icon={BiSolidCategoryAlt}
        />
        <TextMenuTaskbar
          path={"/type"}
          title={"Loại Sân"}
          icon={TbBrandBitbucketFilled}
          bold
        />
        <TextMenuTaskbar
          path={"/customer"}
          title={"Khách hàng"}
          icon={FaUsersCog}
          bold
        />
        <TextMenuTaskbar
          path={"/personnel"}
          title={"Nhân viên"}
          icon={FaPeopleRoof}
          bold
        />
        <TextMenuTaskbar
          path={"/product"}
          title={"Sản phẩm"}
          icon={SiProtonvpn}
          bold
        />
        <TextMenuTaskbar
          path={"/yard"}
          title={"Sân"}
          icon={PiCourtBasketballFill}
          bold
        />
      </div>

      <div className="flex justify-start items-center ">
        <div
          className={`w-full flex justify-start gap-2 items-center text-sm p-3 cursor-pointer transition-colors duration-300 font-bold text-gray-600 dark:text-zinc-300 hover:bg-gray-500 hover:text-gray-700`}
        >
          <RiLogoutBoxRFill size={20} />
          <p>Đăng xuất</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
