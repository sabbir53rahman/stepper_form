import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Stepper from './components/Stepper.jsx';
import FormBuilder from './components/FormBuilder/FormBuilder.jsx';
import Layout from './Layout/Layout.jsx';

// Define your routes, including children
const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />, 
    children: [
      {
        path: "", 
        element: <FormBuilder />, 
      },
      {
        path: "stepper", 
        element: <Stepper />, 
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
