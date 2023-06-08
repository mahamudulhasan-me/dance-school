import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import LoadingSpinner2 from "../components/LoadingSpinner/LoadingSpinner2";

const AdminProtected = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return <LoadingSpinner2 />;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/"} replace />;
};

export default AdminProtected;
