import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AboutPage from './components/AboutPage';
import Team from './components/Team';
const appRouter = createBrowserRouter([
  
    {
      path:"/",
      element: <App/>,
      
        },
        {
          path:"/About",
          element:<AboutPage/>
        },
        {
          path:"/Team",
          element:<Team/>
        }
  
      ])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={appRouter}/>
  
);

