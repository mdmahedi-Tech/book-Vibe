// import React from 'react';
// import { NavLink } from 'react-router';
// // import { Links, NavLink } from 'react-router';
// import { Link } from 'react-router-dom';

import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      
      <h1 className="text-8xl font-extrabold text-purple-600">404</h1>
      
      <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        The page you are looking for might have been removed, had its name changed, 
        or is temporarily unavailable.
      </p>
      {/* <NavLink  to="/"
        className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition duration-300"
      >
         Go Back Home
      </NavLink> */}

      {/* <Links
        to="/"
        className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition duration-300"
      >
        
      </Links> */}
      <Link className="bg-purple-700 text-amber-100 rounded-sm px-8 py-2">
       Go Back Home
       </Link>

    </div>
  );
};

export default Error;