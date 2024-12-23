import React, { useRef, useState } from 'react';
import { Link, Links, useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const [params] = useSearchParams();
  const [error, setError] = useState(null);
  const movieNameRef = useRef();
  const navigate = useNavigate();

  const handleSearch = () => {
    if(!movieNameRef.current) return;
    navigate(`/search?q=${movieNameRef.current.value}`)
  }

  return (
    <>
      <div className="flex justify-around bg-black p-5 font-roboto">
        <Link to={'/'} className="cursor-pointer text-white text-5xl hover:text-red-400">MovieDb</Link>
        <div className="flex gap-5 items-center">
          <div>
            <div className="flex gap-8 list-none text-4xl  ">
              <Link to="/popular" className="hover:text-blue-600  text-white">
                Popular
              </Link>
              <Link to="/top-rated" className="hover:text-blue-600 text-white">
                Top Rated
              </Link>
              <Link to="/upcoming-movies" className="hover:text-blue-600 text-white">
                Upcoming
              </Link>
            </div>
          </div>
          <div className="flex">
            <input
            onKeyDown={(e) => {
              if(e.key == 'Enter') handleSearch();
            }}
              type="text"
              ref={movieNameRef}
              placeholder="Movie Name"
              className="mr-2 text-center border border-gray-300 p-3 rounded-md"
              defaultValue={params.get('q') ?? ""}
            />
            <button
              className="bg-blue-500 text-white py-2 rounded-md px-10 text-2xl"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* Display error message */}
      {error && <p className="text-white text-center">{error}</p>}
    </>
  );
};

export default Header;
