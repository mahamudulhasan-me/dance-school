import { Navigate } from "react-router";
import LoadingSpinner2 from "../components/LoadingSpinner/LoadingSpinner2";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner2 />;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default ProtectedRoute;
