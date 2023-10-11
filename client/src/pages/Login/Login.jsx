import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import Input from '~/components/Input';

const Login = () => {

  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const apiUrl = `http://localhost:1203/api/login?username=${username}&password=${password}&remember=false`;
    try {

      const res = await axios.post(apiUrl).then()
        .catch((error) => {
          console.error('Error fetching data:', error);
        });


      if (res === true) {
        navigate('/');

        alert('Login successful!');
        // You can perform additional actions like redirecting the user to another page.
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Please try again later.');
    }
  }

  return (
    <div className="bg-orange">
      <div className="container">
        <div className="grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-27 lg:pr-10">
          <div className="lg:col-span-2 lg:col-start-4">
            <form className="rounded bg-white p-10 shadow-sm">
              <div className="text-2xl">Đăng nhập</div>
              <Input
                name="email"
                // register={register}
                type="email"
                className="mt-8"

                onChange={(event) => setEmail(event.target.value)}
                // errorMessage={errors.email?.message}
                placeholder="Email"
              />
              <Input
                name="password"
                // register={register}
                type="password"
                className="mt-2"
                onChange={(event) => setPassword(event.target.value)}
                classNameEye="absolute top-[9px] right-[13px] h-6 w-6 cursor-pointer"
                // errorMessage={errors.password?.message}
                placeholder="Password"
                autoComplete="on"
              />
              <div className="mt-3">
                <Button
                  type="button"
                  className="flex w-full items-center justify-center bg-red-500 py-3 px-2 text-sm uppercase text-white hover:bg-red-600 font-normal"
                  onClick={() => handleLogin()}
                // isLoading={loginMutation.isLoading}
                // disabled={loginMutation.isLoading}
                >
                  Đăng nhập
                </Button>
              </div>
              <div className="my-4 h-[1px] bg-gray-300" />
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-6">
                  <Button className="flex w-full items-center justify-center py-2 px-1 outline-none border border-gray-400 hover:bg-gray-100 rounded-sm">
                    <div className="flex items-center justify-center">
                      <svg
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlSpace="preserve"
                        viewBox="0 0 40 40"
                        className="me-2"
                      >
                        <linearGradient
                          id="a"
                          x1="-277.375"
                          x2="-277.375"
                          y1="406.6018"
                          y2="407.5726"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#0062e0" />
                          <stop offset="1" stopColor="#19afff" />
                        </linearGradient>
                        <path
                          fill="url(#a)"
                          d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"
                        />
                        <path
                          fill="#fff"
                          d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
                        />
                      </svg>
                      <span>Facebook</span>
                    </div>
                  </Button>
                </div>
                <div className="col-span-6">
                  <Button className="flex w-full items-center justify-center py-2 px-1 outline-none border border-gray-400 hover:bg-gray-100 rounded-sm">
                    <div className="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        className="me-2"
                      >
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                        <path d="M1 1h22v22H1z" fill="none" />
                      </svg>
                      <span>Google</span>
                    </div>
                  </Button>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-center">
                <span className="text-gray-400">Bạn chưa có tài khoản?</span>
                <Link className="ml-1 text-red-600" to="/register">
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
