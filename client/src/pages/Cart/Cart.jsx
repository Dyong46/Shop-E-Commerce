import { useStore } from '~/Context';
import './style.scss';
import Footer from '~/components/Footer';
import CartDetails from './component/CartDetail';
import TotalCart from './component/TotalCart';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from '~/Context/ContextCart/CartContext';
const Cart = () => {
  const [state] = useStore();
  const [pr, setPr] = useState(0);
  const [status, setStatus] = useState();
  const [carts, setCarts] = useContext(CartContext);
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

  if (todos.length == 0) {
    return (
      <>
        <div className="relative">
          <div className="flex justify-center">
            <img src="https://newnet.vn/themes/newnet/assets/img/empty-cart.png" alt="" />
          </div>
          <Link to={'/'}>
            <div className="flex justify-center items-center mb-10 absolute bottom-[50px] left-[44%] cursor-pointer">
              <div className="w-46 h-12 border border-orange rounded-[10px] p-3 bg-orange text-white">
                MUA HÀNG NGAY NÀO
              </div>
            </div>
          </Link>
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <div>
        <div className="bg-s py-5">
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
          <Footer />
        </div>
      </div>
    );
  }
};

export default Cart;
