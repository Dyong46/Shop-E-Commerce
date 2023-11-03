import Header from '~/components/Header';
import PropTypes from 'prop-types';

const CartLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container-fluid ms-3 pt-2 pb-4 px-3">{children}</main>
    </div>
  );
};

CartLayout.propTypes = {
  children: PropTypes.element,
};

export default CartLayout;
