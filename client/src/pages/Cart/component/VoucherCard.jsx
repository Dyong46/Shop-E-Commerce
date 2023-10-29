const VoucherCard = (props) => {
  const imgStyle = {
    width: '100px',
    height: '100px',
    marginRight: '5px'
  };

  return (
    <div className="flex flex-col my-6">
      <div className="flex">
        <div style={imgStyle}>
          <img src={props.img} />
        </div>
        <div className="flex flex-col grow">
          <p className="font-medium">Giảm tối đa ₫25k</p>
          <p className='text-gray-600'>Đơn Tối Thiểu ₫25k</p>
          <div className="w-24">
            <p className="text-xs font-bold mt-1  dark:text-orange h-4 outline outline-1 outline-orange">
              Chỉ có trên live
            </p>
          </div>
          <div className="pt-2 text-orange text-xs">Sắp hết hạn: còn 1 ngày</div>
        </div>
        <input type="radio" name={props.group} value={props.idVoucher} />
      </div>
      <div className="text-orange text-sm flex">
        <div className=" mx-1">
          <svg fill="orange" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 32 32" id="error"><path d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm0 30C8.28 30 2 23.72 2 16S8.28 2 16 2s14 6.28 14 14-6.28 14-14 14zm0-24a2 2 0 0 0-2 2v10a2 2 0 0 0 4 0V8a2 2 0 0 0-2-2zm-2 17.968a2 2 1080 1 0 4 0 2 2 1080 1 0-4 0z"></path></svg>
        </div>

        <p>Vui lòng chọn sản phẩm trong giỏ hàng để áp dụng Voucher này</p></div>

    </div>
  )
}
export default VoucherCard;
