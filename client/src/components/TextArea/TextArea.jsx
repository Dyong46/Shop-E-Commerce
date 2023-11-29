import PropTypes from 'prop-types'

const TextArea = ({
  errorMessage,
  className,
  name,
  register,
  rules,
  classNameInput = 'px-3 py-2 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
  classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm',
  ...rest
}) => {
  const registerResult = register && name ? register(name, rules) : null;

  return (
    <div className={'relative ' + className}>
      <textarea className={classNameInput} {...registerResult} {...rest} />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  );
}

TextArea.propTypes = {
  errorMessage: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
  rules: PropTypes.array,
  classNameInput: PropTypes.string,
  classNameError: PropTypes.string,
};

export default TextArea;
