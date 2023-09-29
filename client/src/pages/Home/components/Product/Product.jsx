import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div>
      <Link to={'/'}>
        <div className="overflow-hidden rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.04rem] hover:shadow-md">
          <div className="relative w-full pt-[100%]">
            <img
              src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll0gy3w3fd8r25"
              alt=""
              className="absolute top-0 left-0 h-full w-full bg-white object-cover"
            />
          </div>
          <div className="overflow-hidden p-2">
            <div className="min-h-[2rem] text-xs line-clamp-2">ABC</div>
            <div className="mt-3 flex items-center">
              <div className="max-w-[50%] truncate text-gray-500 line-through">
                <span className="text-xs">₫</span>
                <span className="text-sm">50.000</span>
              </div>
              <div className="ml-1 truncate text-orange">
                <span className="text-xs">₫</span>
                <span className="text-sm">40000</span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-end">
              {/* <ProductRating rating={product.rating} /> */}
              <div className="ml-2 text-sm">
                <span>5.6k</span>
                <span className="ml-1">Đã bán</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
