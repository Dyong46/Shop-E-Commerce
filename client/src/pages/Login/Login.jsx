import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { actions, useStore } from '~/Context/Account';
import Button from '~/components/Button';
import Input from '~/components/Input';
import SocialLogin from '~/components/SocialLogin';
import { login } from '~/servers/accountService';
import { schema } from '~/utils/rules';
import { isAxiosUnprocessableEntityError } from '~/utils/utils';

const loginSchema = schema.pick(['email', 'password']);

const Login = () => {
	const navigate = useNavigate();
	const [, dispatch] = useStore();

	const {
		register,
		setError,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: yupResolver(loginSchema) });

	const onSubmit = handleSubmit(async (data) => {
		try {
			const res = await login(data.email, data.password, true);
			console.log(res);
			if (res?.id && res?.email) {
				dispatch(actions.setProfile(res));
				navigate('/');
				toast.success('Login successful!');
			} else {
				reset();
				toast.error('Login failed. Please check your credentials.');
			}
		} catch (error) {
			console.error('Error during login:', error);
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
			toast.error(error.message);
		}
	});

	return (
		<div className="bg-orange">
			<div className="container">
				<div className="grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-27 lg:pr-10">
					<div className="lg:col-span-2 lg:col-start-4">
						<form className="rounded bg-white p-10 shadow-sm" onSubmit={onSubmit} noValidate>
							<div className="text-2xl">Đăng nhập</div>
							<Input
								name="email"
								register={register}
								type="email"
								className="mt-8"
								errorMessage={errors.email?.message}
								placeholder="Email"
							/>
							<Input
								name="password"
								register={register}
								type="password"
								className="mt-2"
								classNameEye="absolute top-[9px] right-[13px] h-6 w-6 cursor-pointer"
								errorMessage={errors.password?.message}
								placeholder="Password"
								autoComplete="on"
							/>
							<div className="mt-3">
								<Button
									type="submit"
									className="flex w-full items-center justify-center bg-red-500 py-3 px-2 text-sm uppercase text-white hover:bg-red-600 font-normal"
								>
									Đăng nhập
								</Button>
							</div>
							<div className="my-4 h-[1px] bg-gray-300" />
							<SocialLogin />
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
