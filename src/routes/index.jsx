import Root from "../pages/site/Root";
import Home from "../pages/site/Home";
import News from "../pages/site/News";
import Login from "../pages/site/Login";
import Register from "../pages/site/Register";
import AdminRoot from "../pages/admin/AdminRoot";


export const ROUTES = [
  {
      name: "Root Element for web",
      path: "/",
      element: <Root />,
      children: [
        {
          name: "Home",
          path: "/",
          element: <Home/>,
        },
        {
          name: "News",
          path: "news",
          element: <News/>,
        },
        {
          name: "Login",
          path: "login",
          element: <Login />,
        },
        {
          name: "Register",
          path: "register",
          element: <Register/>,
        },
      ],
  },
  {
    name: "Admin Root",
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        name: "Dashboard",
        path: "admin",
        element: <div>Dashboard</div>,
      },
      {
        name: "News",
        path: "news",
        element: <News/>,
      },
    ],
  },
];