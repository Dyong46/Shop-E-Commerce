import { useContext, useState } from 'react';
import { PriceContext } from '~/Context/ContextCart/PriceCartContext';
import { CartContext } from '~/Context/ContextCart/CartContext';
import Dialog from '~/components/dialog/Dialog';
import VoucherCard from '~/components/dialog/Card/VoucherCard';
import { Link } from 'react-router-dom';
import { getAllDiscount } from '~/servers/discountService';
import PropTypes from 'prop-types';
const DialogBody = (props) => {
  const ButtonShowmore = (props) => {
    return (
      <button className="flex" onClick={props.handle}>
        <p>Xem thêm</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 101 101" id="down">
          <path d="m80.5 33-30 30-30-30c-.9-.9-2.5-.9-3.4 0s-.9 2.5 0 3.4L48.8 68c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7l31.7-31.7c.9-.9.9-2.5 0-3.4s-2.5-.9-3.4.1z"></path>
        </svg>
      </button>
    );
  };

  const ButtonHide = (props) => {
    return (
      <button className="flex" onClick={props.handle}>
        <p>Ẩn bớt</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          id="up"
          x="0"
          y="0"
          version="1.1"
          viewBox="0 0 29 29"
          xml:space="preserve"
        >
          <path
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
            d="m8.5 17.5 6-6 6 6"
          ></path>
        </svg>
      </button>
    );
  };

  const [showmore, setShowmore] = useState(false);
  const [showmoreVoucher, setShowmoreVoucher] = useState(false);

  const handleShowmore = () => {
    setShowmore(!showmore);
  };

  const handleShowmoreVoucher = () => {
    setShowmoreVoucher(!showmoreVoucher);
  };

  return (
    <>
      <div className="flex pt-2 pb-5">
        <p className="mr-4 text-gray-500 text-sm">Mã Voucher</p>
        <input
          type="text"
          className="grow peer h-full w-full rounded-[7px] border border-gray-300 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-gray-200 focus:border-2 focus:border-gray-400 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        />
        <button className="ml-4 text-gray-300 text-sm">ÁP DỤNG</button>
      </div>
      <div className="overflow-y-auto h-96">
        <div className="mb-2">Mã Miễn Phí Vận Chuyển</div>
        {props.data.slice(0, showmore ? props.data.length : 3).map((item, index) => {
          return <VoucherCard group={'voucher'} key={index} data={item} />;
        })}

        <div className="flex flex-col justify-center mt-2">
          {showmore ? <ButtonHide handle={handleShowmore} /> : <ButtonShowmore handle={handleShowmore} />}
        </div>

        {/* <div className="mt-10 mb-2">Giảm Giá & Hoàn Xu</div> */}
        {/* { */}
        {/*   props.data[1].slice(0, showmoreVoucher ? props.data[1].length : 2) */}
        {/*     .map((item) => { */}
        {/*       return (<VoucherCard group={"voucher2"} img={props.img} />); */}
        {/*     }) */}
        {/* } */}
        {/**/}
        {/* <div className="flex flex-col justify-center mt-2"> */}
        {/*   { */}
        {/**/}
        {/*     showmoreVoucher ? */}
        {/*       <ButtonHide handle={handleShowmoreVoucher} /> : */}
        {/*       <ButtonShowmore handle={handleShowmoreVoucher} /> */}
        {/*   } */}
        {/**/}
        {/* </div> */}
      </div>
    </>
  );
};

const TotalCart = ({ price, status }) => {
  const [money] = useContext(PriceContext);
  const [carts] = useContext(CartContext);
  console.log(carts);
  const [discounts, setDiscounts] = useState([]);

  const [open, setOpen] = useState(false);

  const getAll = async () => {
    try {
      const discounts = await getAllDiscount();
      setDiscounts(discounts);
    } catch (error) {
      console.error('Error loading discount: ', error);
      toast.error(error.message);
    }
  };

  const handleClickToOpen = () => {
    setOpen(true);
    getAll();
  };

  const handleToClose = () => {
    setOpen(false);
  };

  const style = {
    pointerEvents: 'none',
  };

  function close() {
    handleToClose();
  }

  return (
    <>
      <Dialog
        className="bg-sky-50"
        body={<DialogBody data={discounts} />}
        name={'Chọn Shopee Voucher'}
        open={open}
        handleToClose={handleToClose}
      />
      {open ? (
        <div
          className="bg-gray-500 opacity-70 z-10 fixed top-0 bottom-0 left-0 right-0 w-full h-full"
          onClick={close}
        ></div>
      ) : (
        <div className=""></div>
      )}
      <div style={open ? style : {}} className="flex justify-center justify-content-center mt-6 mb-5 ">
        <div className="bg-white header-cart">
          <div className="flex justify-end py-4">
            <div className="mx-2">
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
            <div className="mr-14">
              <p>Shopee Voucher</p>
            </div>
            <div className="mr-20">
              <button onClick={handleClickToOpen} className="text-blue-800">
                Chọn Hoặc Nhập Mã
              </button>
            </div>
          </div>
          <div className="border-dashed border-2 flex justify-between py-3">
            <div className="flex justify-center self-center">
              <div>
                <input className="w-12 h-4" type="checkbox" name="" id="" />
              </div>
              <div>
                <a href="">Chọn Tất Cả (0)</a>
              </div>
              <div>
                <a href="">Xóa</a>
              </div>
            </div>
            <div className="flex ">
              <div className="flex justify-center self-center mr-6">
                <div className="flex">
                  Tổng thanh toán ({carts.length} Sản phẩm):
                  {status == true ? (
                    <p className="text-orange text-2xl">₫{price}</p>
                  ) : (
                    <p className="text-orange text-2xl">₫{money}</p>
                  )}
                  {/* <p className="text-orange text-2xl">₫{status == true ? price : money}</p> */}
                </div>
              </div>

              <Link to={carts.length == 0 ? '/cart' : '/order'}>
                <div className="mr-5 rounded-sm bg-orange py-2 px-4 text-white flex justify-center">
                  Mua Hàng
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TotalCart.propTypes = {
  pr: PropTypes.number,
  price: PropTypes.number,
};

export default TotalCart;
