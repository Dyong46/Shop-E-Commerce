import Button from "~/components/Button";
import UserLayout from "../../layouts/UserLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddressCard from "../../components/AddressCard";

const address = [
	{
		"id": 1,
		"fullname": "Phạm Trần Minh Thư",
		"phone": "0247259910",
		"city": "Thành phố HCM",
		"district": "Quận 1",
		"wards": "Phường 1",
		"specific_address": "123 Khu phố 1",
		"is_default": true,
	},
	{
		"id": 2,
		"fullname": "Duong",
		"phone": "0247259910",
		"city": "Thành phố HCM",
		"district": "Quận 4",
		"wards": "Phường 5",
		"specific_address": "123",
		"is_default": false,
	},
]

const Address = () => {
	return (
		<UserLayout>
			<div className="rounded-sm bg-white px-2 pb-10 shadow md:px-7 md:pb-20">
				<div className="border-b border-b-gray-200 py-6 flex">
					<h1 className="text-lg font-medium capitalize text-gray-900 me-auto">Địa chỉ Của Tôi</h1>
					<Button
						className="flex items-center justify-center bg-red-500 py-2 px-4 rounded-sm text-white hover:bg-red font-normal"
					>
						<FontAwesomeIcon icon={faPlus} className="me-2" />
						Thêm địa chỉ mới
					</Button>
				</div>
				<div className="mt-4">
					<h1 className="text-lg font-medium capitalize text-gray-900 me-auto mb-4">Địa chỉ</h1>
					{address && address.length > 0 && address.map((item) => {
						return (
							<AddressCard key={item.id} address={item} />
						)
					})}
				</div>
			</div>
		</UserLayout>
	);
}

export default Address;
