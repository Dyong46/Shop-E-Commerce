import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import path from '~/constants/path';
import { formatCurrency } from '~/utils/utils';

const OrderDetail = ({ orderDetail }) => {
  const { product_id, quantity } = orderDetail

  return (
    <div className='flex mb-3'>
      <div className="flex-shrink-0">
        <img className="h-20 w-20 object-cover border" src={product_id.img} alt={product_id.name_product} />
      </div>
      <div className="ml-3 flex-grow overflow-hidden">
        <Link
          to={`${path.home}`}
          className="truncate hover:text-gray-500"
        >
          {product_id.name_product}
        </Link>
        <div className="mt-1">x{quantity}</div>
      </div>
      <div className="ml-3 flex flex-shrink-0 items-center">
        <div className="mb-2 text-end">
          <span className="ml-2 truncate text-black">
            <sup className='underline'>đ</sup>
            {formatCurrency(product_id.price)}
          </span>
        </div>
      </div>
    </div>
  );
}

OrderDetail.propTypes = {
  orderDetail: PropTypes.object
}

export default OrderDetail;
