import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import PropTypes from 'prop-types';

const Pay = ({ money }) => {
  return (
    <div className="container">
      <div className="rounded-sm bg-white py-5 px-9 text-sm capitalize text-slate-900 shadow ">
        {/* <div className="col-span-6"> */}
        <div className="flex items-center flex-wrap grid-flow-row gap-x-3">
          <div className="flex flex-shrink-0 items-center justify-center pr-3 ">
            <h1 className="mx-2 text-center text-lg">Phương thức thanh toán</h1>
          </div>
          <Button
            Button
            className="flex items-center justify-center px-2 py-2 outline-none border border-gray-300 hover:border-orange hover:text-orange rounded-sm "
          >
            Ví Shopee
          </Button>
          <Button
            Button
            className="flex items-center justify-center px-2 py-2 outline-none border text-gray-300 border-gray-300 cursor-default rounded-sm "
          >
            Apple Pay
          </Button>
          <Button
            Button
            className="flex items-center justify-center px-2 py-2 outline-none border text-gray-300 border-gray-300 cursor-default rounded-sm "
          >
            Thẻ tín dụng/Ghi nợ
          </Button>
          <Button
            Button
            className="flex items-center justify-center px-2 py-2 outline-none border border-gray-300 hover:border-orange hover:text-orange rounded-sm "
          >
            Thanh toán khi nhận hàng
          </Button>

          {/* </div> */}
        </div>
        {/* <div className="col-span-6">
          <div className="flex items-center justify-end">
            <div className="me-20">Thanh toán khi nhận hàng</div>
            <button className=" text-blue-700  uppercase">Thay đổi</button>
          </div>
        </div> */}
      </div>
      <div className="bg-[#fffefb] py-5 px-9 border-dotted border-b-2 border-gray rouned-sm shadow">
        <div className="flex flex-row-reverse items-center mb-4">
          <div className="text-gray-400 text-sm min-w-[140px] text-end">đ{money}</div>
          <div className="">Tổng tiền hàng</div>
        </div>
        <div className="flex flex-row-reverse items-center mb-4">
          <div className="text-gray-400 text-sm min-w-[140px] text-end">đ27.500</div>
          <div className="">Phí vận chuyển</div>
        </div>
        <div className="flex flex-row-reverse items-center mb-4">
          <div className="text-orange text-2xl min-w-[140px] text-end">đ{money + 27500}</div>
          <div className="">Tổng thanh toán</div>
        </div>
      </div>
      <div className="bg-[#fffefb] py-5 px-9 rouned-sm shadow">
        <div className="flex justify-between items-center">
          <div className="text-orange">
            Nhấn &quot;Đặt hàng&quot; đồng nghĩa với việc bạn đồng ý tuân theo
            <Link to="/" className="ms-1 text-purple-800">
              Điều khoản Shopee
            </Link>
          </div>
          <Link to={'/user/purchase'}>
            <Button
              type="submit"
              className="flex items-center justify-center bg-red-500 py-2 rounded-sm px-20  text-white hover:bg-red-600"
            >
              Đặt hàng
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
Pay.propTypes = {
  money: PropTypes.number,
};

export default Pay;
