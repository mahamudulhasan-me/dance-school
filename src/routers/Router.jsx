import { createBrowserRouter } from "react-router-dom";
import ManageClasses from "../dashboard/AdminDashboard/ManageClasses";
import ManageUsers from "../dashboard/AdminDashboard/ManageUser";
import Dashboard from "../dashboard/Dashboard";
import AddClass from "../dashboard/InstructorDashboard/AddClass";
import MyClasses from "../dashboard/InstructorDashboard/MyClasses";
import UpdateClass from "../dashboard/InstructorDashboard/UpdateClass";
import Payment from "../dashboard/Payment/Payment";
import EnrolledClasses from "../dashboard/UserDashboard/EnrolledClasses";
import PaymentHistory from "../dashboard/UserDashboard/PaymentHistory";
import SelectedClasses from "../dashboard/UserDashboard/SelectedClasses";
import WelcomePage from "../dashboard/WelcomePage";
import Main from "../layouts/Main";
import ApprovedClasses from "../pages/ApprovedClasses/ApprovedClasses";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/User/Login";
import InstructorProtected from "../protectedRoute/InstructorProtected";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";
import AdminProtected from "../protectedRoute/adminProtected";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/classes",
        element: <ApprovedClasses />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      { path: "/dashboard", element: <WelcomePage /> },
      // student router
      {
        path: "/dashboard/student/selected-classes",
        element: <SelectedClasses />,
      },
      {
        path: "/dashboard/student/payment",
        element: <Payment />,
      },
      {
        path: "/dashboard/student/payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "/dashboard/student/enrolled-classes",
        element: <EnrolledClasses />,
      },

      // instructor router
      {
        path: "/dashboard/instructor/add-class",
        element: (
          <InstructorProtected>
            <AddClass />
          </InstructorProtected>
        ),
      },
      {
        path: "/dashboard/instructor/my-class",
        element: (
          <InstructorProtected>
            <MyClasses />
          </InstructorProtected>
        ),
      },
      {
        path: "/dashboard/instructor/update-class/:id",
        element: (
          <InstructorProtected>
            <UpdateClass />
          </InstructorProtected>
        ),
      },

      // admin router
      {
        path: "/dashboard/admin/manage-classes",
        element: (
          <AdminProtected>
            <ManageClasses />
          </AdminProtected>
        ),
      },
      {
        path: "/dashboard/admin/manage-users",
        element: (
          <AdminProtected>
            <ManageUsers />
          </AdminProtected>
        ),
      },
    ],
  },
]);

export default router;
