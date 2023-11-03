import { purchasesStatus } from '~/constants/purchase';
import UserLayout from '../../layouts/UserLayout';
import { Link, createSearchParams } from 'react-router-dom';
import path from '~/constants/path';
import classNames from 'classnames';

const purchaseTabs = [
  { status: purchasesStatus.all, name: 'Tất cả' },
  { status: purchasesStatus.waitForConfirmation, name: 'Chờ xác nhận' },
  { status: purchasesStatus.waitForGetting, name: 'Chờ lấy hàng' },
  { status: purchasesStatus.inProgress, name: 'Đang giao' },
  { status: purchasesStatus.delivered, name: 'Đã giao' },
  { status: purchasesStatus.cancelled, name: 'Đã hủy' },
];

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

const HistoryPurchase = () => {
  return (
    <UserLayout>
      <div>
        <div className="overflow-x-auto">
          <div className="min-w-[700px]">
            <div className="sticky top-0 flex rounded-t-sm shadow-sm">{purchaseTabsLink}</div>
            <div>
              <div className="mt-4 rounded-sm border-black/10 bg-white p-6 text-gray-800 shadow-sm">
                <Link to={`/`} className="flex">
                  <div className="flex-shrink-0">
                    <img className="h-20 w-20 object-cover" src={''} alt={'purchase.product.name'} />
                  </div>
                  <div className="ml-3 flex-grow overflow-hidden">
                    <div className="truncate">Điện thoại</div>
                    <div className="mt-3">x2</div>
                  </div>
                  <div className="ml-3 flex-shrink-0">
                    <span className="truncate text-gray-500 line-through">₫999.000</span>
                    <span className="ml-2 truncate text-orange">₫500.000</span>
                  </div>
                </Link>
                <div className="flex justify-end">
                  <div>
                    <span>Tổng giá tiền</span>
                    <span className="ml-4 text-xl text-orange">₫1.000.000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default HistoryPurchase;
