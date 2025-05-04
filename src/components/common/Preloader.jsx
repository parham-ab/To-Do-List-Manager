const PreLoader = () => {
  return (
    <div className="fixed right-[37%] md:right-[50%] flex items-center justify-center min-h-[85vh]">
      <div className="relative w-24 h-24 rounded-full border-4 border-transparent border-t-[#00a693] animate-spin">
        <div className="absolute inset-1 border-4 border-transparent border-t-[#0c659b] rounded-full animate-spin-slow"></div>
        <div className="absolute inset-3 border-4 border-transparent border-t-[#00a693] rounded-full animate-spin-fast"></div>
      </div>
    </div>
  );
};

export default PreLoader;
