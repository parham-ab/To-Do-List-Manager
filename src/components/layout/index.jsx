import { useSelector } from "react-redux";
import Header from "./Header";

const Layout = ({ children }) => {
  const { theme } = useSelector((state) => state?.themeReducer);

  const bgClass = `h-screen ${theme === "dark" ? "bg-[#191C3B]" : "bg-white"}`;
  return (
    <div className={bgClass}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
