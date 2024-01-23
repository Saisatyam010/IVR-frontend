import { Suspense, lazy, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Dashboard from './pages/Dashboard/Dashboard';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import routes from './routes';
import AuthProvider, { AuthContext, useAuth } from './context/auth';
import PrivateRoute from './PrivateRoute';
import { useCookies } from 'react-cookie';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));
type EntryInputs={
   name:String,
   sale1:Number,
   rate1:Number,
   sale2:Number,
   
}
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [cookies]=useCookies();
  console.log(cookies['token']+"token");
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
 
  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <AuthProvider>
      <Routes>
        <Route path="/" element={cookies['token'] ? <Navigate to="/dashboard" /> : <Navigate to="/auth/signin" />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
     
        <Route element={<DefaultLayout />}>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
