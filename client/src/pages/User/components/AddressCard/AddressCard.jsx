import PropTypes from 'prop-types'
import Button from "~/components/Button";
import classNames from 'classnames';


const AddressCard = ({ address }) => {
	return (
		<div className='py-3'>
			<div className="heading mb-2 flex justify-between">
				<div className="flex items-center">
					<span className="me-2 text-lg">Vu Thai Duong</span>
					<div className="me-2 border-l-gray-300 border h-6"></div>
					<span className="text-gray-400">(+84) 343338112</span>
				</div>
				<div>
					<Button className="text-blue-600 me-2">Cập nhật</Button>
					{!address.is_default && (
						<Button className="text-blue-600">Xóa</Button>
					)}
				</div>
			</div>
			<div className="flex justify-between mb-2">
				<div>
					<div className="detailAddress">
						A1/31C7, Xã Vĩnh Lộc A
					</div>
					<div className="flex">
						Xã Vĩnh Lộc A, Huyện Bình Chánh, TP.Hồ Chí Minh
					</div>
				</div>
				<div>
					<Button className={classNames('border  px-3 py-1 border-gray-300 font-normal', {
						'hover:bg-gray-200 text-black': !address.is_default,
						' text-gray-500': address.is_default
					})} disabled={address.is_default}>
						Thiết lập mặc định
					</Button>
				</div>
			</div>
			{address.is_default && (
				<div>
					<span className="px-1 py border border-red-500 text-red-500 text-sm">Mặc định</span>
				</div>
			)}

		</div>
	);
}

AddressCard.propTypes = {
	address: PropTypes.object
}

export default AddressCard;
