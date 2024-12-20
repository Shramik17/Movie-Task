import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-around p-4 text-2xl items-center bg-gray-700 h-26">
          <div>
          <h1 className="cursor-pointer text-white text-3xl">MovieDb</h1>
          </div>
          <div className="flex gap-5 items-center">
          <div className="flex gap-4 list-none">
            <Link to="/top-rated" className='hover:text-red-500 hover:underline text-3xl'>Top Rated</Link>
            <Link to="/upcoming" className='hover:text-red-500 hover:underline text-3xl'>Upcoming</Link>
            <Link to="/" className='hover:text-red-500 hover:underline text-3xl'>Popular</Link>
          </div>
          <div>
              <input
              type="text"
              placeholder="Search movie"
              className="mr-2 text-center border-black p-2 rounded-md"
              // value={query}
              // onChange={(e) => setQuery(e.target.value)}
              />
              <button className="bg-black text-white p-2 rounded-md px-6">
              Search
              </button>
          </div>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
