import React, { useEffect, useState } from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-around p-4 text-2xl items-center bg-gray-700 h-26">
          <div>
          <h1 className="cursor-pointer text-white text-3xl">MovieDb</h1>
          </div>
          <div className="flex gap-5 items-center">
          <ul className="flex gap-4 list-none">
              <li className="cursor-pointer hover:text-red-500 hover:underline text-white mr-11">Popular</li>
              {/* <li className="cursor-pointer hover:text-red-500 hover:underline text-white mr-11">Top Rated</li> */}
              <Link to='/top-rated'>Top Rated</Link>
              <li className="cursor-pointer hover:text-red-500 hover:underline text-white mr-11">Upcoming</li>
          </ul>
          <div>
              <input
              type="text"
              placeholder="Search movie"
              className="mr-2 text-center border-black p-2 rounded-md"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              />
              <button className="bg-black text-white p-2 rounded-md px-6" onClick={searchMovies}>
              Search
              </button>
          </div>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
