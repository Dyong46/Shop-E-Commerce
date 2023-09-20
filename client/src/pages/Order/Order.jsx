import Location from './components/Location';
import Pay from './components/Pay';
import Products from './components/Products';
import Voucher from './components/Voucher';

const Order = () => {
  return (
    <div className="bg-gray-50 pt-7 pb-20">
      <Location />
      <div className="h-7"></div>
      <Products />
      <div className="h-7"></div>
      <Voucher />
      <div className="h-7"></div>
      <Pay />
    </div>
  );
};

export default Order;
