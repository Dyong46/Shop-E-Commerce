import Footer from '~/components/Footer';
import Header from '~/components/Header';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element,
};

export default MainLayout;
