import PropTypes from 'prop-types';
import TinyHeader from '~/components/Header/TinyHeader';

const CartLayout = ({ children }) => {
	return (
		<div>
			<TinyHeader />
			{children}
		</div>
	);
};

CartLayout.propTypes = {
	children: PropTypes.element,
};

export default CartLayout;
