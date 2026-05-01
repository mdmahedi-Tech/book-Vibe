import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout";
// import Books from "../Pages/Books/Books";
import Homepage from "../Pages/Homepages/Homepage";

import Error from "../Erro";
import BookDetails from "../Pages/BooksDetails/BookDetails";
import Books from "../Pages/Books/Books";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        index:true,
        element:<Homepage></Homepage>
      },
      {
        path:'/books',
        element:<Books></Books>
      },
      {
        path:'/booksdetails/:bookId',
      element:<BookDetails></BookDetails>,
      loader:()=>fetch('/booksData.json'),
      }
    ],
    errorElement:<Error></Error>
    }
  ]

);