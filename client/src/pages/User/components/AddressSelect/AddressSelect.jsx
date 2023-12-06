import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getDistrict, getProvices, getWard } from '~/servers/vietnamProvincesService';
import { generateNameId, getIdFromNameId } from '~/utils/utils';

const AddressSelect = ({ value, onChange, errorMessage }) => {
  const [address, setAddress] = useState({
    province: value?.province || "",
    district: value?.district || "",
    ward: value?.ward || ""
  })

  // Cập nhật lại address khi value thay đổi
  useEffect(() => {
    if (Object.keys(value).length) {
      setAddress({
        province: value?.province,
        district: value?.district,
        ward: value?.ward
      });
      if (value.district) {
        getdistricts.mutate()
      }
      if (value.ward) {
        getWards.mutate()
      }
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
    mutationFn: () => getDistrict(getIdFromNameId(address.province)),
    onSuccess: (res) => {
      setDistricts(res.districts)
    }
  })
  const getWards = useMutation({
    mutationFn: () => getWard(getIdFromNameId(address.district)),
    onSuccess: (res) => {
      setWards(res.wards)
    }
  })

  const handleChange = (event, param) => {
    const { name, value } = event.target;
    let newAddress = {
      ...address,
      [name]: value
    };
    setAddress(newAddress);
    console.log(1111, newAddress);
    onChange && onChange(newAddress);
    if (param === "provice") {
      setDistricts(null)
      setWards(null)
      if (value !== "") {
        getdistricts.mutate()
        newAddress = {
          province: value,
          district: "",
          ward: ""
        }
        onChange && onChange(newAddress);
      } else {
        newAddress = {
          province: "",
          district: "",
          ward: ""
        }
        onChange && onChange(newAddress);
      }
    } else if (param === "district") {
      setWards(null)
      if (value !== "") {
        getWards.mutate()
      }
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <select
            onChange={(event) => handleChange(event, "provice")}
            name="province"
            className="h-10 w-full cursor-pointer rounded-sm border border-black/10 px-3 hover:border-orange"
            value={value?.province || address.province}
          >
            <option value="">Tỉnh/ Thành phố</option>
            {provinces && provinces.map((province) => (
              <option key={province.codename} value={generateNameId({ name: province.name, id: province.code })}>{province.name}</option>
            ))}
          </select>
        </div>
        <div>
          <select
            onChange={(event) => handleChange(event, "district")}
            name="district"
            className="h-10 w-full cursor-pointer rounded-sm border border-black/10 px-3 hover:border-orange"
            value={value?.district || address.district}
            disabled={!districts}
          >
            <option value="">Quận/ Huyện</option>
            {districts && districts.map((district) => (
              <option key={district.codename} value={generateNameId({ name: district.name, id: district.code })}>{district.name}</option>
            ))}
          </select>
        </div>
        <div>
          <select
            onChange={(event) => handleChange(event, "ward")}
            name="ward"
            className="h-10 w-full cursor-pointer rounded-sm border border-black/10 px-3 hover:border-orange"
            value={value?.ward || address.ward}
            disabled={!wards}
          >
            <option value="">Phường/ Xã</option>
            {wards && wards.map((ward) => (
              <option key={ward.codename} value={generateNameId({ name: ward.name, id: ward.code })}>{ward.name}</option>
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
