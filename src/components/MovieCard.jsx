import React from "react";

function MovieCard({ poster_path, name }) {
  return (
    <div
      className="h-[40vh] w-[140px] bg-center bg-cover rounded-xl mb-4 hover:scale-110 duration-300 hover:curser-pointer flex items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      <div className="text-white font-bold text-xs h-10 w-full text-center bg-gray-900/70 p-1 rounded-b-xl">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
