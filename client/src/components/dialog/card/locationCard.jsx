import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { AddressContext } from '~/Context/Address/AddressContext';
import { getNameFromNameId } from '~/utils/utils';

const LocationCard = (props) => {
  const { group, idVoucher, addDefault } = props;
  const [check, setCheck] = useState(true);

  const [addres, setAdres] = useContext(AddressContext);

  const tooggle = (value, item) => {
    if (check == value) {
      setCheck(null);
    } else {
      setAdres(item);
      setCheck(value);
    }
  };

  return (
    <div>
      {props.address.map((item, index) => {
        return (
          <div className="flex my-6" key={index}>
            {item.is_default == true ? (
              <input
                type="radio"
                name={group}
                value={idVoucher}
                checked={check === true}
                onChange={() => tooggle(true, item)}
              />
            ) : (
              <input
                type="radio"
                name={group}
                value={idVoucher}
                checked={check === false}
                onChange={() => tooggle(false, item)}
              />
            )}

            <div className="flex flex-col grow ml-4">
              <div className="flex ">
                <p className="font-medium">{item.fullname}</p>
                <p className="divider-title-location text-gray-500 px-3 ml-4 text-base ">{item.phone}</p>
              </div>

              <p className=" text-gray-500">{item.specific_address}</p>
              <p className="text-gray-500">
                {getNameFromNameId(item.wards)}, {getNameFromNameId(item.district)}, {getNameFromNameId(item.city)}
              </p>
              <div className="w-14">
                {item.is_default == true ? (
                  <p className="text-xs font-bold mt-1 dark:text-orange h-4 outline outline-1 outline-orange">
                    Mặc định
                  </p>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <button className="text-blue-800">Cập nhật</button>
          </div>
        );
      })}
    </div>
  );
};

LocationCard.propTypes = {
  group: PropTypes.string,
  idVoucher: PropTypes.number,
  name: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.array,
  addDefault: PropTypes.object,
};
export default LocationCard;
