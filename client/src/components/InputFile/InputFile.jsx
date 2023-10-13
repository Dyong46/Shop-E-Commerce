import { Fragment, useRef } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import config from '~/constants/config';

const InputFile = ({ onChange }) => {
  const fileInputRef = useRef(null);

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  const onFileChange = (event) => {
    const fileFromLocal = event.target.files?.[0];
    fileInputRef.current?.setAttribute('value', '');
    if (fileFromLocal && (fileFromLocal.size >= config.maxSizeUploadAvatar || !fileFromLocal.type.includes('image'))) {
      toast.error('Dụng lượng file tối đa 1 MB. Định dạng:.JPEG, .PNG');
    } else {
      onChange && onChange(fileFromLocal);
      toast.success('Upload ảnh thành công');
    }
  };

  return (
    <Fragment>
      <input
        className="hidden"
        type="file"
        accept=".jpg,.jpeg,.png"
        ref={fileInputRef}
        onChange={onFileChange}
        onClick={(event) => {
          event.target.value = null;
        }}
      />
      <button
        className="flex h-10 items-center justify-end rounded-sm border bg-white px-6 text-sm text-gray-600 shadow-sm"
        type="button"
        onClick={handleUpload}
      >
        Chọn ảnh
      </button>
    </Fragment>
  );
};

InputFile.propTypes = {
  onChange: PropTypes.func,
};

export default InputFile;
