import Dialog from '~/components/dialog/Dialog';
import Location from './components/Location';
import Pay from './components/Pay';
import Products from './components/Products';
import Voucher from './components/Voucher';
import { useContext, useState } from 'react';
import { CartContext } from '~/Context/ContextCart/CartContext';
import LocationCard from '~/components/dialog/card/LocationCard';
import VoucherCard from '~/components/dialog/card/VoucherCard';
import { getAllDiscount } from '~/servers/discountService';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types'

const DialogBody = (props) => {
  const ButtonShowmore = (props) => {
    return (
      <button className="flex" onClick={props.handle}>
        <p>Xem thêm</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 101 101" id="down"><path d="m80.5 33-30 30-30-30c-.9-.9-2.5-.9-3.4 0s-.9 2.5 0 3.4L48.8 68c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7l31.7-31.7c.9-.9.9-2.5 0-3.4s-2.5-.9-3.4.1z"></path></svg>
      </button>
    )
  }

  const ButtonHide = (props) => {
    return (
      <button className="flex" onClick={props.handle}>
        <p>Ẩn bớt</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" id="up" x="0" y="0" version="1.1" viewBox="0 0 29 29" xmlSpace="preserve"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="m8.5 17.5 6-6 6 6"></path></svg>
      </button>
    )
  }

  const [showmore, setShowmore] = useState(false);
  // const [showmoreVoucher, setShowmoreVoucher] = useState(false);

  const handleShowmore = () => {
    setShowmore(!showmore);
  };

  // const handleShowmoreVoucher = () => {
  //   setShowmoreVoucher(!showmoreVoucher);
  // };

  return (
    <>
      <div className="flex pt-2 pb-5">
        <p className="mr-4 text-gray-500 text-sm">Mã Voucher</p>
        <input type="text" className="grow peer h-full w-full rounded-[7px] border border-gray-300 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-gray-200 focus:border-2 focus:border-gray-400 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
        <button className="ml-4 text-gray-300 text-sm">ÁP DỤNG</button>
      </div>
      <div className="overflow-y-auto h-96">

        <div className="mb-2">Mã Miễn Phí Vận Chuyển</div>
        {
          props.data.slice(0, showmore ? props.data.length : 1)
            .map((item, index) => {
              return (<VoucherCard group={"voucher"} key={index} data={item} />);
            })
        }

        <div className="flex flex-col justify-center mt-2">
          {
            showmore ?
              <ButtonHide handle={handleShowmore} /> :
              <ButtonShowmore handle={handleShowmore} />
          }
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
  )
}

const Order = () => {

  const [carts] = useContext(CartContext);
  console.log(carts);

  const [discounts, setDiscounts] = useState([]);

  const [open, setOpen] = useState(false);
  const [openVoucher, setOpenVoucher] = useState(false);

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
  };

  const handleToClose = () => {
    setOpen(false);
  };

  const handleClickToOpenVoucher = () => {
    setOpenVoucher(true);
    getAll();
  };

  const handleToCloseVoucher = () => {
    setOpenVoucher(false);
  };

  function close() {
    handleToClose();
    handleToCloseVoucher();
  }

  return (
    <>
      <Dialog className="bg-sky-50" body={<LocationCard />} name={'Chọn địa chỉ'} open={open} handleToClose={handleToClose} />
      <Dialog className="bg-sky-50" body={<DialogBody data={discounts} />} name={'Chọn Shopee Voucher'} open={openVoucher} handleToClose={handleToCloseVoucher} />

      {
        open || openVoucher ?
          <div className='bg-gray-500 opacity-70 z-10 fixed top-0 bottom-0 left-0 right-0 w-full h-full' onClick={close}></div> :
          <div className=''></div>
      }

      <div className="bg-gray-50 pt-7 pb-20">
        <Location openDialog={handleClickToOpen} />
        <div className="h-7"></div>
        <Products cartitem={carts} />
        <div className="h-7"></div>

        <Voucher openDialog={handleClickToOpenVoucher} />
        <div className="h-7"></div>
        <Pay />
      </div>
    </>
  );
};

Order.propTypes = {
  data: PropTypes.array
}

export default Order;
