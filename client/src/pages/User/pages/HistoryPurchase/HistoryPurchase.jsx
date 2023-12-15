import { purchasesStatus } from '~/constants/purchase';
import { Link, createSearchParams } from 'react-router-dom';
import path from '~/constants/path';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { AppContext } from '~/contexts/app.contexts';
import { useContext } from 'react';
import useQueryParams from '~/hooks/useQueryParams';
import { getOrderByAccount, getOrdersByStatus } from '~/servers/orderService';
import OrderDetail from './Layout/OrderDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartFlatbed, faStore } from '@fortawesome/free-solid-svg-icons';
import ActionCard from './Layout/ActionCard';
import OrderEmpty from '~/assets/images/order-empty.png'
import { toast } from 'react-toastify';

const purchaseTabs = [
  { status: purchasesStatus.all, name: 'Tất cả' },
  { status: purchasesStatus.waitForConfirmation, name: 'Chờ xác nhận' },
  { status: purchasesStatus.inProgress, name: 'Đang vận chuyển' },
  { status: purchasesStatus.delivered, name: 'Hoàn thành' },
  { status: purchasesStatus.cancelled, name: 'Đã hủy' },
];

const HistoryPurchase = () => {
  const { profile } = useContext(AppContext);
  const queryParams = useQueryParams();
  const status = Number(queryParams.status) || purchasesStatus.all;
  const [orders, setOrders] = useState(null);

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

  const getOrders = async () => {
    try {
      const res = await getOrderByAccount(profile.id);
      if (res) {
        setOrders(res)
      }
    } catch (error) {
      toast.error(error.response.message)
      console.log(error);
    }
  }

  const fetchOrdersByStatus = async (statusId) => {
    try {
      const res = await getOrdersByStatus(profile.id, statusId)
      if (res) {
        setOrders(res)
      }
    } catch (error) {
      toast.error(error.response.message)
      console.log(error);
    }
  }

  useEffect(() => {
    if (status == 0) {
      getOrders()
    } else {
      fetchOrdersByStatus(status)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <div>
      <div>
        <div className="min-w-[700px]">
          <div className="sticky top-0 z-10 flex rounded-t-sm shadow-sm">{purchaseTabsLink}</div>
          {orders && orders.length > 0 && orders?.map((order, index) => (
            <div className='mt-4 shadow-sm rounded-sm' key={index}>
              <div className="px-5 bg-white pt-6 pb-4 text-gray-800">
                <div className='flex justify-between pb-4'>
                  <div className="col-left">
                    <FontAwesomeIcon icon={faStore} className='mr-2' />
                    <span className='font-bold'>Choco Jewelry</span>
                  </div>
                  <div className="col-right text-gray-500">
                    <FontAwesomeIcon icon={faCartFlatbed} className='mr-2' />
                    Đơn hàng đã được giao thành công ?
                    <span className="border-r border-gray-300 mx-2"></span>
                    <span className='text-orange uppercase'>{order.status_id.status}</span>
                  </div>
                </div>
                <div className='border-t border-gray-300 mb-3'></div>
                <div className="container">
                  {order?.orderDetails && order.orderDetails.map((orderDetail, index) => (
                    <OrderDetail orderDetail={orderDetail} key={index} />
                  ))}
                </div>
              </div>
              <ActionCard order={order} />
            </div>
          ))}
          {
            orders && orders.length == 0 && (
              <div className='mt-4 shadow-sm rounded-sm px-5 bg-white pt-6 pb-4 h-[600px] flex items-center justify-center'>
                <div>
                  <div className=''>
                    <img src={OrderEmpty} alt="Don't have order" />
                  </div>
                  <h2 className='text-center text-lg mt-4 font-semibold leading-6'>Chưa có đơn hàng</h2>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default HistoryPurchase;
