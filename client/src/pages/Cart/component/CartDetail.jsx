import { action } from '~/Context';
import { useState, useEffect, useContext } from 'react';
import { useStore } from '~/Context';
import { PriceContext } from '~/Context/ContextCart/PriceCartContext';
import PropTypes from 'prop-types';
import { CartContext } from '~/Context/ContextCart/CartContext';

const CartDetails = ({ cart, index }) => {
  const [state, dispath] = useStore();

  const [check, setCheck] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const [money, setMoney] = useContext(PriceContext);
  const [carts, setCarts] = useContext(CartContext);
  const { todos } = state;
  var mang = [];
  const getCart = () => {
    todos.map((item) => {
      if (item.checked == true) {
        mang.push(item);
      }
    });
    setCarts(mang);
  };

  const getPriceProduct = (itemIndex, check) => {
    for (var index = 0; index < todos.length; index++) {
      if (check == false) {
        if (index == itemIndex) {
          dispath(
            action.addTodoInput(
              todos[index].id,
              todos[index].nameproduct,
              todos[index].color,
              todos[index].size,
              todos[index].quantity,
              todos[index].img,
              todos[index].nameshop,
              todos[index].price,
              (todos[index].checked = true),
            ),
          );
          setCheck(!check);
          getCart();
        }
      } else {
        if (index == itemIndex) {
          dispath(
            action.addTodoInput(
              todos[index].id,
              todos[index].nameproduct,
              todos[index].color,
              todos[index].size,
              todos[index].quantity,
              todos[index].img,
              todos[index].nameshop,
              todos[index].price,
              (todos[index].checked = false),
            ),
          );

          setCheck(!check);
          setMoney(money - todos[index].quantity * todos[index].price);
          getCart([]);
        }
      }
    }
  };

  const handleIncrement = (itemId) => {
    todos.map((item) => {
      if (item.checked == true) {
        if (item.id === itemId && item.quantityInShop > 0) {
          dispath(
            action.addTodoInput(
              item.id,
              item.nameproduct,
              item.color,
              item.size,
              item.quantityInShop > item.quantity ? item.quantity + 1 : item.quantityInShop,
              item.img,
              item.nameshop,
              item.price,
            ),
          );
          setQuantity((plus) => {
            return plus + 1;
          });
        }
      } else {
        if (item.id === itemId && item.quantityInShop > 0) {
          dispath(
            action.addTodoInput(
              item.id,
              item.nameproduct,
              item.color,
              item.size,
              item.quantityInShop > item.quantity ? item.quantity + 1 : item.quantityInShop,
              item.img,
              item.nameshop,
              item.price,
            ),
          );
          setQuantity((plus) => {
            return plus + 1;
          });
        }
      }
    });
  };

  const handleDecrement = (itemId) => {
    todos.map((item) => {
      if (item.id === itemId && item.quantity > 0) {
        dispath(
          action.addTodoInput(
            item.id,
            item.nameproduct,
            item.color,
            item.size,
            item.quantity == 1 ? (item.quantity = 1) : item.quantity - 1,
            item.img,
            item.nameshop,
            item.price,
          ),
        );
        setQuantity((plus) => {
          if (plus > 1) {
            return plus - 1;
          } else {
            return 1;
          }
        });
      }
    });
  };

  useEffect(() => {
    var get = document.querySelectorAll('.check-item');
    var s = 0;

    todos.map((item, index) => {
      // for (var i = 0; i < get.length; i++) {
      //   if (item.checkitem == true) {
      //     get[index].checked == item.checkitem;
      //   } else {
      //     get[index].checked == item.checkitem;
      //   }
      // }

      if (index == parseInt(get[index].getAttribute('value'))) {
        if (item.checked == true) {
          s += item.price * item.quantity;
          setMoney(s);
        }
      }
    });
  }, [quantity, check]);
  return (
    <>
      <div className="flex justify-center justify-content-center mt-6" key={cart.id}>
        <div className="bg-white header-cart py-9">
          {/* <div className="flex">
            <div className="">
              <input className="w-10 h-6 ml-9 check-shop" type="checkbox" name="" id="" />
            </div>
            <div>{cart.nameshop}</div>
          </div> */}
          <div className="flex justify-center mt-6">
            <div className="flex border rounded-sm py-6 px-2 size">
              <div className="">
                <input
                  className="w-10 h-6 justify-content-center check-item"
                  onClick={() => {
                    getPriceProduct(index, cart.checked);
                  }}
                  type="checkbox"
                  name=""
                  id=""
                  checked={cart.checked}
                  value={index}
                />
              </div>
              <div>
                <img className="w-20 justify-content-center" src={cart.img} alt="" />
              </div>
              <div className="w-80 ml-4">
                <p>{cart.nameproduct}</p>
                <img
                  className="w-36"
                  src="https://down-vn.img.susercontent.com/file/vn-50009109-6f900884a58f4d0a0e7b8a6cedee0a8d"
                  alt=""
                />
              </div>
              <div className="w-60 text-gray-400">
                Phân Loại Hàng<select name="" id=""></select>
              </div>
              <div className="w-32 justify-content-center">₫{cart.price}</div>
              <div className="w-36">
                <div>
                  <button
                    className="border w-6"
                    onClick={() => {
                      handleDecrement(cart.id);
                    }}
                  >
                    -
                  </button>
                  <input
                    className="border w-12 text-center quantitycart"
                    type="text"
                    name=""
                    id=""
                    placeholder="1"
                    value={cart.quantity}
                  />
                  <button
                    className="border w-6 plus-btn"
                    onClick={() => {
                      handleIncrement(cart.id);
                    }}
                  >
                    +
                  </button>
                </div>
                <div>
                  <p className="text-xs">Còn {cart.quantityInShop} sản phẩm</p>
                </div>
              </div>
              <div className="w-40 text-orange">
                <p className="total-product" key={cart.id} value={cart.id}>
                  ₫{cart.price * cart.quantity}
                </p>
              </div>
              <div className="hover:text-blue-600">
                <button
                  onClick={() => {
                    todos.findIndex((element, index) => {
                      if (element.id === cart.id) {
                        dispath(action.deleteTodo(index));
                      }
                    });
                  }}
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
          {/* <div className="border-y-2 mt-5 flex px-12 py-5">
            <div className="mr-5">
              <svg fill="none" viewBox="0 -2 23 22" className="shopee-svg-icon L-deCr icon-voucher-line">
                <g filter="url(#voucher-filter0_d)">
                  <mask id="a" fill="#fff">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z"
                    ></path>
                  </mask>
                  <path
                    d="M19 2h1V1h-1v1zM1 2V1H0v1h1zm18 2.32l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zM19 16v1h1v-1h-1zM1 16H0v1h1v-1zm0-2.12l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zM19 1H1v2h18V1zm1 3.32V2h-2v2.32h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zM20 16v-2.13h-2V16h2zM1 17h18v-2H1v2zm-1-3.12V16h2v-2.12H0zm1.4.91a2.5 2.5 0 001.5-2.29h-2a.5.5 0 01-.3.46l.8 1.83zm1.5-2.29a2.5 2.5 0 00-1.5-2.3l-.8 1.84c.18.08.3.26.3.46h2zM0 10.48v.65h2v-.65H0zM.9 9.1a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 9.1h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 8.65zM0 7.08v.65h2v-.65H0zM.9 5.7a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 5.7h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 5.25zM0 2v2.33h2V2H0z"
                    mask="url(#a)"
                  ></path>
                </g>
                <path
                  clipRule="evenodd"
                  d="M6.49 14.18h.86v-1.6h-.86v1.6zM6.49 11.18h.86v-1.6h-.86v1.6zM6.49 8.18h.86v-1.6h-.86v1.6zM6.49 5.18h.86v-1.6h-.86v1.6z"
                ></path>
                <defs>
                  <filter
                    id="voucher-filter0_d"
                    x="0"
                    y="1"
                    width="20"
                    height="16"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation=".5"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix>
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                  </filter>
                </defs>
              </svg>
            </div>
            <div>
              <p>Thêm mã giảm giá của Shop</p>
            </div>
          </div>
          <div className=" flex px-12 mt-5">
            <div className="mr-4">
              <img
                width="24"
                height="20"
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/d9e992985b18d96aab90969636ebfd0e.png"
                alt="fs-icon"
              ></img>
            </div>
            <div>
              <p>
                Giảm ₫15.000 phí vận chuyển đơn tối thiểu ₫50.000; Giảm ₫25.000 phí vận chuyển đơn tối thiểu ₫99.000
                <a href="" className="text-blue-800">
                  Tìm hiểu thêm
                </a>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

CartDetails.propTypes = {
  cart: PropTypes.object,
  index: PropTypes.number,
  checkitem: PropTypes.bool,
};
export default CartDetails;
