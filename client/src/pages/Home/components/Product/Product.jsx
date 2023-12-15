import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import path from '~/constants/path';
import { formatCurrency, generateNameId } from '~/utils/utils';

import { memo } from 'react';

const Product = ({ product }) => {
  // Context

  return (
    <div>
      <Link to={`${path.home}${generateNameId({ name: product.name_product, id: product.id })}`}>
        <div
          className="overflow-hidden rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.04rem] hover:shadow-md 
          hover:border hover:border-orange"
        >
          <div className="relative w-full pt-[100%]">
            <img
              src={product.img}
              alt={product.name_product}
              className="absolute top-0 left-0 h-full w-full bg-white object-cover"
            />
          </div>
          <div className="overflow-hidden p-2">
            <div className="min-h-[2rem] text-xs line-clamp-2">{product.name_product}</div>
            <div className="mt-3 flex items-center justify-between">
              {/* <ProductRating rating={product.rating} /> */}
              <div className="truncate text-orange">
                <span className="text-xs">₫</span>
                <span className="text-base">{formatCurrency(product.price)}</span>
              </div>
              <div className="ml-1 text-xs text-gray-500">
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

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default memo(Product);
