const Button = ({ icon: ICON, size, color = "black", title, onClick }) => {
  const fontSize = size ? size : 20;
  const colorClasses = {
    white: "text-black hover:text-gray-900 hover:bg-gray-200 ",
    orange: "text-orange-500 hover:text-orange-700 hover:bg-orange-50",
    blue: "text-black bg-blue-600 hover:text-white hover:bg-blue-900",
    green: "text-black bg-green-600 hover:text-white hover:bg-green-900",
    red: "text-black bg-red-600 hover:text-white hover:bg-red-900",
    gray: "text-gray-700 hover:text-gray-800 hover:bg-gray-100",
  };
  const iconColor = colorClasses[color];
  return (
    <button
      className={`${iconColor} uppercase font-bold cursor-pointer text-xs rounded  duration-500 border-none dark:text-white h-full w-full p-2`}
      onClick={onClick}
    >
      <h6>{title || ""}</h6>
    </button>
  );
};

export default Button;
