import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Button from '~/components/Button';
import Input from '~/components/Input';
import UserLayout from '../../layouts/UserLayout';
import { useStore } from '~/Context/Account';
import { userSchema } from '~/utils/rules';
import { isAxiosUnprocessableEntityError } from '~/utils/utils';

const passwordSchema = userSchema.pick(['password', 'new_password', 'confirm_password']);

const ChangePassword = () => {
  const [state] = useStore();
  const { profile } = state;

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    reset,
  } = useForm({
    defaultValues: {
      password: '',
      confirm_password: '',
      new_password: '',
    },
    resolver: yupResolver(passwordSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      if ('thu123' === data.password) {
        toast.success('Change password success');
        reset();
      } else {
        setError('password', {
          type: 'custom',
          message: 'Wrong password',
        });
      }
    } catch (error) {
      if (isAxiosUnprocessableEntityError(error)) {
        const formError = error.response?.data.data;
        if (formError) {
          Object.keys(formError).forEach((key) => {
            setError(key, {
              message: formError[key],
              type: 'Server',
            });
          });
        }
      }
    }
  });

  return (
    <UserLayout>
      <div className="rounded-sm bg-white px-2 pb-10 shadow md:px-7 md:pb-20">
        <div className="border-b border-b-gray-200 py-6">
          <h1 className="text-lg font-medium capitalize text-gray-900">Đổi mật khẩu</h1>
          <div className="mt-1 text-sm text-gray-700">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
        </div>
        <form className="mt-8 mr-auto max-w-2xl" onSubmit={onSubmit}>
          <div className="mt-6 flex-grow md:mt-0 md:pr-12">
            <div className="mt-2 flex flex-col flex-wrap sm:flex-row">
              <div className="truncate pt-3 capitalize sm:w-[20%] sm:text-right">Mật khẩu cũ</div>
              <div className="sm:w-[80%] sm:pl-5">
                <Input
                  classNameInput="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm"
                  className="relative "
                  register={register}
                  name="password"
                  type="password"
                  placeholder="Mật khẩu cũ"
                  errorMessage={errors.password?.message}
                />
              </div>
            </div>
            <div className="mt-2 flex flex-col flex-wrap sm:flex-row">
              <div className="truncate pt-3 capitalize sm:w-[20%] sm:text-right">Mật khẩu mới</div>
              <div className="sm:w-[80%] sm:pl-5">
                <Input
                  classNameInput="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm"
                  className="relative "
                  register={register}
                  name="new_password"
                  type="password"
                  placeholder="Mật khẩu mới"
                  errorMessage={errors.new_password?.message}
                />
              </div>
            </div>
            <div className="mt-2 flex flex-col flex-wrap sm:flex-row">
              <div className="truncate pt-3 capitalize sm:w-[20%] sm:text-right">Nhập lại mật khẩu</div>
              <div className="sm:w-[80%] sm:pl-5">
                <Input
                  classNameInput="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm"
                  className="relative "
                  register={register}
                  name="confirm_password"
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  errorMessage={errors.confirm_password?.message}
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
