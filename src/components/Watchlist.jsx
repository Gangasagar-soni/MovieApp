import React, { useEffect, useState } from "react";

function Watchlist({ watchlist, setWatchlist }) {
  const [search, setsearch] = useState("");

  let handleSearch = (e) => {
    setsearch(e.target.value);
  };

  let ShortIncresing=()=>{
    let ShortIncresing=watchlist.sort((movieA, movieB)=>{
      return movieB.vote_average-movieA.vote_average
    })
    setWatchlist([...ShortIncresing])
  }

  let ShortDecresing=()=>{
      let ShortDecresing= watchlist.sort((movieA, movieB)=>{
      return movieA.vote_average-movieB.vote_average
    })

      setWatchlist([...ShortDecresing])
  }

  useEffect(()=>{
  },[watchlist])
  return (
    <>
      <div className="flex justify-center flex-wrap m-4 gap-7">
        <div className="w-[80px] h-[30px] text-center text-[13px] bg-blue-400 rounded-lg pb-[3px] text-white font-bold p-[3px] ">
          Action
        </div>

        <div className="w-[80px] h-[30px] text-center text-[13px] bg-gray-400 rounded-lg pb-[3px] text-white font-bold p-[3px]">
          Action
        </div>

        <div className="w-[80px] h-[30-px] text-center text-[13px] bg-blue-400 rounded-lg pb-[3px] text-white font-bold p-[3px]">
          Action
        </div>
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
                    xmlns="http://www.w3.org/2000/svg"
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
                    xmlns="http://www.w3.org/2000/svg"
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
                    <td className="border-r-[1px] border-gray-100">Thriller</td>
                    <td className="font-red">
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
