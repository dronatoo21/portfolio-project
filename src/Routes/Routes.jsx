import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Details from "../Pages/Details/Details";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/details/:id",
          element: <Details/>,
          loader: ({params}) => fetch(`https://portfolio-server-alpha-lilac.vercel.app/projects/${params.id}`)
        }
      ]
    },
  ]);