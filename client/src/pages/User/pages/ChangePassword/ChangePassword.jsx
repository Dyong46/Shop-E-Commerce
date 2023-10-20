import Button from '~/components/Button';
import UserLayout from '../../layouts/UserLayout';
import Input from '~/components/Input';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ChangePassword = () => {
  const [state, dispatch] = useStore();

  const { profile } = state;
  const [errors, setErrors] = useState({});
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const changePassword = (e) => {
    e.preventDefault();
    const isValid = validations();
    if (isValid) {
      toast.success('Your password updated successfully');
    }
  };

  const validations = () => {
    if (password.length == 0) {
      toast.error('Your password is empty');
      return false;
    }
    if (password !== 'thu123') {
      toast.error('Your password is incorrect!');
      return false;
    }
    if (newPassword.length < 5) {
      setErrors({
        new_password: 'Password must be at least 10 characters',
      });
      return false;
    }
    if (newPassword !== confirmPassword) {
      setErrors({
        new_password: "Password isn't math with confirm password",
        confirm_password: "Password isn't math with confirm password",
      });
      return false;
    }
    setErrors({});
    setPassword('');
    setNewPassword('');
    setConfirmPassword('');
    return true;
  };

  return (
    <UserLayout>
      <div className="rounded-sm bg-white px-2 pb-10 shadow md:px-7 md:pb-20">
        <div className="border-b border-b-gray-200 py-6">
          <h1 className="text-lg font-medium capitalize text-gray-900">Đổi mật khẩu</h1>
          <div className="mt-1 text-sm text-gray-700">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
        </div>
        <form className="mt-8 mr-auto max-w-2xl" onSubmit={changePassword}>
          <div className="mt-6 flex-grow md:mt-0 md:pr-12">
            <div className="mt-2 flex flex-col flex-wrap sm:flex-row">
              <div className="truncate pt-3 capitalize sm:w-[20%] sm:text-right">Mật khẩu cũ</div>
              <div className="sm:w-[80%] sm:pl-5">
                <Input
                  classNameInput="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm"
                  className="relative "
                  name="password"
                  type="password"
                  placeholder="Mật khẩu cũ"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  //   errorMessage={errors?.password?.message}
                />
              </div>
            </div>
            <div className="mt-2 flex flex-col flex-wrap sm:flex-row">
              <div className="truncate pt-3 capitalize sm:w-[20%] sm:text-right">Mật khẩu mới</div>
              <div className="sm:w-[80%] sm:pl-5">
                <Input
                  classNameInput="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm"
                  className="relative "
                  name="new_password"
                  type="password"
                  placeholder="Mật khẩu mới"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  errorMessage={errors?.new_password}
                />
              </div>
            </div>
            <div className="mt-2 flex flex-col flex-wrap sm:flex-row">
              <div className="truncate pt-3 capitalize sm:w-[20%] sm:text-right">Nhập lại mật khẩu</div>
              <div className="sm:w-[80%] sm:pl-5">
                <Input
                  classNameInput="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm"
                  className="relative "
                  name="confirm_password"
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  errorMessage={errors?.confirm_password}
                />
              </div>
            </div>
            <div className="mt-2 flex flex-col flex-wrap sm:flex-row">
              <div className="truncate pt-3 capitalize sm:w-[20%] sm:text-right" />
              <div className="sm:w-[80%] sm:pl-5">
                <Button
                  className="flex h-9 items-center rounded-sm bg-orange px-5 text-center text-sm text-white hover:bg-orange/80"
                  type="submit"
                >
                  Lưu
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </UserLayout>
  );
};

export default ChangePassword;
