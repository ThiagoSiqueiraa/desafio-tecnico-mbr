import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../error-page";
import Quiz from "../Quiz";
import Root from "./root";

export default createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <App />
        },
        {
          path: "/perguntas",
          element: <Quiz />
  
        }
      ]
    },
  ])