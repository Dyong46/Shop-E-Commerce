import { purchasesStatus } from '~/constants/purchase';
import { Link, createSearchParams } from 'react-router-dom';
import path from '~/constants/path';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import WaitForConfirmation from './Layout/WaitForConfirmation';
import { AppContext } from '~/contexts/app.contexts';
import { useContext } from 'react';
import { getOrderByAccount, getOrderByAccountStatus } from '~/servers/OrderService';

const purchaseTabs = [
  { status: purchasesStatus.all, name: 'Tất cả' },
  { status: purchasesStatus.waitForConfirmation, name: 'Chờ xác nhận' },
  { status: purchasesStatus.inProgress, name: 'Đang giao' },
  { status: purchasesStatus.delivered, name: 'Đã giao' },
  { status: purchasesStatus.cancelled, name: 'Đã hủy' },
];

const HistoryPurchase = () => {
  const { profile } = useContext(AppContext);

  const [param, setParam] = useState(null);
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);

  const get = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.get('status');
    setParam(param);
  };

  const purchaseTabsLink = purchaseTabs.map((tab) => (
    <Link
      key={tab.status}
      to={{
        pathname: path.historyPurchase,
        search: createSearchParams({
          status: String(tab.status),
        }).toString(),
      }}
      className={classNames('flex flex-1 items-center justify-center border-b-2 bg-white py-4 text-center', {
        'border-b-orange text-orange': tab.status == param,
        'border-b-black/10 text-gray-900': param != tab.status,
      })}
    >
      {tab.name}
    </Link>
  ));

  const getAllOrders = async (idorder, status) => {
    let getAllDetails = await getOrderByAccountStatus(idorder, status);
    if (getAllDetails) {
      setOrder(getAllDetails);
    }
  };

  const getAllOrderAcc = async () => {
    let tong = 0;
    let getAll = await getOrderByAccount(profile.id);
    if (getAll) {
      setOrder(getAll);

      getAll.map((item) => {
        tong += item.quantity * item.price;
        setTotal(tong);
        setOrder(getAll);
      });
    }
  };

  useEffect(() => {
    if (param == 0) {
      getAllOrderAcc();
    } else if (param == 1) {
      getAllOrders(profile.id, 1);
    } else if (param == 3) {
      getAllOrders(profile.id, 2);
    } else if (param == 4) {
      getAllOrders(profile.id, 3);
    } else if (param == 5) {
      getAllOrders(profile.id, 4);
    }
  }, [param]);

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="min-w-[700px]">
          <div className="sticky top-0 flex rounded-t-sm shadow-sm" onClick={get}>
            {purchaseTabsLink}
          </div>
          <div>
            <div className="mt-4 rounded-sm border-black/10 bg-white p-6 text-gray-800 shadow-sm">
              {order.map((item, index) => {
                if (param == 0) {
                  return (
                    <Link to={'/user/purchase?status=' + `${param}`} className="flex mt-5" key={index}>
                      <div className="flex-shrink-0">
                        <img className="h-20 w-20 object-cover" src={item.img} alt={'purchase.product.name'} />
                      </div>
                      <div className="ml-3 flex-grow overflow-hidden max-w-[500px]">
                        <div className="truncate">{item.name_product}</div>
                        <div className="mt-3">x{item.quantity}</div>
                      </div>
                      <WaitForConfirmation order={item.id_order} param={param} />
                      <div className="ml-3 flex-shrink-0 w-[100px]">
                        <span className="truncate text-gray-500 line-through">₫999.000</span>
                        <span className="ml-2 truncate text-orange">₫{item.quantity * item.price}</span>
                      </div>
                    </Link>
                  );
                } else if (param == 1) {
                  return (
                    <Link to={'/user/purchase?status=' + `${param}`} className="flex mt-5" key={index}>
                      <div className="flex-shrink-0">
                        <img className="h-20 w-20 object-cover" src={item.img} alt={'purchase.product.name'} />
                      </div>
                      <div className="ml-3 flex-grow overflow-hidden max-w-[500px]">
                        <div className="truncate">{item.name_product}</div>
                        <div className="mt-3">x{item.quantity}</div>
                      </div>
                      <WaitForConfirmation order={item.id_order} param={param} />
                      <div className="ml-3 flex-shrink-0 w-[100px]">
                        <span className="truncate text-gray-500 line-through">₫999.000</span>
                        <span className="ml-2 truncate text-orange">₫{item.quantity * item.price}</span>
                      </div>
                    </Link>
                  );
                } else if (param == 3) {
                  return (
                    <Link to={'/user/purchase?status=' + `${param}`} className="flex mt-5" key={index}>
                      <div className="flex-shrink-0">
                        <img className="h-20 w-20 object-cover" src={item.img} alt={'purchase.product.name'} />
                      </div>
                      <div className="ml-3 flex-grow overflow-hidden max-w-[500px]">
                        <div className="truncate">{item.name_product}</div>
                        <div className="mt-3">x{item.quantity}</div>
                      </div>
                      <WaitForConfirmation order={item.id_order} param={param} />
                      <div className="ml-3 flex-shrink-0 w-[100px]">
                        <span className="truncate text-gray-500 line-through">₫999.000</span>
                        <span className="ml-2 truncate text-orange">₫{item.quantity * item.price}</span>
                      </div>
                    </Link>
                  );
                } else if (param == 4) {
                  return (
                    <Link to={'/user/purchase?status=' + `${param}`} className="flex mt-5" key={index}>
                      <div className="flex-shrink-0">
                        <img className="h-20 w-20 object-cover" src={item.img} alt={'purchase.product.name'} />
                      </div>
                      <div className="ml-3 flex-grow overflow-hidden max-w-[500px]">
                        <div className="truncate">{item.name_product}</div>
                        <div className="mt-3">x{item.quantity}</div>
                      </div>
                      <WaitForConfirmation order={item.id_order} param={param} />
                      <div className="ml-3 flex-shrink-0 w-[100px]">
                        <span className="truncate text-gray-500 line-through">₫999.000</span>
                        <span className="ml-2 truncate text-orange">₫{item.quantity * item.price}</span>
                      </div>
                    </Link>
                  );
                } else if (param == 5) {
                  return (
                    <Link to={'/user/purchase?status=' + `${param}`} className="flex mt-5" key={index}>
                      <div className="flex-shrink-0">
                        <img className="h-20 w-20 object-cover" src={item.img} alt={'purchase.product.name'} />
                      </div>
                      <div className="ml-3 flex-grow overflow-hidden max-w-[500px]">
                        <div className="truncate">{item.name_product}</div>
                        <div className="mt-3">x{item.quantity}</div>
                      </div>
                      <WaitForConfirmation order={item.id_order} param={param} />
                      <div className="ml-3 flex-shrink-0 w-[100px]">
                        <span className="truncate text-gray-500 line-through">₫999.000</span>
                        <span className="ml-2 truncate text-orange">₫{item.quantity * item.price}</span>
                      </div>
                    </Link>
                  );
                }
              })}

              <div className="flex justify-end">
                <div>
                  <span>Tổng giá tiền</span>
                  {order.map((item, index) => {
                    if (param == 0 || param == 1 || param == 2 || param == 3 || param == 4) {
                      if (index == 0) {
                        return (
                          <span className="ml-4 text-xl text-orange" key={index}>
                            ₫{total}
                          </span>
                        );
                      }
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPurchase;
