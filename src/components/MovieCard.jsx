import { useContext } from "react";
import React from "react";
import { ValuesContext } from "../Context/MainContext";

function MovieCard({ movieObj, poster_path, name }) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  let Info = useContext(ValuesContext);
  let watchlist = Info.watchlist;
  let handleRemovefromWatchlist = Info.handleRemovefromWatchlist;
  let handleAddtoWatchlist = Info.handleAddtoWatchlist;
  return (
    <div
      className="relative w-36 sm:w-40 md:w-48 lg:w-56 h-[220px] bg-center bg-cover rounded-xl mb-4 transform transition hover:scale-105 cursor-pointer flex items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w342/${poster_path})`,
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
            className="h-6 w-6 absolute top-2 right-2"
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
            className="h-6 w-6 absolute top-2 right-2"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
      <div className="text-white font-semibold text-sm w-full text-center bg-gray-900/70 py-2 px-1 rounded-b-xl truncate">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
