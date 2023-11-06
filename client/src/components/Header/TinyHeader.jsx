
import { useState } from 'react';
import { Link } from 'react-router-dom';
import path from '~/constants/path';
import { useStore } from '~/Context';
import CartListItem from './components/cart-list-item';

let datasRight = [
  {
    id: 'notification',
    title: 'Thông báo',
    icon: (
      <svg
        className="w-[14px] h-[14px] mx-1 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 21"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z"
        />
      </svg>
    ),
  },
  {
    id: 'support',
    title: 'Hỗ trợ',
    icon: (
      <svg width={16} viewBox="0 0 16 16" className="shopee-svg-icon icon-help-center mx-1">
        <g fill="none" fillRule="evenodd" transform="translate(1)">
          <circle cx="7" cy="8" r="7" stroke="currentColor"></circle>
          <path
            fill="currentColor"
            d="m6.871 3.992c-.814 0-1.452.231-1.914.704-.462.462-.693 1.089-.693 1.892h1.155c0-.484.099-.858.297-1.122.22-.319.583-.473 1.078-.473.396 0 .715.11.935.33.209.22.319.517.319.902 0 .286-.11.55-.308.803l-.187.209c-.682.605-1.1 1.056-1.243 1.364-.154.286-.22.638-.22 1.045v.187h1.177v-.187c0-.264.055-.506.176-.726.099-.198.253-.396.462-.572.517-.451.825-.737.924-.858.275-.352.418-.803.418-1.342 0-.66-.22-1.188-.66-1.573-.44-.396-1.012-.583-1.716-.583zm-.198 6.435c-.22 0-.418.066-.572.22-.154.143-.231.33-.231.561 0 .22.077.407.231.561s.352.231.572.231.418-.077.572-.22c.154-.154.242-.341.242-.572s-.077-.418-.231-.561c-.154-.154-.352-.22-.583-.22z"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    id: 'language',
    title: 'Tiếng việt',
    icon: (
      <svg width={16} viewBox="0 0 16 16" className="mx-1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.00065 14.6667C11.6825 14.6667 14.6673 11.6819 14.6673 8.00004C14.6673 4.31814 11.6825 1.33337 8.00065 1.33337C4.31875 1.33337 1.33398 4.31814 1.33398 8.00004C1.33398 11.6819 4.31875 14.6667 8.00065 14.6667Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M5.33464 8.00004C5.33464 11.6819 6.52854 14.6667 8.0013 14.6667C9.47406 14.6667 10.668 11.6819 10.668 8.00004C10.668 4.31814 9.47406 1.33337 8.0013 1.33337C6.52854 1.33337 5.33464 4.31814 5.33464 8.00004Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path d="M1.33398 8H14.6673" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
    iconEnd: (
      <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
        <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
      </svg>
    ),
  },
];

let datasLeft = ['Kênh người bán', 'Tải ứng dụng', 'Kết nối'];


const TinyHeader = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [state] = useStore();
  const { todos } = state;

  const [isCart, setIsCart] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleMouseOverUser = () => {
    setIsUser(true);
  };

  const handleMouseOutUser = () => {
    setIsUser(false);
  };

  return (
    <div>
      <div className="bg-[linear-gradient(-180deg,#f53d2d,#f63)] pb-5 pt-2 text-white">
        <div className="container">
          {/* <NavHeader /> */}
          <div className="flex justify-between">
            <div className="flex justify-center align-center my-1">
              {datasLeft.map((item, index) => (
                <button
                  className="py-2 px-3 flex align-center text-xs text-left hover:text-gray-200"
                  key={index}
                  onClick={() => { }}
                >
                  {item}
                </button>
              ))}

              <div className="p-1 m-1 w-5 h-5 justify-center bg-white rounded-full">
                <svg
                  className="w-[12px] h-[12px] text-gray-800 dark:text-orange"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="py-1 px-1 mx-1 my-1 w-5 h-5 justify-center block bg-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[11px] w-[11px] dark:text-orange"
                  fill="currentColor"
                  viewBox="0 0 23 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </div>

            <div className="flex justify-center align-center my-1">
              {datasRight.map((item, index) => (
                <button
                  className="py-2 px-3 flex align-center justify-center text-xs text-left hover:text-gray-200"
                  key={index}
                  onMouseOver={item.id == 'language' ? handleMouseOver : handleMouseOut}
                  onMouseOut={handleMouseOut}
                  onClick={() => { }}
                >
                  {item.icon}
                  {item.title}
                  <div className="mt-1">{item.iconEnd}</div>
                </button>
              ))}

              <button
                onMouseOver={handleMouseOverUser}
                onMouseOut={handleMouseOutUser}
                className="py-2 px-3 flex align-center text-xs text-left hover:text-gray-200"
                onClick={() => { }}
              >
                <div className="block h-4 w-4 mr-1 rounded-full bg-white">h</div>
                User
              </button>
              {isHovering && (
                <div
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  className="absolute flex flex-col justify-start align-center top-10 right-28 z-10 w-40 bg-white"
                >
                  <button className="text-black m-3 flex justify-start hover:text-orange">Tiếng việt</button>
                  <button className="text-black m-3 flex justify-start hover:text-orange">English</button>
                </div>
              )}

              {isUser && (
                <div
                  onMouseOver={handleMouseOverUser}
                  onMouseOut={handleMouseOutUser}
                  className="absolute flex flex-col justify-start align-center top-10 right-10 z-10 w-40 bg-white"
                >
                  <Link to="/user/profile" className="text-black m-3 flex justify-start hover:text-orange">
                    Tài khoản của tôi
                  </Link>
                  <Link to="/order" className="text-black m-3 flex justify-start hover:text-orange">
                    Đơn mua
                  </Link>
                  <Link to="/login" className="text-black m-3 flex justify-start hover:text-orange">
                    Đăng xuất
                  </Link>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TinyHeader;
