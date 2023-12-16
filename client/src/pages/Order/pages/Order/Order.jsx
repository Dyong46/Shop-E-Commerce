import Dialog from '~/components/dialog/Dialog';
import Location from '../../components/Location';
import Pay from '../../components/Pay';
import Products from '../../components/Products';
import Voucher from '../../components/Voucher';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '~/Context/ContextCart/CartContext';
import LocationCard from '~/components/dialog/Card/LocationCard';
import VoucherCard from '~/components/dialog/Card/VoucherCard';
import { getAllDiscount } from '~/servers/discountService';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { addressGetAllByAccount } from '~/servers/addressService';
import { AppContext } from '~/contexts/app.contexts';
import { DiscountContext } from '~/Context/Discount/DiscountContext';
import { AddressContext } from '~/Context/Address/AddressContext';
import { PriceContext } from '~/Context/ContextCart/PriceCartContext';

const DialogBody = (props) => {
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
        {props.data.map((item, index) => {
          return <VoucherCard group={'voucher'} key={index} data={item} />;
        })}
      </div>
    </>
  );
};

const Order = () => {
  const [carts] = useContext(CartContext);
  const [money] = useContext(PriceContext);
  const [discounts] = useContext(DiscountContext);
  const [addres] = useContext(AddressContext);

  const [open, setOpen] = useState(false);
  const [openVoucher, setOpenVoucher] = useState(false);
  const [setad, setAd] = useState(false);

  const [discountss, setDiscountss] = useState([]);
  const getAll = async () => {
    try {
      const discounts = await getAllDiscount();
      setDiscountss(discounts);
    } catch (error) {
      console.error('Error loading discount: ', error);
      toast.error(error.message);
    }
  };
  const { profile } = useContext(AppContext);
  const [address, setAddress] = useState([]);
  const [addressDefault, setAddressDefault] = useState([]);
  const getAddress = async () => {
    try {
      const get = await addressGetAllByAccount(profile.id);
      setAddress(get);
      get.map((item) => {
        if (item.is_default == true) {
          setAddressDefault(item);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getAddressByAcc();
    getAddress();
    getAll();
    var currentUrl = window.location.href;

    if (address.length == 0) {
      toast.error('Vui lòng chọn địa chỉ');
    }
  }, []);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
    setAd(true);
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
      <Dialog
        className="bg-sky-50"
        body={<LocationCard address={address} status={setad} />}
        name={'Chọn địa chỉ'}
        open={open}
        handleToClose={handleToClose}
      />
      <Dialog
        className="bg-sky-50"
        body={<DialogBody data={discountss} />}
        name={'Chọn Shopee Voucher'}
        open={openVoucher}
        handleToClose={handleToCloseVoucher}
      />

      {open || openVoucher ? (
        <div
          className="bg-gray-500 opacity-70 z-10 fixed top-0 bottom-0 left-0 right-0 w-full h-full"
          onClick={close}
        ></div>
      ) : (
        <div className=""></div>
      )}

      <div className="bg-gray-50 pt-7 pb-20">
        <Location address_default={address} openDialog={handleClickToOpen} status={setad} />
        <div className="h-7"></div>
        <Products cartitem={carts} />
        <div className="h-7"></div>

        <Voucher openDialog={handleClickToOpenVoucher} />
        <div className="h-7"></div>
        <Pay cart={carts} money={money} address_list={address} address={addres} discounts={discounts} />
      </div>
    </>
  );
};

Order.propTypes = {
  data: PropTypes.array,
};

export default Order;
