import { createBrowserRouter } from "react-router-dom";
import ManageClasses from "../dashboard/AdminDashboard/ManageClasses";
import ManageUsers from "../dashboard/AdminDashboard/ManageUser";
import Dashboard from "../dashboard/Dashboard";
import AddClass from "../dashboard/InstructorDashboard/AddClass";
import MyClasses from "../dashboard/InstructorDashboard/MyClasses";
import EnrolledClasses from "../dashboard/UserDashboard/EnrolledClasses";
import SelectedClasses from "../dashboard/UserDashboard/SelectedClasses";
import WelcomePage from "../dashboard/WelcomePage";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/User/Login";
import InstructorProtected from "../protectedRoute/InstructorProtected";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";
import AdminProtected from "../protectedRoute/adminProtected";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
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
