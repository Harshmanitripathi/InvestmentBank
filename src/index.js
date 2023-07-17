import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Navbar,MainContent } from './Landing/landing';
import reportWebVitals from './reportWebVitals';
import Header from './Listing/listing'
import Check from './Landing/check';
import useValueTransfer from './Utils/useValueTransfer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ApiDataShown from './Utils/searchApiDataShown';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <Navbar />
    <MainContent />
      </>
    ),
  },
  {
    path: "/comparefunds",
    element: (
      <>
      <Navbar />
    <MainContent />
      </>
    ),
  },
  {
    path: "/blogs",
    element: (
      <>
      <Navbar />
      <Header />
      
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
     
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
