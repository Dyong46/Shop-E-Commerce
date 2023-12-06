import PropTypes from 'prop-types'
// const imgStyle = {
//   width: '100px',
//   height: '100px',
//   marginRight: '5px'
// };
const LocationCard = (props) => {
  const { group, idVoucher, name, phone } = props

  return (
    <div className="flex my-6">
      <input type="radio" name={group} value={idVoucher} />

      <div className="flex flex-col grow ml-4">
        <div className="flex ">
          <p className="font-medium">Lê Như Hoang
            {name}
          </p>
          <p className="divider-title-location text-gray-500 px-3 ml-4 text-base ">{phone}</p>
        </div>

        <p className=" text-gray-500">58 Trương Vĩnh Ký</p>
        <p className='text-gray-500'>Phường Tân Thành, Quận Tân Phú, TP. Hồ Chí Minh</p>
        <div className="w-14">
          <p className="text-xs font-bold mt-1 dark:text-orange h-4 outline outline-1 outline-orange">
            Mặc định
          </p>
        </div>
      </div>

      <button className="text-blue-800">
        Cập nhật
      </button>

    </div >
  )
}

LocationCard.propTypes = {
  group: PropTypes.string,
  idVoucher: PropTypes.number,
  name: PropTypes.string,
  phone: PropTypes.string
}
export default LocationCard;
