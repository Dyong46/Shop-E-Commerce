import { useContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async'
import UseRouteElement from './useRouteElements';
import { AppContext } from './contexts/app.contexts';
import { LocalStorageEventTarget } from './utils/auth';

function App() {

	const routeElements = UseRouteElement();
	const { reset } = useContext(AppContext)
	useEffect(() => {
		LocalStorageEventTarget.addEventListener('clearLS', reset)
		return () => {
			LocalStorageEventTarget.removeEventListener('clearLS', reset)
		}
	}, [reset])

	return (
		<HelmetProvider>
			{routeElements}
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover={false}
			/>
		</HelmetProvider>
	);
}

export default App;
