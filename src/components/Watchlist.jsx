import React, { useEffect, useState, useContext } from "react";
import genreids from "./Utility/Genre.js";
import { ValuesContext } from "../Context/MainContext";

function Watchlist() {
  const [search, setsearch] = useState("");
  const [genreList, setgenreList] = useState(["All genres"]);
  const [currgenre, setcurrgenre] = useState("All genres");
  let handleSearch = (e) => {
    setsearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setcurrgenre(genre);
  };

  let Info = useContext(ValuesContext);
  let watchlist = Info.watchlist;
  let handleRemovefromWatchlist = Info.handleRemovefromWatchlist;
  let setWatchlist = Info.setWatchlist;

  let ShortIncresing = () => {
    let sorted = [...watchlist].sort((a, b) => b.vote_average - a.vote_average);
    setWatchlist(sorted);
  };

  let ShortDecresing = () => {
    let sorted = [...watchlist].sort((a, b) => a.vote_average - b.vote_average);
    setWatchlist(sorted);
  };
  useEffect(() => {}, [watchlist]);

  useEffect(() => {
    let temp = watchlist.map((movieObj) => genreids[movieObj.genre_ids[0]]);
    let uniqueGenres = ["All genres", ...new Set(temp)];
    setgenreList(uniqueGenres);
  }, [watchlist]);
  return (
    <>
      <div className="flex justify-center flex-wrap m-4 gap-7">
        {genreList.map((genre) => (
          <div
            key={genre}
            onClick={() => handleFilter(genre)}
            className={
              currgenre === genre
                ? "px-4 py-2 min-w-max flex items-center justify-center bg-blue-500 rounded-lg text-white font-bold text-sm cursor-pointer"
                : "px-4 py-2 min-w-max flex items-center justify-center bg-gray-400 rounded-lg text-white font-bold text-sm cursor-pointer"
            }
          >
            {genre}
          </div>
        ))}
      </div>

      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="search movie"
          className="bg-gray-200/70 h-[26px] w-[220px] outline-none pb-1 px-2"
        />
      </div>
      <div className="overflow-hidden rounded-[10px] border border-gray-200 m-8 ">
        <table className="w-full text-center text-gray-500 text-[13px]">
          <thead className="border border-gray-300">
            <tr>
              <th className="border-r-[1px] border-gray-100 ">Poster</th>
              <th className="border-r-[1px] border-gray-100">Name</th>
              <th className="border-r-[1px] border-gray-100 p-1">Popularity</th>
              <th className="flex flex-end border-r-[1px] border-gray-100 place-content-center">
                <div className="pt-[7px]" onClick={ShortIncresing}>
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.47 10.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 12.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M11.47 4.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="p-1">Ratings</div>
                <div className="pt-[7px] ml-1" onClick={ShortDecresing}>
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </th>
              <th className="border-r-[1px] border-gray-100 p-1">catigory</th>
              <th className="border-r-[1px] border-gray-100 p-1">Remove</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currgenre == "All genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] == currgenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex justify-center px-2 py-2 border-r-[1px] border-gray-100">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        className={"w-[70px] h-[50px]"}
                      />
                    </td>
                    <td className="border-r-[1px] border-gray-100">
                      <div className="m-3 text-[11px] font-bold">
                        {movieObj.original_title}
                      </div>
                    </td>
                    <td className="border-r-[1px] border-gray-100">
                      {movieObj.popularity}
                    </td>
                    <td className="border-r-[1px] border-gray-100">
                      {movieObj.vote_average}
                    </td>
                    <td className="border-r-[1px] border-gray-100">
                      {genreids[movieObj.genre_ids[0]]}
                    </td>
                    <td
                      onClick={() => {
                        handleRemovefromWatchlist(movieObj);
                      }}
                      className="font-red"
                    >
                      <button className="text-red-400">Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
