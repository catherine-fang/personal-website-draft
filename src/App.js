import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/personal-website-draft',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/personal-website-draft', element: <Homepage /> },
      { path: '/portfolio', element: <Portfolio /> },
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;