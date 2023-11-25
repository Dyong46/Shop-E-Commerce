import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const AddressSelect = ({ value, onChange, errorMessage }) => {
  const [address, setAddress] = useState({
    province: value?.province || undefined,
    district: value?.district || undefined,
    ward: value?.ward || undefined
  })

  useEffect(() => {
    if (value) {
      setAddress({
        province: value?.provinces,
        district: value?.district,
        ward: value?.ward
      });
      console.log(address);
    }
  }, [value]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newAddress = {
      ...address,
      [name]: value || address[name]
    };
    setAddress(newAddress);
    console.log(address);
    onChange && onChange(newAddress);
  };

  return (
    <div className="mt-2">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <select
            onChange={handleChange}
            name="province"
            className="h-10 w-full cursor-pointer rounded-sm border border-black/10 px-3 hover:border-orange"
            value={value?.province || address.province}
          >
            <option>Tỉnh/ Thành phố</option>
            <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
            {/* API province here */}
          </select>
        </div>
        <div>
          <select
            onChange={handleChange}
            name="district"
            className="h-10 w-full cursor-pointer rounded-sm border border-black/10 px-3 hover:border-orange"
            value={value?.district || address.district}
          >
            <option>Quận/ Huyện</option>
            <option value="Quận 1">Quận 1</option>
            {/* API district here */}
          </select>
        </div>
        <div>
          <select
            onChange={handleChange}
            name="ward"
            className="h-10 w-full cursor-pointer rounded-sm border border-black/10 px-3 hover:border-orange"
            value={undefined}
          >
            <option>Phường/ Xã</option>
            <option value="Đ. Cách Mạng Tháng 8">Đ. Cách Mạng Tháng 8</option>
            {/* API address here */}
          </select>
        </div>
      </div>
      <div className="mt-1 min-h-[1.25rem] text-sm text-red-600">{errorMessage}</div>
    </div>
  );
}

AddressSelect.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
};

export default AddressSelect;
