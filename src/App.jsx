import { useEffect, useState } from "react";
import "./App.css";
import Baner from "./components/Baner";
import Movie from "./components/Movie";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import { ValuesContext } from "./Context/MainContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [watchlist, setWatchlist] = useState([]);

  let handleAddtoWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchlist));
    setWatchlist(newWatchlist);
    console.log(newWatchlist);
  };

  let handleRemovefromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchlist));
    setWatchlist(filteredWatchlist);
  };

  let info = {
    watchlist: watchlist,
    handleRemovefromWatchlist: handleRemovefromWatchlist,
    setWatchlist: setWatchlist,
    handleAddtoWatchlist: handleAddtoWatchlist,
  };
  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage));
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ValuesContext.Provider value={info}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Baner />
                  <Movie />
                </>
              }
            />
            <Route path="/Watchlist" element={<Watchlist />} />
          </Routes>
        </ValuesContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
