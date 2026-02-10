import { useState } from "react";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefultPage from "./components/Defultpage/DefultPage";
import "./App.css";
import Blogpage from "./components/Blogpage/Blogpage";
import Aboutpage from "./components/Aboutpage/Aboutpage";
import Notfoundpage from "./components/Notfoundpage/Notfoundpage";
import Layout from "./components/Layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <DefultPage /> },
        { path: "blog", element: <Blogpage /> },
        { path: "about", element: <Aboutpage /> },
        { path: "*", element: <Notfoundpage /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
