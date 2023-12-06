import { purchasesStatus } from '~/constants/purchase';
import { Link, createSearchParams } from 'react-router-dom';
import path from '~/constants/path';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import WaitForConfirmation from './Layout/WaitForConfirmation';
import { AppContext } from '~/contexts/app.contexts';
import { useContext } from 'react';
import { getOrderByAccount, getOrderByAccountStatus } from '~/servers/OrderService';
import useQueryParams from '~/hooks/useQueryParams';
import { generateNameId } from '~/utils/utils';

const purchaseTabs = [
  { status: purchasesStatus.all, name: 'Tất cả' },
  { status: purchasesStatus.waitForConfirmation, name: 'Chờ xác nhận' },
  { status: purchasesStatus.inProgress, name: 'Đang giao' },
  { status: purchasesStatus.delivered, name: 'Đã giao' },
  { status: purchasesStatus.cancelled, name: 'Đã hủy' },
];

const HistoryPurchase = () => {
  const { profile } = useContext(AppContext);
  const queryParams = useQueryParams();
  const status = Number(queryParams.status) || purchasesStatus.all;

  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);

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
        'border-b-orange text-orange': status === tab.status,
        'border-b-black/10 text-gray-900': status !== tab.status,
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
    if (status == 0) {
      getAllOrderAcc();
    } else if (status == 1) {
      getAllOrders(profile.id, 1);
    } else if (status == 2) {
      getAllOrders(profile.id, 2);
    } else if (status == 3) {
      getAllOrders(profile.id, 3);
    } else if (status == 4) {
      getAllOrders(profile.id, 4);
    }
  }, [status]);

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="min-w-[700px]">
          <div className="sticky top-0 flex rounded-t-sm shadow-sm">{purchaseTabsLink}</div>
          <div>
            <div className="mt-4 rounded-sm border-black/10 bg-white p-6 text-gray-800 shadow-sm">
              {order?.map((item, index) => (
                <div className="flex mt-5" key={index}>
                  <div className="flex-shrink-0">
                    <img className="h-20 w-20 object-cover" src={item.img} alt={item.name_product} />
                  </div>
                  <div className="ml-3 flex-grow overflow-hidden">
                    <Link
                      to={`${path.home}${generateNameId({ name: item.name_product, id: item.id_product })}`}
                      className="truncate hover:text-gray-500"
                    >
                      {item.name_product}
                    </Link>
                    <div className="mt-3">x{item.quantity}</div>
                  </div>
                  <div className="ml-3 flex-shrink-0">
                    <div className="mb-2 text-end">
                      <span className="truncate text-gray-500 line-through">
                        ₫{item.quantity * item.price + 100000}
                      </span>
                      <span className="ml-2 truncate text-orange">₫{item.quantity * item.price}</span>
                    </div>
                    <WaitForConfirmation order={item.id_order} param={status} />
                  </div>
                </div>
              ))}

              <div className="flex justify-end">
                <div>
                  <span>Tổng giá tiền</span>
                  {order.map((item, index) => {
                    if (index == 0) {
                      return (
                        <span className="ml-4 text-xl text-orange" key={index}>
                          ₫{total}
                        </span>
                      );
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
