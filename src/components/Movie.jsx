import { useState } from "react";
import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

function Movie() {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=09d63397f15c343e9edcc1901173728c&language=en-US&page=1`
      )
      .then(function (res) {
        setmovies(res.data.results);
      });
  }, []);

  return (
    <div className="pt-2 p-5">
      <div className="text-lg mb-3 font-bold text-center border-t-1">
        Trending Movies
      </div>
      <div className="flex items-row flex-wrap justify-around">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Movie;

//apikey for movies :https://api.themoviedb.org/3/movie/popular?api_key=09d63397f15c343e9edcc1901173728c&language=en-US&page=1
