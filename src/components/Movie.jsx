import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

function Movie() {

  return (
    <div className="p-5">
      <div className="text-1xl m-5 font-bold text-center">
        Trending Movies
      </div>
      <div className="flex items-row flex-wrap justify-around">
        <MovieCard/>

      </div>
    </div>
  );
}
export default Movie;



//apikey:https://api.themoviedb.org/3/movie/popular?api_key=09d63397f15c343e9edcc1901173728c&language=en-US&page=1