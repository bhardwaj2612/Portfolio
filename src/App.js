import React from 'react';
// import './Header.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from './component/Main';

const App = () => {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,

    },
  ])
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;