import { Fragment } from 'react';

const InputFile = () => {
  return (
    <Fragment>
      <input className="hidden" type="file" accept=".jpg,.jpeg,.png" />
      <button
        className="flex h-10 items-center justify-end rounded-sm border bg-white px-6 text-sm text-gray-600 shadow-sm"
        type="button"
      >
        Chọn ảnh
      </button>
    </Fragment>
  );
};

export default InputFile;
