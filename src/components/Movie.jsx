import { useState } from "react";
import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movie() {
  const [page, setpage] = useState(1);
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=09d63397f15c343e9edcc1901173728c&language=en-US&page=${page}`
      )
      .then(function (res) {
        setmovies(res.data.results);
      });
  }, [page]);

  function increasePage() {
    setpage(page + 1);
  }
  function decreasePage() {
    if (page > 1) {
      setpage(page - 1);
    }
  }

  return (
    <div className="pt-4 px-4 md:px-8">
      <div className="text-lg mb-3 font-bold text-center">Trending Movies</div>
      <div className="flex flex-wrap justify-center gap-4">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              movieObj={movieObj}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              key={movieObj.id}
            />
          );
        })}
      </div>
      <Pagination
        increasePage={increasePage}
        decreasePage={decreasePage}
        page={page}
      />
    </div>
  );
}
export default Movie;

//apikey for movies :https://api.themoviedb.org/3/movie/popular?api_key=09d63397f15c343e9edcc1901173728c&language=en-US&page=1
