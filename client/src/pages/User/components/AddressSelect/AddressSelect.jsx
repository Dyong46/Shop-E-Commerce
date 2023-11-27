import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getDistrict, getProvices, getWard } from '~/servers/vietnamProvincesService';

const AddressSelect = ({ value, onChange, errorMessage }) => {
  const [address, setAddress] = useState({
    province: value?.province || undefined,
    district: value?.district || undefined,
    ward: value?.ward || undefined
  })

  // Cập nhật lại address khi value thay đổi
  useEffect(() => {
    if (value) {
      setAddress({
        province: value?.province,
        district: value?.district,
        ward: value?.ward
      });
    }
  }, [value]);


  const { data: provinces } = useQuery({
    queryKey: ['province'],
    queryFn: () => {
      return getProvices();
    }
  })
  const [districts, setDistricts] = useState(null);
  const [wards, setWards] = useState(null)

  const getdistricts = useMutation({
    mutationFn: () => getDistrict(address.province),
    onSuccess: (res) => {
      setDistricts(res.districts)
    }
  })
  const getWards = useMutation({
    mutationFn: () => getWard(address.district),
    onSuccess: (res) => {
      setWards(res.wards)
    }
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newAddress = {
      ...address,
      [name]: value
    };
    setAddress(newAddress);
    onChange && onChange(newAddress);
  };

  // hadle provice and call api district
  const handleChangeProvice = (event) => {
    handleChange(event)
    setDistricts(null)
    setWards(null)
    if (address.province) {
      getdistricts.mutate()
    }
  }

  // handle district and call api ward
  const handleChangeDistrict = (event) => {
    handleChange(event)
    setWards(null)
    if (address.district) {
      getWards.mutate()
    }
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <select
            onChange={handleChangeProvice}
            name="province"
            className="h-10 w-full cursor-pointer rounded-sm border border-black/10 px-3 hover:border-orange"
            value={value?.province || address.province}
          >
            <option value="">Tỉnh/ Thành phố</option>
            {provinces && provinces.map((province) => (
              <option key={province.codename} value={province.code}>{province.name}</option>
            ))}
          </select>
        </div>
        <div>
          <select
            onChange={handleChangeDistrict}
            name="district"
            className="h-10 w-full cursor-pointer rounded-sm border border-black/10 px-3 hover:border-orange"
            value={value?.district || address.district}
            disabled={!districts}
          >
            <option value={undefined}>Quận/ Huyện</option>
            {districts && districts.map((district) => (
              <option key={district.codename} value={district.code}>{district.name}</option>
            ))}
          </select>
        </div>
        <div>
          <select
            onChange={handleChange}
            name="ward"
            className="h-10 w-full cursor-pointer rounded-sm border border-black/10 px-3 hover:border-orange"
            value={value?.ward || address.ward}
            disabled={!wards}
          >
            <option value={undefined}>Phường/ Xã</option>
            {wards && wards.map((ward) => (
              <option key={ward.codename} value={ward.code}>{ward.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-1 min-h-[1.25rem] text-sm text-red-600">{errorMessage}</div>
    </>
  );
}

AddressSelect.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
};

export default AddressSelect;
