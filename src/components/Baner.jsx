import React from "react";

function Baner() {
  return (
    <div
      className="h-[20vh] min-h-85 md:h-[80vh] bg-cover bg-center flex items-end"
      style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLefYrEddswwVTGf_9r3fVQ5c56AZaf_ORfA&s')` }}
    >
      <div className="text-white font-bold text-xl w-full text-center bg-gray-900/70 p-1">
        IRONHEART
      </div>
    </div>
  );
}

export default Baner;

//ApiKey for banner:https://api.themoviedb.org/3/collection/2344?api_key=09d63397f15c343e9edcc1901173728c&language=en-US
