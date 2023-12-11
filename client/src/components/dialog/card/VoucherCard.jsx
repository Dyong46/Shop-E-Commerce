import PropTypes from 'prop-types';
import { useContext } from 'react';
import { DiscountContext } from '~/Context/Discount/DiscountContext';

const VoucherCard = (props) => {
  const { data, group } = props;
  const [, setDiscounts] = useContext(DiscountContext);

  const setSelectDiscount = (item) => {
    setDiscounts(item);
  };

  return (
    <div className="flex flex-col my-6">
      <div className="flex">
        <div className="flex flex-col grow">
          <p className="font-medium">Giảm tối đa {data.discount_percent}%</p>
          <p className="text-gray-600">{data.description}</p>
        </div>
        <input
          type="radio"
          name={group}
          value={data.id}
          onChange={() => {
            setSelectDiscount(data);
          }}
        />
      </div>
    </div>
  );
};

VoucherCard.propTypes = {
  data: PropTypes.object,
  group: PropTypes.string,
};

export default VoucherCard;
