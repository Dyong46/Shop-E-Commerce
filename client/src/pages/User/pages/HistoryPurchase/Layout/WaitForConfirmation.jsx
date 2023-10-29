import React from 'react';

const WaitForConfirmation = () => {
  return (
    <div>
      <div className="flex-grow flex overflow-hidden">
        <div className="flex justify-center items-center border w-[120px] h-[30px] text-center bg-orange text-white mr-5">
          Hủy đơn hàng
        </div>
        <div className="flex justify-center items-center text-orange border border-orange w-[120px] h-[30px]">
          Đang xác nhận
        </div>
      </div>
    </div>
  );
};
export default WaitForConfirmation;