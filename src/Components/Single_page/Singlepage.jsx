import React, { useEffect, useState, useContext } from "react";
import Header from "../Header/Header";
import axios from "axios";
import { imageUrl } from "../ContextData/Context";
import { useParams } from "react-router-dom";

const Singlepage = () => {
  const {id} = useParams();
  if(!id) return;

  const [movie, setmovie] = useState({});
  const [cast, setcast] = useState([]);
  const { baseUrl } = useContext(imageUrl);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      );
      //   console.log(res.data);
      setmovie(res.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchCast = async () => {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      );
      console.log(result.data);
      setcast(result.data.cast);
    };
    fetchCast();
  }, []);
  return (
    <>
      <Header />
      <div>
        <div className="flex gap-4 mt-3 mb-4">
          <div className="">
            <div className="flex gap-4 mb-4">
              <div className=" h-full w-fit">
                <div>
                  <img
                    src={`${baseUrl}${movie.poster_path}`}
                    className="h-60 w-60"
                    alt=""
                  />
                </div>
              </div>
              <div className=" h-full w-full">
                <h1 className="text-6xl">{movie.original_title}</h1>
                <h1 className="text-2xl text-blue-800">
                  RATING:{movie.vote_average}
                </h1>
                <span className="text-xl  w-fit pr-4">
                  {movie.runtime}MIN
                </span>
                <span className="text-xl text-blue-800">{movie.tagline}</span>
                <h1 className="text-xl">Release date :{movie.release_date}</h1>
              </div>
            </div>
            <div>
              <h1 className="text-3xl">OVERVIEW</h1>
              <p>{movie.overview}</p>
            </div>
          </div>
          <div className="h-96 w-full ">
            <img
              src={`${baseUrl}${movie.backdrop_path}`}
              className="h-full w-full"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold  mb-4">CAST</h1>
        <div className="grid grid-cols-6 gap-3">
          {cast.map((actor) => (
            <div className="bg-white p-4 rounded-xl hover:bg-gray-300 border-4 hover:border-blue-500">
              <div key={actor.id}>
                <img
                  src={`${baseUrl}${actor.profile_path}`}
                  alt=""
                  className="h-full w-full"
                />
              </div>
              <ul className=" text-xl font-semibold ">
                <li>{actor.name}</li>
                <li>Charactor:{actor.character}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Singlepage;
