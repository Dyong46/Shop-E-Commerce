import Footer from '~/components/Footer';
import Header from '~/components/Header';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { memo } from 'react';

const MainLayoutInner = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Outlet />
      <Footer />
    </div>
  )
};

MainLayoutInner.propTypes = {
  children: PropTypes.node,
};

const MainLayout = memo(MainLayoutInner)
export default MainLayout
