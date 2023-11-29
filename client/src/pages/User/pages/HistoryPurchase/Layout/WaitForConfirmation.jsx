import PropTypes from 'prop-types';
import Button from '~/components/Button';
import { setStatus } from '~/servers/OrderService';

const WaitForConfirmation = ({ order, param }) => {
  console.log(param);
  const onClickStatus = async () => {
    let set = await setStatus(order);
    if (set) {
      console.log(set, 'set');
    }
  };

  if (param == 1) {
    return (
      <div>
        <div className="flex-grow flex overflow-hidden">
          <Button
            onClick={onClickStatus}
            className="border py-2 px-4 text-center bg-orange text-white mr-5"
          >
            Hủy đơn hàng
          </Button>
          <div className=" text-orange border border-orange py-2 px-4">
            Đang xác nhận
          </div>
        </div>
      </div>
    );
  } else if (param == 2) {
    return (
      <div>
        <div className="flex-grow flex overflow-hidden justify-end">
          <Button
            className="border py-2 px-4 text-center bg-orange text-white"
          >
            Đã nhận
          </Button>
        </div>
      </div>
    );
  } else if (param == 3) {
    return (
      <div>
        <div className="flex-grow flex overflow-hidden justify-end">
          <Button
            className="border py-2 px-4 text-center bg-orange text-white"
          >
            Nhận xét sản phẩm
          </Button>
        </div>
      </div>
    );
  } else if (param == 4) {
    return (
      <div>
        <div className="flex-grow flex overflow-hidden justify-end">
          <div className=" text-orange border border-orange py-2 px-4">
            Đã hủy
          </div>
        </div>
      </div>
    );
  }
};

WaitForConfirmation.propTypes = {
  order: PropTypes.number,
  param: PropTypes.number,
  statused: PropTypes.string,
};
export default WaitForConfirmation;
