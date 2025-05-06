import { IoClose } from "react-icons/io5";

const Popup = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-xl p-3 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition cursor-pointer"
        >
          <IoClose size={24} />
        </button>
        {title && (
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
        )}
        <div className="mb-6 text-gray-600">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
