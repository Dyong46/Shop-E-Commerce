import LocationCard from '~/components/dialog/card/LocationCard';
import Dialog from '~/components/dialog/Dialog';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AddressContext } from '~/Context/Address/AddressContext';

const Location = (props) => {
  const [addres] = useContext(AddressContext);
  const { status } = props;

  if (status == true) {
    return (
      <div key={addres.id}>
        <div className="container">
          <div className="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-White-800 ">
            <div className="flex flex-row">
              <svg viewBox="0 0 384 512" fill="currentColor" height="1rem" width="1rem">
                <path d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" />
              </svg>
              <h1 className="mx-2 text-center text-xl pb-2">Địa chỉ nhận hàng</h1>
            </div>
            <div className="flex flex-row">
              <p className=" font-bold">
                {addres.fullname} (+84) {addres.phone}
              </p>
              <p className="mb-3 ml-3 font-normal text-gray-500 dark:text-gray-400">
                {addres.specific_address}, {addres.wards}, {addres.district}, {addres.city}
              </p>
              <p className="text-xs font-bold ml-4 mt-1 dark:text-orange h-4 outline outline-1 outline-orange">
                Mặt Định
              </p>
              <button onClick={props.openDialog} className="text-base mx-5 text-blue-600">
                Thay đổi
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div key={addres.id}>
        <div className="container">
          <div className="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-White-800 ">
            <div className="flex flex-row">
              <svg viewBox="0 0 384 512" fill="currentColor" height="1rem" width="1rem">
                <path d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" />
              </svg>
              <h1 className="mx-2 text-center text-xl pb-2">Địa chỉ nhận hàng</h1>
            </div>
            <div className="flex flex-row">
              {props.address_default.map((item) => {
                if (item.is_default == true) {
                  return (
                    <>
                      <p className=" font-bold">
                        {item.fullname} (+84) {item.phone}
                      </p>
                      <p className="mb-3 ml-3 font-normal text-gray-500 dark:text-gray-400">
                        {item.specific_address}, {item.wards}, {item.district}, {item.city}
                      </p>
                      <p className="text-xs font-bold ml-4 mt-1 dark:text-orange h-4 outline outline-1 outline-orange">
                        Mặt Định
                      </p>
                      <button onClick={props.openDialog} className="text-base mx-5 text-blue-600">
                        Thay đổi
                      </button>
                    </>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

Location.propTypes = {
  address_default: PropTypes.array,
  status: PropTypes.bool,
  openDialog: PropTypes.func,
};

export default Location;
