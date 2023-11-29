import PropTypes from 'prop-types'
import Button from "~/components/Button";
import classNames from 'classnames';
import { toast } from 'react-toastify';
import { changeDefaultAddress } from '~/servers/addressService';
import UpdateAddressDialog from '../UpdateAddressDialog';
import DeleteAddressDialog from '../DeleteAddressDialog';

const AddressCard = ({ address }) => {
  const handleChangeDefault = async () => {
    try {
      await changeDefaultAddress(address.id)
      toast.success("Change default success")
    } catch (error) {
      toast.error("Change default error")
    }
  }

  return (
    <div className='py-3'>
      <div className="heading mb-2 flex justify-between">
        <div className="flex items-center">
          <span className="me-2 text-lg">{address.fullname}</span>
          <div className="me-2 border-l-gray-300 border h-6"></div>
          <span className="text-gray-400">(+84) {address.phone}</span>
        </div>
        <div>
          <UpdateAddressDialog body={address} />
          {!address.is_default && (
            <DeleteAddressDialog id={address.id} />
          )}
        </div>
      </div>
      <div className="flex justify-between mb-2">
        <div>
          <div className="detailAddress">
            {address.specific_address}
          </div>
          <div className="flex">
            {address.city}, {address.district}, {address.wards}
          </div>
        </div>
        <div>
          <Button
            onClick={handleChangeDefault}
            className={classNames('border  px-3 py-1 border-gray-300 font-normal', {
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
