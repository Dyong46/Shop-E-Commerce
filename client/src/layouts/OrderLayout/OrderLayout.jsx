import Footer from '~/components/Footer';
import HeaderOrder from '~/components/Header/HeaderOrder';
import PropTypes from 'prop-types';

const OrderLayout = ({ children }) => {
  return (
    <div>
      <HeaderOrder />
      {children}
      <Footer />
    </div>
  );
};

OrderLayout.propTypes = {
  children: PropTypes.element,
};

export default OrderLayout;
