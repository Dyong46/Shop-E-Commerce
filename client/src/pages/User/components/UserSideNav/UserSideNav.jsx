import classNames from 'classnames';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import path from '~/constants/path';
import { AppContext } from '~/contexts/app.contexts';
import { getAvatarUrl } from '~/utils/utils';
import location from '~/assets/images/location.png'
import changePassword from '~/assets/images/reset-password.png'

const UserSideNav = () => {
  const { profile } = useContext(AppContext)

  return (
    <div>
      <div className="flex items-center border-b border-b-gray-200 py-4">
        <Link to={path.profile} className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-black/10">
          <img src={getAvatarUrl(profile?.img)} alt="" className="h-full w-full object-cover" />
        </Link>
        <div className="flex-grow pl-4">
          <div className="mb-1 truncate font-semibold text-gray-600">{profile?.username}</div>
          <Link to={'/user/profile'} className="flex items-center capitalize text-gray-500">
            <svg
              width={12}
              height={12}
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: 4 }}
            >
              <path
                d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48"
                fill="#9B9B9B"
                fillRule="evenodd"
              />
            </svg>
            Sửa hồ sơ
          </Link>
        </div>
      </div>
      <div className="mt-7">
        <NavLink
          to={'/user/profile'}
          className={({ isActive }) =>
            classNames('mt-4 flex items-center capitalize  transition-colors', {
              'text-orange': isActive,
              'text-gray-600': !isActive,
            })
          }
        >
          <div className="mr-3 h-[22px] w-[22px]">
            <img src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4" alt="" className="h-full w-full" />
          </div>
          Tài khoản của tôi
        </NavLink>
        <NavLink
          to={'/user/address'}
          className={({ isActive }) =>
            classNames('mt-4 flex items-center capitalize  transition-colors', {
              'text-orange': isActive,
              'text-gray-600': !isActive,
            })
          }
        >
          <div className="mr-3 h-[22px] w-[22px]">
            <img src={location} alt="" className="h-full w-full" />
          </div>
          Địa chỉ
        </NavLink>
        <NavLink
          to={'/user/password'}
          className={({ isActive }) =>
            classNames('mt-4 flex items-center capitalize  transition-colors', {
              'text-orange': isActive,
              'text-gray-600': !isActive,
            })
          }
        >
          <div className="mr-3 h-[22px] w-[22px]">
            <img src={changePassword} alt="" className="h-full w-full" />
          </div>
          Đổi mật khẩu
        </NavLink>
        <NavLink
          to={'/user/purchase'}
          className={({ isActive }) =>
            classNames('mt-4 flex items-center capitalize  transition-colors', {
              'text-orange': isActive,
              'text-gray-600': !isActive,
            })
          }
        >
          <div className="mr-3 h-[22px] w-[22px]">
            <img src="https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078" alt="" className="h-full w-full" />
          </div>
          Đơn mua
        </NavLink>
      </div>
    </div>
  );
};

export default UserSideNav;
