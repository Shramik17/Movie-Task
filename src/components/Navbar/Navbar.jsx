import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Navbar = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
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
      <div className="movie-results">
          {movies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  className="movie-item p-4 border rounded-md shadow-md bg-white"
                >
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={movie.title}
                      className="w-full rounded-md"
                    />
                  ) : (
                    <div className="h-48 bg-gray-300 flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}
                  <h3 className="text-lg font-bold mt-2">{movie.title}</h3>
                  <p className="text-sm text-gray-600">
                    Release Date: {movie.release_date}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No movies found.</p>
          )}
        </div>
    </>
  );
};

export default Navbar;
