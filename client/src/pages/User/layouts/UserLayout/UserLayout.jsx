import UserSideNav from '../../components/UserSideNav';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types'

const UserLayout = ({ children }) => {
  return (
    <div className='bg-neutral-100 py-16 text-sm text-gray-600'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-12'>
          <div className='md:col-span-3 lg:col-span-2'>
            <UserSideNav />
          </div>
          <div className='md:col-span-9 lg:col-span-10'>
            {children}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

UserLayout.propTypes = {
  children: PropTypes.node,
};

export default UserLayout;
