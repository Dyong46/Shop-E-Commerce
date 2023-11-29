import { useStore } from '~/Context';
import './style.scss';
import CartDetails from './component/CartDetail';
import TotalCart from './component/TotalCart';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from '~/Context/ContextCart/CartContext';
import path from '~/constants/path';
import emptyCart from '~/assets/images/empty-cart.png'

const Cart = () => {
  const [state] = useStore();
  const [pr, setPr] = useState(0);
  const [status, setStatus] = useState();
  const [, setCarts] = useContext(CartContext);
  const { todos } = state;
  var tong = 0;
  var mang = [];
  const checkAllItem = () => {
    const get = document.querySelector('.check-all');
    const getItem = document.querySelectorAll('.check-item');
    if (get.checked) {
      todos.map((item, index) => {
        getItem[index].checked = get.checked;
        item.checked = true;
        setStatus(true);
        if (item.checked == true) {
          tong += item.price * item.quantity;
          mang.push(item);
        }
      });
      setPr(tong);
      setCarts(mang);
    } else {
      todos.map((item, index) => {
        getItem[index].checked = get.checked;
        item.checked = false;
        setStatus(false);
        if (item.checked == false) {
          tong = 0;
          mang.splice(0, mang.length);
        }
      });
      setPr(tong);
      setCarts(mang);
    }
  };

  return (
    <>
      {todos.length == 0 ? (
        <div className='flex flex-col items-center justify-center h-[600px]'>
          <div className="h-[200px] mb-10">
            <img src={emptyCart} alt="Empty cart" className='h-[100%]' />
          </div>
          <Link to={path.home}>
            <div className="flex justify-center items-center">
              <div className="rounded-sm py-2 px-4 bg-orange text-white hover:bg-red-400">
                Trở về trang chủ
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <div className='bg-s py-5'>
          <div className="flex justify-center justify-content-center ">
            <div className="flex bg-white header-cart py-6">
              <div className="">
                <input className="w-10 h-6 ml-9 check-all" onChange={checkAllItem} type="checkbox" name="" id="" />
              </div>
              <div className="wi">
                <p className="ml-3">Sản phẩm</p>
              </div>
              <div className="w-36">
                <p>Đơn Giá</p>
              </div>
              <div className="w-36">
                <p>Số Lượng</p>
              </div>
              <div className="w-36">
                <p>Số Tiền</p>
              </div>
              <div className="w-36">
                <p>Thao Tác</p>
              </div>
            </div>
          </div>
          {todos.map((res, index) => {
            return <CartDetails key={res.id} cart={res} index={index} />;
          })}

          {/* {status == true ? <TotalCart pr={pr} /> : <TotalCart />} */}
          <TotalCart price={status == true ? pr : 0} status={status} />
        </div>
      )}
    </>
  );
};

export default Cart;
