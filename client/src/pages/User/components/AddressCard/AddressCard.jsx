import PropTypes from 'prop-types'
import Button from "~/components/Button";
import classNames from 'classnames';
import { toast } from 'react-toastify';
import { changeDefaultAddress } from '~/servers/addressService';
import UpdateAddressDialog from '../UpdateAddressDialog';
import DeleteAddressDialog from '../DeleteAddressDialog';
import { getNameFromNameId } from '~/utils/utils';
import { useContext } from 'react';
import { AppContext } from '~/contexts/app.contexts';
import { useQueryClient } from '@tanstack/react-query';

const AddressCard = ({ address }) => {
  const queryClient = useQueryClient();
  const { profile } = useContext(AppContext)
  const handleChangeDefault = async () => {
    try {
      await changeDefaultAddress(profile.id, address.id)
      toast.success("Thay đổi địa chỉ mặc định thành công")
      await queryClient.invalidateQueries(['address']);
    } catch (error) {
      console.log(error.response.message);
      toast.error("Thay đổi địa chỉ thất bại. Vui lòng thử lại sau !!!")
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
            {getNameFromNameId(address.city)}, {getNameFromNameId(address.district)}, {getNameFromNameId(address.wards)}
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
          <span className="px-1 py-1 border border-red-500 text-red-500 text-sm">Mặc định</span>
        </div>
      )}
    </div>
  );
}

AddressCard.propTypes = {
  address: PropTypes.object
}

export default AddressCard;
