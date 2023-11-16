import { useContext } from 'react';
import Popover from '../Popover';
import { Link } from 'react-router-dom';
import path from '~/constants/path';
import { getAvatarUrl } from '~/utils/utils';
import { AppContext } from '~/contexts/app.contexts';

const datasLeft = ['Kênh người bán', 'Tải ứng dụng', 'Kết nối'];

const NavHeader = () => {
	const { setIsAuthenticated, isAuthenticated, setProfile, profile } = useContext(AppContext)

	const handleLogout = () => {
		setProfile(null)
		setIsAuthenticated(false)
	}

	return (
		<div className='flex justify-between'>
			<div className="flex justify-center align-center my-1">
				{datasLeft.map((item, index) => (
					<Link
						className="py-2 px-3 flex align-center text-left hover:text-gray-200"
						key={index}
						to={path.home}
					>
						{item}
					</Link>
				))}

				<div className="flex items-center">
					<a href="https://www.facebook.com/ShopeeVN" target='_blank' rel="noreferrer"
						className='m-1 w-6 h-6 flex justify-center items-center bg-white rounded-full'>
						<svg
							className="w-[15px] h-[15px] text-gray-800 dark:text-orange"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 8 19"
						>
							<path
								fillRule="evenodd"
								d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
				</div>

				<div className="flex items-center">
					<a href="https://www.instagram.com/shopee_vn" target='_blank' rel="noreferrer"
						className="m-1 w-6 h-6 flex justify-center items-center bg-white rounded-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-[15px] w-[15px] dark:text-orange"
							fill="currentColor"
							viewBox="0 0 23 24"
						>
							<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
						</svg>
					</a>
				</div>
			</div>
			<div className="flex justify-end">
				<Popover
					className='flex cursor-pointer items-center py-1 hover:text-white/70'
					renderPopover={
						<div className='relative rounded-sm border border-gray-200 bg-white shadow-md'>
							<div className='flex flex-col py-2 pr-28 pl-3'>
								<button className='py-2 px-3 text-left hover:text-orange'>
									Tiếng Việt
								</button>
								<button className='mt-2 py-2 px-3 text-left hover:text-orange'>
									English
								</button>
							</div>
						</div>
					}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='h-5 w-5'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
						/>
					</svg>
					<span className='mx-1'>Tiếng Việt</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='h-5 w-5'
					>
						<path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
					</svg>
				</Popover>
				{isAuthenticated && (
					<Popover
						className='ml-6 flex cursor-pointer items-center py-1 hover:text-white/70'
						renderPopover={
							<div className='relative rounded-sm border border-gray-200 bg-white shadow-md'>
								<Link
									to={path.profile}
									className='block w-full bg-white py-3 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
								>
									Tài khoản của tôi
								</Link>
								<Link
									to={path.historyPurchase}
									className='block w-full bg-white py-3 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
								>
									Đơn mua
								</Link>
								<button
									onClick={handleLogout}
									className='block w-full bg-white py-3 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
								>
									Đăng xuất
								</button>
							</div>
						}
					>
						<div className='mr-2 h-6 w-6 flex-shrink-0'>
							<img src={getAvatarUrl(profile?.img)} alt='avatar' className='h-full w-full rounded-full object-cover' />
						</div>
						<div>{profile?.username}</div>
					</Popover>
				)}
				{!isAuthenticated && (
					<div className='flex items-center'>
						<Link to={path.register} className='mx-3 capitalize hover:text-white/70'>
							Đăng ký
						</Link>
						<div className='h-4 border-r-[1px] border-r-white/40' />
						<Link to={path.login} className='mx-3 capitalize hover:text-white/70'>
							Đăng nhập
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default NavHeader;
