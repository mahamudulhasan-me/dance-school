import { createBrowserRouter } from "react-router-dom";
import ManageClasses from "../dashboard/AdminDashboard/ManageClasses";
import ManageUsers from "../dashboard/AdminDashboard/ManageUser";
import Dashboard from "../dashboard/Dashboard";
import AddClass from "../dashboard/InstructorDashboard/AddClass";
import MyClasses from "../dashboard/InstructorDashboard/MyClasses";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/User/Login";

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
    path: "dashboard",
    element: <Dashboard />,
    children: [
      // instructor router
      {
        path: "/dashboard/instructor/add-class",
        element: <AddClass />,
      },
      {
        path: "/dashboard/instructor/my-class",
        element: <MyClasses />,
      },
      // admin router
      {
        path: "/dashboard/admin/manage-classes",
        element: <ManageClasses />,
      },
      {
        path: "/dashboard/admin/manage-users",
        element: <ManageUsers />,
      },
    ],
  },
]);

export default router;
