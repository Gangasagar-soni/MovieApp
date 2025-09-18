import React from "react";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchlist,
  handleRemovefromWatchlist,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i<watchlist.length; i++){
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
    
  }
  return (
  <div
  className="relative h-[40vh] w-[140px] bg-center bg-cover rounded-xl mb-4 hover:scale-110 duration-300 hover:cursor-pointer flex items-end"
  style={{
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
  }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => {
            handleRemovefromWatchlist(movieObj);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="red"
            className="size-6 absolute top-0 right-0 size-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ) : (
        <div
          onClick={() => {
            handleAddtoWatchlist(movieObj);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="absolute top-0 right-0 size-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
      <div className="text-white font-bold text-xs h-10 w-full text-center bg-gray-900/70 p-1 rounded-b-xl">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
