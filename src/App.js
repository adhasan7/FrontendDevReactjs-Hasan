import React, { useEffect, useState } from "react";
import axios from "axios";
import { GetProducts } from "./service/ProductService";
import Header from "./component/Header";
import ProductCard from "./component/ProductCard";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./component/Main";
import Detail from "./component/Detail";
import NotFound from "./component/NotFound";

function App() {
  const routes = createBrowserRouter([
    {
      id: `/`,
      path: `/`,
      element: <Main />,
    },
    {
      id: `/detail/:id`,
      path: `/detail/:id`,
      element: <Detail />,
    },
    {
      id: `*`,
      path: `*`,
      element: <NotFound />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
