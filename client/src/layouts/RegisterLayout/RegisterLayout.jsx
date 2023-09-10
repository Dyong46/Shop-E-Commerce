import Footer from '~/components/Footer';
import RegisterHeader from '~/components/RegisterHeader';

const RegisterLayout = ({ children }) => {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  );
};

export default RegisterLayout;
