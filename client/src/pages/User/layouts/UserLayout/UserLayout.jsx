import PropTypes from 'prop-types';
import UserSideNav from '../../components/UserSideNav';

const UserLayout = ({ children }) => {
  return (
    <div className="bg-neutral-100 py-16 text-sm text-gray-600">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="md:col-span-3 lg:col-span-2">
            <UserSideNav />
          </div>
          <div className="md:col-span-9 lg:col-span-10">{children}</div>
        </div>
      </div>
    </div>
  );
};

UserLayout.propTypes = {
  children: PropTypes.node,
};

export default UserLayout;
