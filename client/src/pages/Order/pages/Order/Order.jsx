import Dialog from '~/components/dialog/Dialog';
import Location from '../../components/Location';
import Pay from '../../components/Pay';
import Products from '../../components/Products';
import Voucher from '../../components/Voucher';
import { useContext, useState } from 'react';
import { CartContext } from '~/Context/ContextCart/CartContext';
import LocationCard from '~/components/dialog/card/LocationCard';
import VoucherCard from '~/components/dialog/card/VoucherCard';
import { getAllDiscount } from '~/servers/discountService';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types'

const DialogBody = ({ data }) => {
  return (
    <div className="overflow-y-auto h-96">
      {
        data.map((item, index) => {
          return (<VoucherCard group={"voucher"} key={index} data={item} />);
        })
      }
    </div>
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
      <Dialog
        className="bg-sky-50"
        body={<DialogBody data={discounts} />}
        name={'Chọn Shopee Voucher'}
        open={openVoucher}
        handleToClose={handleToCloseVoucher} />
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
        <Pay cart={carts} />
      </div>
    </>
  );
};

Order.propTypes = {
  data: PropTypes.array
}

export default Order;
