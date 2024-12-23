import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;