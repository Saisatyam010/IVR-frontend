
import { useAuth } from './context/auth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}:{children:any}) => {
   
        const ctx=useAuth();
        console.log(ctx?.isAuthenticated+"isAuthenticated");
        if (!(ctx?.isAuthenticated)) {
          return <Navigate to="/auth/signin" />;
        }
        return children;
      };
    export default PrivateRoute;

