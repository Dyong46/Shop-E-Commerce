const SortProductList = () => {
  return (
    <div className="bg-gray-300/40 py-4 px-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <div>Sắp xếp theo</div>
          <button className="h-8 px-4 text-center text-sm capitalize bg-white text-black hover:bg-slate-100">
            Phổ biến
          </button>
          <button className="h-8 px-4 text-center text-sm capitalize bg-white text-black hover:bg-slate-100">
            Mới nhất
          </button>
          <button className="h-8 px-4 text-center text-sm capitalize bg-white text-black hover:bg-slate-100">
            Bán chạy
          </button>
          <select className="h-8  px-4 text-left text-sm capitalize  outline-none bg-white text-black hover:bg-slate-100">
            <option value="" disabled className="bg-white text-black">
              Giá
            </option>
            <option className="bg-white text-black">Giá: Thấp đến cao</option>
            <option className="bg-white text-black">Giá: Cao đến thấp</option>
          </select>
        </div>
        <div className="flex items-center">
          <div>
            <span className="text-orange">1</span>
            <span>/1</span>
          </div>
          <div className="ml-2 flex"></div>
        </div>
      </div>
    </div>
  );
};

export default SortProductList;
