import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify';
import Button from '~/components/Button';
import { register as registerAuth } from '~/servers/accountService';
import { schema } from '~/utils/rules';
import Input from '~/components/Input';
import { actions, useStore } from '~/Context/Account';
import { isAxiosUnprocessableEntityError } from '~/utils/utils';
import omit from 'lodash/omit'
import { Helmet } from 'react-helmet-async'
import SocialLogin from '~/components/SocialLogin';

const registerSchema = schema.pick(['username', 'email', 'password', 'confirm_password'])
const Register = () => {

	const [, dispatch] = useStore()
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(registerSchema)
	})

	const onSubmit = handleSubmit(async (data) => {
		const body = omit(data, ['confirm_password'])
		try {
			const res = await registerAuth(body)

			if (res.data !== null) {
				dispatch(actions.setProfile(res));
				dispatch(actions.setIsAuthenticated(true))
				navigate('/');
				toast.success('Register successful!');
			} else {
				toast.error('Register failed. Please check your credentials.');
			}
		} catch (error) {
			if (isAxiosUnprocessableEntityError(error)) {
				const formError = error.response?.data.data
				if (formError) {
					Object.keys(formError).forEach((key) => {
						setError(key, {
							message: formError[key],
							type: 'Server'
						})
					})
				}
			}
		}
	})

	return (
		<div className="bg-orange">
			<Helmet>
				<title>Đăng ký | Shopee</title>
				<meta name='description' content='Đăng ký tài khoản Shopee' />
			</Helmet>
			<div className="container">
				<div className="grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-27 lg:pr-10">
					<div className="lg:col-span-2 lg:col-start-4">
						<form className="rounded bg-white p-10 shadow-sm" onSubmit={onSubmit} noValidate>
							<div className="text-2xl">Đăng ký</div>
							<Input
								name="username"
								register={register}
								type="text"
								className="mt-8"
								errorMessage={errors.username?.message}
								placeholder="Username"
							/>
							<Input
								name="email"
								register={register}
								type="email"
								className="mt-2"
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

							<Input
								name="confirm_password"
								type="password"
								register={register}
								className="mt-2"
								classNameEye="absolute top-[9px] right-[13px] h-6 w-6 cursor-pointer"
								errorMessage={errors.confirm_password?.message}
								placeholder="Confirm Password"
								autoComplete="on"
							/>

							<div className="mt-2">
								<Button
									type="submit"
									className="flex w-full items-center justify-center bg-red-500 py-3 px-2 text-sm uppercase text-white hover:bg-red-600"
								>
									Đăng ký
								</Button>
							</div>
							<div className="my-4 h-[1px] bg-gray-300" />
							<SocialLogin />
							<div className="mt-8 flex items-center justify-center">
								<span className="text-gray-400">Bạn đã có tài khoản?</span>
								<Link className="ml-1 text-red-400" to="/login">
									Đăng nhập
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
