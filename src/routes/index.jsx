import Root from "../pages/site/Root";
import Home from "../pages/site/Home";
import News from "../pages/site/News";
import Login from "../pages/site/Login";
import Sport from "../pages/site/Sport";
import Register from "../pages/site/Register";
import DetailPage from "../pages/site/Detail";
import Worklife from "../pages/site/Worklife";
import Travel from "../pages/site/Travel/Index";
import Culture from "../pages/site/Culture";
import Future from "../pages/site/Future";
import Tech from "../pages/site/Teach";
import Reel from "../pages/site/Reel";
import ForgotPassword from "../pages/site/ForgotPassword";
import AdminRoot from "../pages/admin/AdminRoot";
import Dashboard from "../pages/admin/Dashboard";
import PostList from "../pages/admin/posts/PostList.jsx";
import AddPost from "../pages/admin/posts/AddPost.jsx";
import AddCategory from "../pages/admin/categories/AddCategory.jsx";
import UpdateCategory from "../pages/admin/categories/UpdateCategory.jsx";
import CategoryList from "../pages/admin/categories/CategoryList.jsx";
import UpdatePost from "../pages/admin/posts/UpdatePost.jsx";
import Users from "../pages/admin/users/Users.jsx";

export const ROUTES = [
  {
    name: "Root Element for web",
    path: "/",
    element: <Root/>,
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
        name: "Sport",
        path: "Sport",
        element: <Sport/>,
      },
      {
        name: "Reel",
        path: "Reel",
        element: <Reel/>,
      },
      {
        name: "Worklife",
        path: "Worklife",
        element: <Worklife/>,
      },
      {
        name: "Travel",
        path: "Travel",
        element: <Travel/>,
      },
      {
        name: "Future",
        path: "Future",
        element: <Future/>,
      },
      {
        name: "Culture",
        path: "Culture",
        element: <Culture/>,
      },
      {
        name: "Tech",
        path: "Tech",
        element: <Tech/>,
      },
      {
        name: "Detail",
        path: "detail/:id",
        element: <DetailPage/>,
      },
      {
        name: "Login",
        path: "login",
        element: <Login/>,
      },
      {
        name: "Register",
        path: "register",
        element: <Register/>,
      },
      {
        name: "ResetPassword",
        path: "reset",
        element: <ForgotPassword/>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot/>,
    children: [
      {
        path: "",
        element: <Dashboard/>,
      },
      {
        path: "posts",
        element: <PostList/>,
      },
      {
        path: "add-post",
        element: <AddPost/>,
      },
      {
        path: "update-post",
        element: <UpdatePost/>,
      },
      {
        path: "categories",
        element: <CategoryList/>,
      },
      {
        path: "add-category",
        element: <AddCategory/>,
      },
      {
        path: "update-category",
        element: <UpdateCategory/>,
      },
      {
        path: "users",
        element: <Users/>,
      },
    ],
  },
];
