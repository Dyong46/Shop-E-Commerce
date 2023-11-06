import Footer from '~/components/Footer';
import Header from '~/components/Header';
import PropTypes from 'prop-types';
import TinyHeader from '~/components/Header/TinyHeader';

const OrderLayout = ({ children }) => {
  return (
    <div>
      <TinyHeader />
      {children}
      <Footer />
    </div>
  );
};

OrderLayout.propTypes = {
  children: PropTypes.element,
};

export default OrderLayout;
