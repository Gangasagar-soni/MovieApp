import { useEffect, useState } from "react";
import "./App.css";
import Baner from "./components/Baner";
import Movie from "./components/movie";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [watchlist, setWatchlist] = useState([]);

  let handleAddtoWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    localStorage.setItem('moviesApp',JSON.stringify(newWatchlist))
    setWatchlist(newWatchlist);
    console.log(newWatchlist);
  };

  let handleRemovefromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });

    setWatchlist(filteredWatchlist);
    console.log(filteredWatchlist)
  };

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage))
  },[])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Baner />
                <Movie
                  watchlist={watchlist}
                  handleAddtoWatchlist={handleAddtoWatchlist}
                  handleRemovefromWatchlist={handleRemovefromWatchlist}
                
                />
              </>
            }
          />
          <Route path="/Watchlist" element={<Watchlist watchlist={watchlist} setWatchlist={setWatchlist}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
