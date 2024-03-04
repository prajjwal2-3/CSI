import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AboutPage from './components/AboutPage';
const appRouter = createBrowserRouter([
  
    {
      path:"/",
      element: <App/>,
      
        },
        {
          path:"/about",
          element:<AboutPage/>
        }
  
      ])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={appRouter}/>
  
);

