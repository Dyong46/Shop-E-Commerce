import Location from './components/Location';
import Pay from './components/Pay';
import Products from './components/Products';
import Voucher from './components/Voucher';
import { useContext } from 'react';
import { CartContext } from '~/Context/ContextCart/CartContext';
import { PriceContext } from '~/Context/ContextCart/PriceCartContext';

const Order = () => {
  const [carts] = useContext(CartContext);
  const [money] = useContext(PriceContext);
  // console.log(carts, 'order');
  return (
    <div className="bg-gray-50 pt-7 pb-20">
      <Location />
      <div className="h-7"></div>
      <Products cartitem={carts} />
      <div className="h-7"></div>

      <Voucher />
      <div className="h-7"></div>
      <Pay money={money} cart={carts} />
    </div>
  );
};

export default Order;
