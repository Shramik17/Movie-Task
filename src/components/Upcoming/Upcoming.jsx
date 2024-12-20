import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

const Upcoming = () => {
     const [movies, setMovies] = useState([]);
     

     const fetchPopularMovies = async () => {
        const apiKey = ''; // Replace with your TMDB API key
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1`;
    
        try {
          const response = await axios.get(url);
          setMovies(response.data.results);
        } catch (error) {
          console.error('Error fetching popular movies:', error);
        }
      };

       useEffect(() => {
          fetchPopularMovies();
        }, []);
  return (
    <>
       <Navbar/>
        <div className="movie-results p-4 bg-gray-100">
            {movies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {movies.map((movie) => (
                <div key={movie.id} className="movie-item p-4 border rounded-md shadow-md bg-white">
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
                    <p className="text-sm text-gray-600">Release Date: {movie.release_date}</p>
                </div>
                ))}
            </div>
            ) : (
            <p className="text-center text-gray-500">No movies found.</p>
            )}
        </div>
    </>
  )
}

export default Upcoming