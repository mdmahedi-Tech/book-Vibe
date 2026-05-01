import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Mainlayout from './Layout/Mainlayout.jsx';

import Books from './Pages/Books/Books.jsx';
import { router } from './Routes/Routes.jsx';
import BookProvider from './ContextApi/BookProvider.jsx';
import { ToastContainer } from 'react-toastify';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Mainlayout></Mainlayout>,
//     children:[
//       {
//         index:true,
//         element:<Homepage></Homepage>
//       },
//       {
//         path:'/books',
//         element:<Books></Books>
//       }
//     ]
//   },
//   {
//     path:'/books',
//     element:<div>book</div>
//   }
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 
  <BookProvider>
 <RouterProvider router={router} />
 <ToastContainer />
  </BookProvider>
  </StrictMode>,
)
