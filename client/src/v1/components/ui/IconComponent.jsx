const IconComponent = ({ icon: ICON, size, color = "black", title }) => {
  const fontSize = size ? size : 20;
  const titleIcon = title ? title : false;
  const colorClasses = {
    white: "text-white hover:text-gray-300 hover:bg-gray-50",
    orange: "text-orange-500 hover:text-orange-700 hover:bg-orange-50",
    blue: "text-blue-500 hover:text-blue-700 hover:bg-blue-50",
    green: "text-green-800 hover:text-green-700 hover:bg-green-50",
    red: "text-red-500 hover:text-red-700 hover:bg-red-50",
    gray: "text-gray-700 hover:text-gray-800 hover:bg-gray-100",
  };
  const iconColor = colorClasses[color];
  return (
    <div className={`${iconColor} cursor-pointer rounded p-1 duration-300`}>
      <ICON size={fontSize} title={titleIcon} />
    </div>
  );
};

export default IconComponent;
