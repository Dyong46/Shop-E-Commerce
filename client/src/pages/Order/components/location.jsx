import PropTypes from 'prop-types'

const Location = ({ openDialog }) => {
  return <div>
    <div className="container">
      <div className="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-White-800 ">
        <div className="flex flex-row items-center mb-3">
          <svg
            viewBox="0 0 384 512"
            fill="currentColor"
            height="1rem"
            width="1rem"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" />
          </svg>
          <div className="mx-2 text-center text-xl">Địa chỉ nhận hàng</div>
        </div>
        <div className="flex flex-row items-center">
          <div className="font-bold">
            Lê Như Hoàng (+84) 888551003
          </div>
          <div className="ml-3 font-normal text-gray-500 dark:text-gray-400">
            58 Trương Vĩnh Ký, Phường Tân Thành, Quận Tân Phú, TP. Hồ Chí Minh
          </div>
          <div className='ml-4'>
            <div className="text-xs px-1 py-1 font-bold dark:text-orange outline outline-1 outline-orange">
              Mặc Định
            </div>
          </div>
          <button onClick={openDialog} className="text-base mx-5 text-blue-600">
            Thay đổi
          </button>
        </div>
      </div>
    </div>
  </div>;
};

Location.propTypes = {
  openDialog: PropTypes.fuc
}

export default Location;
