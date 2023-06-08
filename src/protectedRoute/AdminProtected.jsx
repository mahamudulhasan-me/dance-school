import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminProtected = ({}) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return;
  }
};

export default AdminProtected;
