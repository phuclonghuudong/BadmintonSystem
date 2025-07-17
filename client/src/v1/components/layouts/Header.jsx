import { HiBellAlert } from "react-icons/hi2";
import IconComponent from "../ui/IconComponent";

const Header = () => {
  const handleDarkMode = () => {
    const html = document.documentElement;
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <main className=" header">
      <div></div>
      <div className="flex justify-between items-center gap-1 cursor-pointer">
        <IconComponent
          icon={HiBellAlert}
          size={28}
          color="green"
          title={"Thông báo"}
        />

        <span onClick={handleDarkMode} title="Chế độ sáng tối">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/fluency/48/batman-emoji.png"
            alt="batman-emoji"
          />
        </span>
        <img
          title="Avatar"
          width="40"
          height="30"
          src="https://img.icons8.com/3d-fluency/94/person-male--v6.png"
          alt="person-male--v6"
        />
        <img
          title="Việt Nam"
          width="40"
          height="40"
          src="https://img.icons8.com/color/48/vietnam.png"
          alt="vietnam"
        />
      </div>
    </main>
  );
};

export default Header;
