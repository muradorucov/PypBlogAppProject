import Root from "../pages/site/Root";
import Home from "../pages/site/Home";
import News from "../pages/site/News";
import Login from "../pages/site/Login";
import Register from "../pages/site/Register";
import AdminRoot from "../pages/admin/AdminRoot";
import DetailPage from "../pages/site/Detail";
import Dashboard from "../pages/admin/Dashboard";
import ProductList from "../pages/admin/productList";
import OrderList from "../pages/admin/orderList/OrderList";
import AddProduct from "../pages/admin/addProduct";
import AddOrder from "../pages/admin/orderList/addOrder/AddOrder";
import Sport from "../pages/site/Sport";
import Worklife from "../pages/site/Worklife";
import Travel from "../pages/site/Travel/Index";
import Culture from "../pages/site/Culture";
import Future from "../pages/site/Future";
import Tech from "../pages/site/Teach";
import Reel from "../pages/site/Reel";
import ForgotPassword from "../pages/site/ForgotPassword";

export const ROUTES = [
  {
    name: "Root Element for web",
    path: "/",
    element: <Root />,
    children: [
      {
        name: "Home",
        path: "/",
        element: <Home />,
      },
      {
        name: "News",
        path: "news",
        element: <News />,
      },
      {
        name: "Sport",
        path: "Sport",
        element: <Sport />,
      },
      {
        name: "Reel",
        path: "Reel",
        element: <Reel />,
      },
      {
        name: "Worklife",
        path: "Worklife",
        element: <Worklife />,
      },
      {
        name: "Travel",
        path: "Travel",
        element: <Travel />,
      },
      {
        name: "Future",
        path: "Future",
        element: <Future />,
      },
      {
        name: "Culture",
        path: "Culture",
        element: <Culture />,
      },
      {
        name: "Tech",
        path: "Tech",
        element: <Tech />,
      },
      {
        name: "Detail",
        path: "detail/:id",
        element: <DetailPage />,
      },
      {
        name: "Login",
        path: "login",
        element: <Login />,
      },
      {
        name: "Register",
        path: "register",
        element: <Register />,
      },
      {
        name: "ResetPassword",
        path: "reset",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <ProductList />,
      },
      {
        path: "orders",
        element: <OrderList />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "add-order",
        element: <AddOrder />,
      },
    ],
  },
];
