import Header from '~/components/Header';

const CartLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container-fluid ms-3 pt-2 pb-4 px-3">{children}</main>
    </div>
  );
};

export default CartLayout;
