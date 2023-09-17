import Location from "./components/location";
import Products from "./components/Products";
import Voucher from "./components/Voucher";

const Order = () => {
  return <div className="bg-gray-50">

    <div className="h-7"></div>
    <Location />
    <div className="h-7"></div>
    <Products />
    <div className="h-7"></div>
    <Voucher />
  </div>;
};

export default Order;
