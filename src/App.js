import React from 'react';
// import './Header.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from './component/Main';
import Test from './pages/Teat';

const App = () => {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,

    },
    {
      path: "/test",
      element: <Test />,

    },
  ])
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;