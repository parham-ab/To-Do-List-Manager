import { useController } from "react-hook-form";
import { useState } from "react";

const CustomInput = ({
  control,
  name,
  type = "text",
  label,
  className = "",
  heightVal = "37px",
  placeholder,
  rows = 4,
  maxLength = 120,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const [charCount, setCharCount] = useState(field.value?.length || 0);

  const borderColor = error ? "border-red-500" : "border-[#4B4B4B]";

  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={name} className={`cursor-pointer`}>
          {label}
        </label>
      )}
      {type === "text" ? (
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          {...field}
          className={`w-full px-3 pr-10 rounded-md text-[16px] border placeholder-gray-500
          ${borderColor} outline-none transition-all duration-200
          ${className}
         `}
          style={{ height: heightVal }}
        />
      ) : (
        <>
          <textarea
            id={name}
            placeholder={placeholder}
            {...field}
            maxLength={maxLength}
            onChange={(e) => {
              setCharCount(e.target.value.length);
              field.onChange(e);
            }}
            className={`w-full px-3 pr-10 rounded-md text-[16px] border placeholder-gray-500
              ${borderColor} outline-none transition-all duration-200
              ${className}
             `}
            rows={rows}
          />
          <p
            className={`text-sm mt-1 text-right ${
              charCount >= maxLength ? "text-red-500" : "text-gray-500"
            }`}
          >
            {charCount}/{maxLength}
          </p>
        </>
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default CustomInput;
