import React from "react";

function Watchlist() {
  return (
    <>
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="search movie"
          className="bg-gray-200/70 h-[26px] w-[220px] outline-none pb-1 px-2"
        />
      </div>
      <div className="overflow-hidden rounded-[10px] border border-gray-200 m-8 ">
        <table className="w-full text-center text-gray-500 text-[13px]">
          <thead className="border border-gray-300">
            <tr>
              <th className="border-r-[1px] border-gray-100">Poster</th>
              <th className="border-r-[1px] border-gray-100">Name</th>
              <th className="border-r-[1px] border-gray-100">Popularity</th>
              <th className="border-r-[1px] border-gray-100">Ratings</th>
              <th className="border-r-[1px] border-gray-100">catigory</th>
              <th className="border-r-[1px] border-gray-100">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2">
              <td className="flex justify-center px-2 py-2 border-r-[1px] border-gray-100">
                <img
                  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmDzJpAJ7ystaqpaK99mtug5imFMXrXYno42YKaV3BJR3Dw7gbxsWdoAOEi_mn08Zd4Xo&usqp=CAU`}
                  className={"w-[70px] h-[50px]"}
                />
              </td>
              <td className="border-r-[1px] border-gray-100">
                <div className="m-3 text-[11px] font-bold">The Mars Men</div>
              </td>
              <td className="border-r-[1px] border-gray-100">8.5</td>
              <td className="border-r-[1px] border-gray-100">9</td>
              <td className="border-r-[1px] border-gray-100">Thriller</td>
              <td className="font-red">
                <button className="text-red-400">Delete</button>
              </td>
            </tr>
             <tr className="border-b-2">
              <td className="flex justify-center px-2 py-2 border-r-[1px] border-gray-100">
                <img
                  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7nBEVZmWDx9Im498FRmg-0Y0eg2QyuT1LIQ&s`}
                  className={"w-[70px] h-[50px]"}
                />
              </td>
              <td className="border-r-[1px] border-gray-100">
                <div className="m-3 text-[11px] font-bold">Alien: ROMULUS</div>
              </td>
              <td className="border-r-[1px] border-gray-100">5.4</td>
              <td className="border-r-[1px] border-gray-100">6.7</td>
              <td className="border-r-[1px] border-gray-100">Action</td>
              <td className="font-red">
                <button className="text-red-400">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
