import { action } from '~/Context';
import { useState, useEffect, useContext } from 'react';
import { useStore } from '~/Context';
import { PriceContext } from '~/Context/ContextCart/PriceCartContext';
import PropTypes from 'prop-types';
import { CartContext } from '~/Context/ContextCart/CartContext';
import { formatCurrency } from '~/utils/utils';

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
                  onChange={() => {
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
              <div className="w-32 justify-content-center">₫{formatCurrency(cart.price)}</div>
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
                <p className="total-product" key={cart.id}>
                  ₫{formatCurrency(cart.price * cart.quantity)}
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
