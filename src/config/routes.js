// Layout
import LayoutAdmin from "../layouts/LayoutAdmin";

//Admin pages
import AdminHome from "../pages/admin";
import AdminSingIn from "../pages/admin/SignIn";

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: AdminHome,
        exact: true,
      },
      {
        path: "/admin/login",
        component: AdminSingIn,
        exact: true,
      },
    ],
  },
];

export default routes;
