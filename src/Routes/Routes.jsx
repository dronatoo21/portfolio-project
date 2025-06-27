import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Details from "../Pages/Details/Details";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Projects from "../Pages/Home/Projects/Projects";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/details/:id",
          element: <Details/>,
          loader: ({params}) => fetch(`https://portfolio-server-alpha-lilac.vercel.app/projects/${params.id}`)
        },
        {
          path:"/projects",
          element: <Projects/> , 
        }
      ]
    },
  ]);