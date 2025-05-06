import { IoCalendarOutline } from "react-icons/io5";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { PiStudentFill, PiBagSimpleFill } from "react-icons/pi";
import { MdOutlineSportsHandball } from "react-icons/md";

const Badge = ({ children, isDate = false, category }) => {
  const badgeConfig = {
    sport: { bg: "bg-green-200", icon: <MdOutlineSportsHandball size={16} /> },
    work: { bg: "bg-blue-200", icon: <PiBagSimpleFill size={16} /> },
    personal: { bg: "bg-purple-200", icon: <FaUserCircle size={16} /> },
    study: { bg: "bg-yellow-200", icon: <PiStudentFill size={16} /> },
    shop: { bg: "bg-red-200", icon: <FaShoppingCart size={16} /> },
    default: { bg: "bg-gray-200", icon: null },
  };
  const { bg, icon } = badgeConfig[category] || badgeConfig.default;
  return (
    <div
      className={`text-xs flex items-center gap-1 rounded-full ${bg} p-1 cursor-default select-none`}
    >
      {isDate && <IoCalendarOutline size={17} />}
      {icon}
      {children}
    </div>
  );
};

export default Badge;
