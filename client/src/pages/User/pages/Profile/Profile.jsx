import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import Input from '~/components/Input';
import InputFile from '~/components/InputFile';
import InputNumber from '~/components/InputNumber';
import UserLayout from '../../layouts/UserLayout';
import DateSelect from '../../components/DateSelect';
import { getAccountById } from '~/servers/accountService';
import { actions, useStore } from '~/Context/Account';

const Profile = () => {
  const [state, dispatch] = useStore();
  // const [profile, setProfile] = useState(null);

  const { profile } = state;
  const [username, setUsername] = useState(null);
  const [fullname, setFullname] = useState(null);
  const [password, setPassword] = useState(null);
  const [phone, setPhone] = useState(null);
  const [gender, setGender] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const [img, setImg] = useState(null);

  const getProfile = async () => {
    let res = await getAccountById(1);
    if (res && res.email) {
      dispatch(actions.login(res));

      // setUsername(profile.username);
      // setFullname(profile.firstname + ' ' + profile.lastname);
      // setPhone(profile.phone);
      // setGender(profile.gender);
      // setBirthday(profile.birthday);
      // setImg(profile.img);
      // setPassword(profile.password);
    } else {
      throw new Error('Could not find');
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  if (profile.id === null) return null;
  return (
    <UserLayout>
      <div className="rounded-sm bg-white px-2 pb-10 shadow md:px-7 md:pb-20">
        <div className="border-b border-b-gray-200 py-6">
          <h1 className="text-lg font-medium capitalize text-gray-900">Hồ Sơ Của Tôi</h1>
          <div className="mt-1 text-sm text-gray-700">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
        </div>
        <form className="mt-8 flex flex-col-reverse md:flex-row md:items-start">
          <div className="mt-6 flex-grow md:mt-0 md:pr-12">
            <div className="flex flex-col flex-wrap sm:flex-row">
              <div className="truncate pt-3 capitalize sm:w-[20%] sm:text-right">Email</div>
              <div className="sm:w-[80%] sm:pl-5">
                <div className="pt-3 text-gray-700">{profile.email}</div>
              </div>
            </div>
            <div className="mt-6 flex flex-col flex-wrap sm:flex-row">
              <div className="truncate pt-3 capitalize sm:w-[20%] sm:text-right">Username</div>
              <div className="sm:w-[80%] sm:pl-5">
                <Input
                  classNameInput="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm"
                  // register={register}
                  name="username"
                  placeholder="Username"
                  value={profile.username}
                  onChange={(e) =>
                    dispatch(actions.login, {
                      ...profile,
                      username: e.target.value,
                    })
                  }
                  // errorMessage={errors.name?.message}
                />
              </div>
            </div>
            <div className="mt-2 flex flex-col flex-wrap sm:flex-row">
              <div className="truncate pt-3 capitalize sm:w-[20%] sm:text-right">Tên</div>
              <div className="sm:w-[80%] sm:pl-5">
                <Input
                  classNameInput="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm"
                  // register={register}
                  name="name"
                  placeholder="Tên"
                  value={profile.firstname}
                  onChange={(e) => setProfile({ ...profile, firstname: e.target.value })}
                  // errorMessage={errors.name?.message}
                />
              </div>
            </div>
            <div className="mt-2 flex flex-col flex-wrap sm:flex-row">
              <div className="truncate pt-3 capitalize sm:w-[20%] sm:text-right">Số điện thoại</div>
              <div className="sm:w-[80%] sm:pl-5">
                <InputNumber
                  classNameInput="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm"
                  placeholder="Số điện thoại"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                />
              </div>
            </div>
            <div className="mt-2 flex flex-col flex-wrap sm:flex-row">
              <div className="truncate pt-3 capitalize sm:w-[20%] sm:text-right">Giới tính</div>
              <div className="sm:w-[80%] sm:pl-5">
                {/* <Input
                  classNameInput="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm"
                  // register={register}
                  name="address"
                  placeholder="Địa chỉ"
                  // errorMessage={errors.address?.message}
                /> */}
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  className="border-gray-300 focus:shadow-sm focus:bg-orange text-lg w-[40] h-[40]"
                />
                <label htmlFor="male" className="truncate pt-3 capitalize sm:w-[20%] sm:text-right">
                  Male
                </label>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  className="border-gray-300 focus:shadow-sm focus:bg-orange"
                />
                <label htmlFor="female" className="truncate pt-3 capitalize sm:w-[20%] sm:text-right">
                  Female
                </label>
              </div>
            </div>
            <DateSelect
            // value={field.value}
            // onChange={field.onChange}
            />
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
          <div className="flex justify-center md:w-72 md:border-l md:border-l-gray-200">
            <div className="flex flex-col items-center">
              <div className="my-5 h-24 w-24">
                <img src={profile.img} alt="" className="h-full w-full rounded-full object-cover" />
              </div>
              <InputFile />
              <div className="mt-3 text-gray-400">
                <div>Dụng lượng file tối đa 1 MB</div>
                <div>Định dạng:.JPEG, .PNG</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </UserLayout>
  );
};

export default Profile;
