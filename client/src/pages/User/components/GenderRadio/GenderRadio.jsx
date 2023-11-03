import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const GenderRadio = ({ value, onChange, errorMessage }) => {
  const [gender, setGener] = useState(true);

  useEffect(() => {
    if (value) {
      setGener(value);
    }
  }, [value]);

  const handleChange = (event) => {
    const { id } = event.target;
    const newGender = id === 'male' ? true : false;
    setGener(newGender);
    onChange && onChange(newGender);
  };

  return (
    <div className="mt-2 flex flex-col flex-wrap sm:flex-row">
      <div className="truncate pt-3 capitalize sm:w-[20%] sm:text-right">Giới tính</div>
      <div className="sm:w-[80%] sm:pl-5">
        <div className="px-3 pt-3 flex justify-start items-center">
          <div className="me-2">
            <input
              onChange={handleChange}
              type="radio"
              name="gender"
              id="male"
              className="me-1 border-gray-300 focus:shadow-sm focus:bg-orange text-lg w-[40] h-[40]"
              checked={value || gender}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              type="radio"
              name="gender"
              id="female"
              className="me-1 border-gray-300 focus:shadow-sm focus:bg-orange text-lg w-[40] h-[40]"
              checked={!value || !gender}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="mt-1 min-h-[1.25rem] text-sm text-red-600">{errorMessage}</div>
      </div>
    </div>
  );
};

GenderRadio.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
};

export default GenderRadio;
