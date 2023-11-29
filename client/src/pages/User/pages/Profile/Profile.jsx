import { useContext, useEffect, useMemo, useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import Button from '~/components/Button';
import Input from '~/components/Input';
import InputFile from '~/components/InputFile';
import InputNumber from '~/components/InputNumber';
import { updateAccount } from '~/servers/accountService';
import { getAvatarUrl, isAxiosUnprocessableEntityError } from '~/utils/utils';
import DateSelect from '../../components/DateSelect';
import GenderRadio from '../../components/GenderRadio';
import { userSchema } from '~/utils/rules';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { setProfileToLS } from '~/utils/auth';
import { AppContext } from '~/contexts/app.contexts';
import { upload } from '~/servers/cloudinaryService';

const profileSchema = userSchema.pick(['name', 'username', 'phone', 'date_of_birth', 'avatar']);

const Profile = () => {
  const { profile, setProfile } = useContext(AppContext);
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const previewImage = useMemo(() => {
    return file ? URL.createObjectURL(file) : '';
  }, [file]);

  const methods = useForm({
    defaultValues: {
      username: '',
      name: '',
      phone: '',
      avatar: '',
      gender: true,
      date_of_birth: new Date(1990, 0, 1),
    },
    resolver: yupResolver(profileSchema),
  });

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
    setError,
  } = methods;

  const avatar = watch('avatar');

  useEffect(() => {
    if (profile) {
      setValue('username', profile.username || '');
      setValue('name', profile.fullname || '');
      setValue('phone', profile.phone || '');
      setValue('avatar', profile.img || '');
      setValue('gender', profile.gender || true);
      setValue('date_of_birth', profile.date_of_birth ? new Date(profile.date_of_birth) : new Date(1990, 0, 1));
    }
  }, [profile, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    try {
      let avatarName = avatar;
      if (file) {
        const uploadRes = await upload({ image: file });
        avatarName = uploadRes.url;
        setValue('avatar', avatarName);
      }
      const res = await updateAccount(profile.id, {
        ...data,
        fullname: data.name,
        img: avatarName,
      });
      setProfile(res);
      setProfileToLS(res);
      toast.success('Update account successful');
    } catch (error) {
      if (isAxiosUnprocessableEntityError(error)) {
        const formError = error.response?.data.data;
        console.log(formError);
        if (formError) {
          Object.keys(formError).forEach((key) => {
            setError(key, {
              message: formError[key],
              type: 'Server',
            });
          });
        }
      }
    } finally {
      setIsLoading(false);
    }
  });

  const handleChangeFile = (file) => {
    setFile(file);
  };

  if (profile.id === null) return null;
  return (
    <div className="rounded-sm bg-white px-2 pb-10 shadow md:px-7 md:pb-20">
      <div className="border-b border-b-gray-200 py-6">
        <h1 className="text-lg font-medium capitalize text-gray-900">Hồ Sơ Của Tôi</h1>
        <div className="mt-1 text-sm text-gray-700">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
      </div>
      <FormProvider {...methods}>
        <form className="mt-8 flex flex-col-reverse md:flex-row md:items-start" onSubmit={onSubmit}>
          <div className="mt-6 flex-grow md:mt-0 md:pr-12">
            <div className="flex flex-col flex-wrap sm:flex-row">
              <div className="truncate pt-3 capitalize sm:w-[20%] sm:text-right">Email</div>
              <div className="sm:w-[80%] sm:pl-5">
                <div className="pt-3 text-gray-700">{profile?.email}</div>
              </div>
            </div>
            <div className="mt-6 flex flex-col flex-wrap sm:flex-row">
              <div className="truncate pt-3 capitalize sm:w-[20%] sm:text-right">Username</div>
              <div className="sm:w-[80%] sm:pl-5">
                <Input
                  classNameInput="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm"
                  register={register}
                  name="username"
                  placeholder="Username"
                  errorMessage={errors.username?.message}
                />
              </div>
            </div>
            <div className="mt-2 flex flex-col flex-wrap sm:flex-row">
              <div className="truncate pt-3 capitalize sm:w-[20%] sm:text-right">Tên</div>
              <div className="sm:w-[80%] sm:pl-5">
                <Input
                  classNameInput="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm"
                  register={register}
                  name="name"
                  placeholder="Tên"
                  errorMessage={errors.name?.message}
                />
              </div>
            </div>
            <div className="mt-2 flex flex-col flex-wrap sm:flex-row">
              <div className="truncate pt-3 capitalize sm:w-[20%] sm:text-right">Số điện thoại</div>
              <div className="sm:w-[80%] sm:pl-5">
                <Controller
                  control={control}
                  name="phone"
                  render={({ field }) => (
                    <InputNumber
                      classNameInput="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm"
                      placeholder="Số điện thoại"
                      errorMessage={errors.phone?.message}
                      {...field}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
            </div>
            <Controller
              control={control}
              name="gender"
              render={({ field }) => (
                <GenderRadio errorMessage={errors.gender?.message} value={field.value} onChange={field.onChange} />
              )}
            />
            <Controller
              control={control}
              name="date_of_birth"
              render={({ field }) => (
                <DateSelect
                  errorMessage={errors.date_of_birth?.message}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            <div className="mt-2 flex flex-col flex-wrap sm:flex-row">
              <div className="truncate pt-3 capitalize sm:w-[20%] sm:text-right" />
              <div className="sm:w-[80%] sm:pl-5">
                <Button
                  className="flex h-9 items-center rounded-sm bg-orange px-10 text-center text-sm text-white hover:bg-orange/80"
                  type="submit"
                  isLoading={isLoading}
                  disabled={isLoading}
                >
                  Lưu
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:w-72 md:border-l md:border-l-gray-200">
            <div className="flex flex-col items-center">
              <div className="my-5 h-24 w-24">
                <img
                  src={previewImage || getAvatarUrl(avatar)}
                  alt=""
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <InputFile onChange={handleChangeFile} disabled={isLoading} />
              <div className="mt-3 text-gray-400">
                <div>Dụng lượng file tối đa 1 MB</div>
                <div>Định dạng:.JPEG, .PNG</div>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Profile;
