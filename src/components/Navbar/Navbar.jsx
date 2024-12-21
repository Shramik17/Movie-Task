import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  // Function to fetch popular movies
  const fetchPopularMovies = async () => {
    const apiKey = 'c45a857c193f6302f2b5061c3b85e743'; // Replace with your TMDB API key
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    }
  };

  // Function to search for movies based on the query
  const searchMovies = async () => {
    if (!query.trim()) {
      fetchPopularMovies(); // If query is empty, fetch popular movies
      return;
    }

    const apiKey = 'c45a857c193f6302f2b5061c3b85e743'; // Replace with your TMDB API key
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  // Fetch popular movies on component mount
  useEffect(() => {
    fetchPopularMovies();
  }, []);
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
          <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search movie"
            className="mr-2 text-center border border-gray-300 p-2 rounded-md"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-md px-6"
            onClick={searchMovies}
          >
            Search
          </button>
        </div>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
