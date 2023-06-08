import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";
import LoadingSpinner2 from "../components/LoadingSpinner/LoadingSpinner2";

const InstructorProtected = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstructor, isInstructorLoading] = useInstructor();

  const location = useLocation();

  if (loading || isInstructorLoading) {
    return <LoadingSpinner2 />;
  }
  if (user && isInstructor) {
    return children;
  }
  return <Navigate to={"/"} replace />;
};

export default InstructorProtected;
