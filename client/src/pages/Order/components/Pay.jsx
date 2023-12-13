import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import PropTypes from 'prop-types';
import { postOrders } from '~/servers/orderService';
import { AppContext } from '~/contexts/app.contexts';
import { toast } from 'react-toastify';
import { CartContext } from '~/Context/ContextCart/CartContext';
import { useStore } from '~/Context';

const Pay = ({ money, cart, address, discounts }) => {
  const navigate = useNavigate();
  const [payWith, setPayWith] = useState('');
  const { profile } = useContext(AppContext);
  const [carts,] = useContext(CartContext);
  const [state,] = useStore();
  const { todos } = state;

  const handleOrder = async () => {
    try {
      await postOrders({
        fullname: address.fullname,
        phone: address.phone,
        city: address.city,
        district: address.district,
        wards: address.wards,
        specificAddress: address.specific_address,
        accountId: profile.id,
        discountId: discounts.id,
        orderDetails: cart.map((item) => {
          return {
            quantity: item.quantity,
            productId: item.id,
          };
        }),
      });
      carts.forEach((element) => {
        let index = todos.indexOf(element);
        if (index !== -1) {
          todos.splice(index, 1);
        }
      });
      navigate('/');
      toast.success('Thanh toán thành công');
    } catch (error) {
      navigate('/');
      toast.success('Thanh toán thất bại');
      throw new error();
    }
  };

  // useEffect(() => {
  //   handleOrder();
  // });
  return (
    <div className="container">
      <div className="rounded-sm bg-white py-5 px-9 text-sm capitalize text-slate-900 shadow">
        <div className="flex items-center flex-wrap grid-flow-row gap-x-3">
          <div className="flex flex-shrink-0 items-center justify-center pr-3 ">
            <h1 className="mx-2 text-center text-lg">Phương thức thanh toán</h1>
          </div>
          <Button
            type="button"
            className={
              payWith === 'shopeePay'
                ? 'flex items-center justify-center px-2 py-2 outline-none border border-gray-300  text-orange rounded-sm '
                : 'flex items-center justify-center px-2 py-2 outline-none border border-gray-300 hover:border-orange hover:text-orange rounded-sm '
            }
            onClick={() => {
              setPayWith('shopeePay');
            }}
          >
            Ví Shopee
          </Button>
          <Button
            type="button"
            className="flex items-center justify-center px-2 py-2 outline-none border text-gray-300 border-gray-300 cursor-default rounded-sm "
          >
            Apple Pay
          </Button>
          <Button
            type="button"
            className="flex items-center justify-center px-2 py-2 outline-none border text-gray-300 border-gray-300 cursor-default rounded-sm "
          >
            Thẻ tín dụng/Ghi nợ
          </Button>
          <Button
            type="button"
            className={
              payWith === 'recive'
                ? 'flex items-center justify-center px-2 py-2 outline-none border border-gray-300 text-orange rounded-sm '
                : 'flex items-center justify-center px-2 py-2 outline-none border border-gray-300 hover:border-orange hover:text-orange rounded-sm '
            }
            onClick={() => {
              setPayWith('recive');
            }}
          >
            Thanh toán khi nhận hàng
          </Button>
          <Button
            type="button"
            className={
              payWith === 'vnPay'
                ? 'flex items-center justify-center px-2 py-2 outline-none border border-gray-300 text-orange rounded-sm '
                : 'flex items-center justify-center px-2 py-2 outline-none border border-gray-300 hover:border-orange hover:text-orange rounded-sm '
            }
            onClick={() => {
              setPayWith('vnPay');
            }}
          >
            Thanh toán VNPay
          </Button>
        </div>
      </div>
      <div className="bg-[#fffefb] py-5 px-9 border-dotted border-b-2 border-gray rouned-sm shadow">
        <div className="flex flex-row-reverse items-center mb-4">
          <div className="text-gray-400 text-sm min-w-[140px] text-end">đ{money}</div>
          <div className="">Tổng tiền hàng</div>
        </div>
        <div className="flex flex-row-reverse items-center mb-4">
          <div className="text-gray-400 text-sm min-w-[140px] text-end">đ0</div>
          <div className="">Phí vận chuyển</div>
        </div>
        <div className="flex flex-row-reverse items-center mb-4">
          <div className="text-gray-400 text-sm min-w-[140px] text-end">
            - đ{discounts.length != 0 ? (money * discounts.discount_percent) / 100 : 0}
          </div>
          <div className="">Tổng cộng Voucher giảm giá</div>
        </div>
        <div className="flex flex-row-reverse items-center mb-4">
          <div className="text-orange text-2xl min-w-[140px] text-end">
            đ{discounts.length != 0 ? money - (money * discounts.discount_percent) / 100 : money}
          </div>
          <div className="">Tổng thanh toán</div>
        </div>
      </div>
      <div className="bg-[#fffefb] py-5 px-9 rouned-sm shadow">
        <div className="flex justify-between items-center">
          <div className="text-orange">
            Nhấn &quot;Đặt hàng&quot; đồng nghĩa với việc bạn đồng ý tuân theo
            <Link to="/" className="ms-1 text-blue-700">
              Điều khoản Shopee
            </Link>
          </div>
          <Link to={''}>
            <Button
              onClick={handleOrder}
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
  cart: PropTypes.array,
  discounts: PropTypes.array,
  address: PropTypes.any,
};

export default Pay;
