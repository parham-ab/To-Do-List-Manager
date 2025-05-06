import { Link } from "react-router-dom";

const Header = () => {
  const headerClass = `p-3 mb-14 flex items-center justify-between`;
  return (
    <header className={headerClass}>
      <Link to="/" className={`font-semibold`}>
        Cyberia Tech TODO management
      </Link>
    </header>
  );
};

export default Header;
