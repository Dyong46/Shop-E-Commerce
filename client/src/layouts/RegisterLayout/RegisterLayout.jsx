import Footer from '~/components/Footer';
import RegisterHeader from '~/components/RegisterHeader';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

const RegisterLayout = ({ children }) => {
	return (
		<div>
			<RegisterHeader />
			{children}
			<Outlet />
			<Footer />
		</div>
	);
};

RegisterLayout.propTypes = {
	children: PropTypes.element,
};

export default RegisterLayout;
