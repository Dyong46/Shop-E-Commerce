import { useStore } from '~/Context';
import './style.scss';
import Footer from '~/components/Footer';
import CartDetails from './component/CartDetail';
import TotalCart from './component/TotalCart';

const Cart = () => {
	const [state] = useStore();

	const { todos } = state;

	const checkAllItem = () => {
		const get = document.querySelector('.check-all');
		const getItem = document.querySelectorAll('.check-item');
		const getNameShop = document.querySelectorAll('.check-shop');
		var s = true;
		for (var i = 0; i < getItem.length; i++) {
			if (get.checked) {
				getItem[i].checked = get.checked;
				getNameShop[i].checked = get.checked;
			} else {
				s = false;
				getItem[i].checked = s;
				getNameShop[i].checked = s;
			}
		}
	};

	return (
		<div>
			<div className="bg-s py-5">
				<div className="flex justify-center justify-content-center ">
					<div className="flex bg-white header-cart py-6">
						<div className="">
							<input className="w-10 h-6 ml-9 check-all" onChange={checkAllItem} type="checkbox" name="" id="" />
						</div>
						<div className="wi">
							<p className="ml-3">Sản phẩm</p>
						</div>
						<div className="w-36">
							<p>Đơn Giá</p>
						</div>
						<div className="w-36">
							<p>Số Lượng</p>
						</div>
						<div className="w-36">
							<p>Số Tiền</p>
						</div>
						<div className="w-36">
							<p>Thao Tác</p>
						</div>
					</div>
				</div>
				{todos.map((res, index) => {
					return <CartDetails key={res.id} cart={res} index={index} />;
				})}

				<TotalCart />
				<Footer />
			</div>
		</div>
	);
};

export default Cart;
