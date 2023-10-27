import 'react-toastify/dist/ReactToastify.css';
import ItemCartHover from './item-cart-hover';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';

const CartListItem = (props) => {
  return (
    <div className="w-100 mx-2 px-2">
      <div className="text-gray-300 mt-2 text-sm">Sản phẩm mới thêm</div>
      <div>
        {props.listItem
          .filter((product, idx) => idx < 5)
          .map((product, index) => (
            <ItemCartHover key={index} title={product.nameproduct} image={product.img} price={product.price} />
          ))}
      </div>
      <div>
        <div className="flex flex-row justify-between">
          <div className="flex items-center text-gray-500 text-sm text-align-center">
            {props.countProduct} Thêm hàng vào giỏ
          </div>

          <Link
            to="/cart"
            type="Button"
            className="btn flex items-center justify-center bg-red-500 py-2 my-2 rounded-sm px-2 text-sm text-white  hover:bg-red-600"
          >
            Xem Giỏ Hàng
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartListItem;
