import "./App.css";
import Baner from "./components/Baner";
import Movie from "./components/movie";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
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
                <Movie />
              </>
            }
          />
          <Route path="/Watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
