import { toggleDarkMode } from "features/utils/themeSlice";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme } = useSelector((state) => state?.themeReducer);
  const dispatch = useDispatch();
  const toggleThemeHandler = () => {
    dispatch(toggleDarkMode(theme === "dark" ? "light" : "dark"));
  };
  const headerClass = `p-3 mb-14 flex items-center justify-between ${
    theme === "dark" ? "bg-[#090B1F]" : "bg-[#c9c9c9]"
  }`;
  const textClass = theme === "dark" ? "text-white" : "text-black";

  return (
    <div className={headerClass}>
      <Link to="/" className={`${textClass} font-semibold`}>
        Cyberia Tech TODO management
      </Link>
      <section className="cursor-pointer" onClick={toggleThemeHandler}>
        {theme === "dark" ? (
          <MdLightMode className="text-white" size={22} />
        ) : (
          <MdDarkMode size={22} />
        )}
      </section>
    </div>
  );
};

export default Header;
