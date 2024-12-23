import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import { imageUrl } from "../ContextData/Context";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const {baseUrl}=useContext(imageUrl)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1"
        );
        setMovies(res.data.results);
        console.log(res.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <Header />
      
      <div className="grid grid-cols-3 gap-4 px-4 py-4 min-[500px]:grid-cols-4">
        {movies.map((movie,index) => (
          <Link to={`/single-page/${movie.id}`} className="mb-4 bg-white p-4 rounded-xl hover:bg-gray-300 border-4 hover:border-blue-500 " key={index}>
            <div >
              <img src={`${baseUrl}${movie.poster_path}`} alt="" className="w-full h-full rounded-lg" />
            </div>
            <div>
              <ul key={index} className="text-center text-2xl ">
                <li className="font-semibold">{movie.title}</li>
                <li className="font-semibold">Rating: {movie.vote_average}</li>
                <li>{}</li>
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
