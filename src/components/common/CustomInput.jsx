import { useController } from "react-hook-form";
import { useSelector } from "react-redux";

const CustomInput = ({
  control,
  name,
  type = "text",
  label,
  className = "",
  heightVal = "37px",
  placeholder,
  rows = 4,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const borderColor = error ? "border-red-500" : "border-[#4B4B4B]";
  const { theme } = useSelector((state) => state?.themeReducer);

  return (
    <>
      {label && (
        <label
          htmlFor={name}
          className={`cursor-pointer ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {label}
        </label>
      )}
      {type === "text" ? (
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          {...field}
          className={`
          w-full px-3 pr-10 rounded-md bg-transparent text-[16px] border
          ${borderColor} outline-none transition-all duration-200
          ${className}
          ${
            theme === "dark"
              ? "bg-[#090B1F] placeholder-gray-400 text-white"
              : "bg-[#c9c9c9] placeholder-gray-500"
          }
            `}
          style={{
            height: heightVal,
          }}
        />
      ) : (
        <textarea
          id={name}
          type={type}
          placeholder={placeholder}
          {...field}
          className={`
              w-full px-3 pr-10 rounded-md bg-transparent text-[16px] border
              ${borderColor} outline-none transition-all duration-200
              ${className}
              ${
                theme === "dark"
                  ? "bg-[#090B1F] placeholder-gray-400 text-white"
                  : "bg-[#c9c9c9] placeholder-gray-500"
              }
                `}
          rows={rows}
        />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </>
  );
};

export default CustomInput;
