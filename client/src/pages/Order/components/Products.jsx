const Products = () => {
  return <div>
    <div className="container">
      <div className="max-w divide-y divide-dashed bg-white border border-gray-200 rounded-lg shadow dark:bg-White-800 ">
        <div className="p-6 ">
          <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-2">
            <div className="col-span-2 mb-5">
              Sản phẩm
            </div>

            <div className="flex gap-x-8 grid-cols-7 flex-row flex-nowrap">
              <div className="col-span-2 w-full">Đơn giá</div>
              <div className="col-span-2 w-full">Số lượng</div>
              <div className="col-span-3 w-full">Thành tiền</div>
            </div>
            <div className="col-span-3 flex divide-x h-5 divide-teal-500">
              <div className=" flex align-top">
                <p className="text-xs font-bold mt-1 dark:bg-orange dark:text-white h-4 outline outline-1 outline-orange">Yêu thích +</p>
                <p className="mx-2">BMM DIY</p>
              </div>

              <div className="flex h-5 mx-2 px-2">
                <svg
                  className="mt-1"
                  viewBox="0 0 1000 1000"
                  fill="#14b8a6"
                  height="1em"
                  width="1em"
                >
                  <path d="M290 610h350c1.333 0 3.333-.667 6-2h4v92c0 26.667-9.667 50-29 70s-43 30-71 30H300L150 950V800h-50c-26.667 0-50-10-70-30S0 726.667 0 700V400c0-28 10-51.667 30-71s43.333-29 70-29h190v310M900 50c28 0 51.667 9.667 71 29s29 43 29 71v300c0 26.667-9.667 50-29 70s-43 30-71 30h-50v150L700 550H350V150c0-28 10-51.667 30-71s43.333-29 70-29h450" />
                </svg>
                <p className="mx-1 text-teal-500 align-center">Chat ngay</p>
              </div>
            </div>
          </div>

          <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1">
            <div className="truncate">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, minus cum, aliquam aperiam porro consequuntur perspiciatis tempore qui eos, voluptates odio cumque assumenda ratione alias deleniti reprehenderit et. Soluta, laborum.
            </div>
            <p className="mb-3 ml-3 font-normal text-gray-500 truncate dark:text-gray-400">Loại: Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quisquam. Illo magni vero aperiam, fuga commodi debitis, eos fugiat earum at autem, libero architecto perspiciatis consequatur. Fugiat voluptatibus illum officia.</p>
            <div className="flex gap-x-8 grid-cols-7 flex-row">
              <div className="col-span-2 w-full">đ20.000</div>
              <div className="col-span-2 w-full">1</div>
              <div className="col-span-2 w-full">đ20.000</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-teal-50 divide-y divide-dashed">
          <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1 divide-x divide-dashed">
            <div className="flex p-3">
              <p>Lời nhắn:</p>
              <input type="text" className="border mx-3 h-10" />
            </div>

            <div className="p-5 col-span-2 divide-y divide-dashed">
              <div className="grid grid-cols-4">
                <div className="w-full text-teal-500">Đơn vị vận chuyển:</div>
                <div className="w-full ">
                  Nhanh
                  <p className="mb-3 text-xs font-normal text-gray-500 dark:text-gray-400">Nhận hàng vào 19 Th09 - 22 Th09</p>
                </div>
                <div className="w-full text-blue-700">Thay đổi</div>
                <div className="w-full">₫27.500</div>
              </div>
              <div className="flex p-3">Được đồng kiểm.
                <svg
                  className="mt-1 mx-2"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
                  <path d="M5.255 5.786a.237.237 0 00.241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 00.25.246h.811a.25.25 0 00.25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-3 flex flex-row-reverse">
            <div className="flex">

              <div className="pt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Tổng số tiền (1 sản phẩm):</div>
              <div className="mx-2 text-lg text-orange">₫47.500</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Products;
