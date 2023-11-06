import Dialog from '~/components/dialog/dialog';
import Location from './components/Location';
import Pay from './components/Pay';
import Products from './components/Products';
import Voucher from './components/Voucher';
import { useContext, useState } from 'react';
import { CartContext } from '~/Context/ContextCart/CartContext';
import LocationCard from '~/components/dialog/card/locationCard';

const Order = () => {

  const [carts] = useContext(CartContext);

  const [open, setOpen] = useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <>

      <Dialog className="bg-sky-50" body={<LocationCard />} name={'Chọn Shopee Voucher'} open={open} handleToClose={handleToClose} />

      {
        open ?

          <div className='bg-gray-500 opacity-70 z-10 fixed top-0 bottom-0 left-0 right-0 w-full h-full'></div> :
          <div className=''></div>
      }

      <div className="bg-gray-50 pt-7 pb-20">
        <Location openDialog={handleClickToOpen} />
        <div className="h-7"></div>
        {carts.map((item) => {
          return (
            <>
              <Products item={item} />
              <div className="h-7"></div>
            </>
          );
        })}

        <Voucher />
        <div className="h-7"></div>
        <Pay />
      </div>

    </>

  );
};

export default Order;
