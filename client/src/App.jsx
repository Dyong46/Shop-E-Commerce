import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes/Routes';
import MainLayout from './layouts/MainLayout/MainLayout';
import { Fragment } from 'react';
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout';
import CartLayout from './layouts/CartLayout/CartLayout';
import { ToastContainer } from 'react-toastify';
import Cart from './pages/Cart';
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = MainLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            } else if (route.layout === RegisterLayout) {
              Layout = route.layout;
            } else if (route.layout === CartLayout) {
              Layout = route.layout;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
