import Location from './components/Location';
import Pay from './components/Pay';
import Products from './components/Products';
import Voucher from './components/Voucher';
import { useContext } from 'react';
import { CartContext } from '~/Context/ContextCart/CartContext';

const Order = () => {

  const [carts] = useContext(CartContext);

  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  const DialogBodyLocation = (props) => {
    return (
      <>
        <div className="overflow-y-auto h-96">
          <LocationCard />
        </div>
      </>

    )
  }

  console.log(carts, 'order');
  return (
    <div className="bg-gray-50 pt-7 pb-20">
      <Location />
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
  );
};

export default Order;
