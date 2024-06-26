import PropTypes from 'prop-types';
import Footer from '~/components/Footer';
import TinyHeader from '~/components/TinyHeader';
// import TinyHeader from '~/components/Header/TinyHeader';

const CartLayout = ({ children }) => {
  return (
    <div>
      <TinyHeader />
      {children}
      <Footer />
    </div>
  );
};

CartLayout.propTypes = {
  children: PropTypes.element,
};

export default CartLayout;
