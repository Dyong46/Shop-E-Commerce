import Footer from '~/components/Footer';
import RegisterHeader from '~/components/RegisterHeader';
import PropTypes from 'prop-types';

const RegisterLayout = ({ children }) => {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  );
};

RegisterLayout.propTypes = {
  children: PropTypes.element,
};

export default RegisterLayout;
