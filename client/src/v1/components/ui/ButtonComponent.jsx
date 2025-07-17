const ButtonComponent = ({
  icon: ICON,
  size,
  color = "black",
  title,
  onClick,
}) => {
  const fontSize = size ? size : 20;
  const colorClasses = {
    white: "text-black hover:text-gray-900 hover:bg-gray-200 ",
    orange: "text-orange-500 hover:text-orange-700 hover:bg-orange-50",
    blue: "text-blue-500 hover:text-blue-700 hover:bg-blue-50 ",
    green: "text-green-800 hover:text-green-700 hover:bg-green-50",
    red: "text-black hover:text-white hover:bg-red-500 ",
    gray: "text-gray-700 hover:text-gray-800 hover:bg-gray-100",
  };
  const iconColor = colorClasses[color];
  return (
    <button
      className={`${iconColor} cursor-pointer text-xs rounded p-1 flex justify-between items-center gap-1 duration-500 border-none dark:text-white`}
      onClick={onClick}
    >
      <h6>{title || ""}</h6>
      {ICON && <ICON size={fontSize} />}
    </button>
  );
};

export default ButtonComponent;
