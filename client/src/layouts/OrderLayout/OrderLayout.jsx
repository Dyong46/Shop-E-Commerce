import Footer from '~/components/Footer';
import HeaderOrder from '~/components/Header/HeaderOrder';

const OrderLayout = ({ children }) => {
  return (
    <div>
      <HeaderOrder />
      {children}
      <Footer />
    </div>
  );
};

export default OrderLayout;
