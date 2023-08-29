
import { createBrowserRouter } from "react-router-dom";
import { BaseTemplate } from "../templates/base";
import { lazy,Suspense } from "react";
import HomeSkeleton from "src/pages/home/home.skeleton";
const Home = lazy(() => import("../pages/home"));
const Cart = lazy(() => import("../pages/cart"));
const Login = lazy(() => import("../pages/login"));
const Profile = lazy(() => import("../pages/profile"));
const Register = lazy(() => import("../pages/register"));
const Search = lazy(() => import("../pages/search"));
const Detail = lazy(() => import("../pages/detail"));

export const router = createBrowserRouter([
  {
    element: <BaseTemplate />,
    children: [
      {
        index: true,
        path: "/",
        element: (
          <Suspense fallback={<HomeSkeleton/>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
    ],
  },
]);
