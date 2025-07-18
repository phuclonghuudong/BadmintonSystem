import { useState } from "react";

const FormInput = ({
  title,
  name,
  typeInput,
  autoFocus,
  value,
  onChange,
  disabled,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const txtTitle = title || "";
  const txtName = name || "";
  const txtValue = value || "";
  const fontSize = "text-xs";
  return (
    <div
      className={`${fontSize} flex flex-col w-full h-14 justify-between gap-2 `}
    >
      {txtTitle && (
        <label htmlFor={txtName} className="font-bold">
          {txtTitle}
        </label>
      )}
      {typeInput ? (
        <div className="border border-gray-400 flex justify-between items-center rounded-sm">
          <input
            type={showPassword ? "text" : "password"}
            className={` outline-none w-full px-2 ${fontSize} h-8`}
            id={txtName}
            name={txtName}
            value={txtValue}
            onChange={onChange}
            disabled={disabled || false}
          />
          <span
            className="px-2 cursor-pointer"
            onClick={() => setShowPassword((pre) => !pre)}
          >
            {showPassword ? (
              <i className="fa-solid fa-eye"></i>
            ) : (
              <i className="fa-solid fa-eye-slash"></i>
            )}
          </span>
        </div>
      ) : (
        <input
          autoFocus={autoFocus ? autoFocus : false}
          id={txtName}
          name={txtName}
          value={txtValue}
          onChange={onChange}
          disabled={disabled || false}
          type="text"
          className={`border border-gray-400 rounded-sm outline-none px-2 ${fontSize} h-full ${
            disabled && "cursor-not-allowed"
          }`}
        />
      )}
    </div>
  );
};

export default FormInput;
