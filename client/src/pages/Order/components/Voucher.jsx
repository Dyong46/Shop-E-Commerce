const Voucher = (props) => {
  return <div>
    <div className=" container ">
      <div className="max-w divide-y divide-dashed bg-white border border-gray-200 rounded-lg shadow dark:bg-White-800 ">
        <div className="p-5 col-span-2 divide-y">
          <div className="flex w-full p-6 columns-2">
            <div className="flex w-full">
              <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path fill="orange" d="M2 9.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 1 0 0-5zM14 5H4v2.968a4.5 4.5 0 0 1 0 8.064V19h10V5zm2 0v14h4v-2.968a4.5 4.5 0 0 1 0-8.064V5h-4z" />
                </g>
              </svg>

              <div className="mx-2">

                Shopee Voucher
              </div>
            </div>

            <button onClick={props.openDialog} className="w-full flex text-blue-700 flex-row-reverse">
              Chọn voucher
            </button>
          </div>
          <div className="flex w-full p-6 columns-2">
            <div className="flex w-full">
              <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path fill="#fcd34d" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.5-6H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z" />
                </g>
              </svg>
              <div className="mx-2 ">
                Được đồng kiểm.
              </div>
              <div className="text-gray-500 truncate dark:text-gray-400">Dùng 900 Shopee Xu</div>
            </div>

            <div className=" w-full text-gray-500 truncate dark:text-gray-400 flex  flex-row-reverse">
              <div className="flex">

                [-₫900]
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>;
};

export default Voucher;
