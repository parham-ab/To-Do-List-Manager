import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={"p-3 mb-14 flex items-center justify-between bg-gray-200"}>
      <Link to="/" className={`font-semibold`}>
        Cyberia Tech TODO management
      </Link>
    </header>
  );
};

export default Header;
