import { forwardRef, useState } from 'react';

export const InputNumber = forwardRef(function InputNumberInner(
  {
    errorMessage,
    className,
    classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
    classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm',
    onChange,
    value,
    ...rest
  },
  ref,
) {
  const [localValue, setLocalValue] = useState(value || '');

  const handleChange = (event) => {
    const { value } = event.target;
    if (/^\d+$/.test(value) || value === '') {
      // Execute the onChange callback passed in as props
      onChange && onChange(event);
      // Update the localValue state
      setLocalValue(value);
    }
  };

  return (
    <div className={className}>
      <input
        className={classNameInput}
        onChange={handleChange}
        value={value === undefined ? localValue : value}
        {...rest}
        ref={ref}
      />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  );
});

export default InputNumber;
