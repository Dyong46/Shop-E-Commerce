import PropTypes from 'prop-types';

const WaitForConfirmation = ({ order, param }) => {
  const onClickStatus = () => {
    console.log(console.log(order, param));
  };
  if (param == 1) {
    return (
      <div>
        <div className="flex-grow flex overflow-hidden">
          <div
            onClick={onClickStatus}
            className="flex justify-center items-center border w-[120px] h-[30px] text-center bg-orange text-white mr-5"
          >
            Hủy đơn hàng
          </div>
          <div className="flex justify-center items-center text-orange border border-orange w-[120px] h-[30px]">
            Đang xác nhận
          </div>
        </div>
      </div>
    );
  } else if (param == 2) {
    return (
      <div>
        <div className="flex-grow flex overflow-hidden">
          <div
            onClick={onClickStatus}
            className="flex justify-center items-center border w-[120px] h-[30px] text-center bg-orange text-white mr-5"
          >
            Hủy đơn hàng
          </div>
          <div className="flex justify-center items-center text-orange border border-orange w-[120px] h-[30px]">
            Đang lấy hàng
          </div>
        </div>
      </div>
    );
  } else if (param == 3) {
    return (
      <div>
        <div className="flex-grow flex overflow-hidden">
          <div className="flex justify-center items-center text-orange border border-orange w-[120px] h-[30px]">
            Đang giao hàng
          </div>
        </div>
      </div>
    );
  } else if (param == 4) {
    return (
      <div>
        <div className="flex-grow flex overflow-hidden">
          <div className="flex justify-center items-center text-orange border border-orange w-[120px] h-[30px]">
            Đã giao
          </div>
        </div>
      </div>
    );
  } else if (param == 5) {
    return (
      <div>
        <div className="flex-grow flex overflow-hidden">
          <div className="flex justify-center items-center text-orange border border-orange w-[120px] h-[30px]">
            Đã hủy
          </div>
        </div>
      </div>
    );
  }
};

WaitForConfirmation.propTypes = {
  order: PropTypes.object,
  param: PropTypes.string,
};
export default WaitForConfirmation;
