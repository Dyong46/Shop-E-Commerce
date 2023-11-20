import Footer from '~/components/Footer';
import Header from '~/components/Header';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
// import { memo } from 'react';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Outlet />
      <Footer />
    </div>
  )
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout
