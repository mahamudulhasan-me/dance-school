import { Navigate } from "react-router";
import LoadingSpinner2 from "../components/LoadingSpinner/LoadingSpinner2";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

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
