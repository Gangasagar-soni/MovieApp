import React, { useEffect, useState } from "react";
import axios from "axios";

function Baner() {
  const [items, setItems] = useState([]); // { url, title, original }
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const apiKey = "09d63397f15c343e9edcc1901173728c";
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((res) => {
        const data = (res.data.results || [])
          .filter((m) => m.backdrop_path || m.poster_path)
          .slice(0, 8)
          .map((m) => ({
            url: `https://image.tmdb.org/t/p/original/${m.backdrop_path || m.poster_path}`,
            title: m.title || m.name || "",
            original: m.original_title || m.original_name || "",
          }));
        if (data.length) setItems(data);
      })
      .catch(() => setItems([]));
  }, []);

  useEffect(() => {
    if (!items || items.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 60000);
    return () => clearInterval(id);
  }, [items]);

  const fallback = [{
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLefYrEddswwVTGf_9r3fVQ5c56AZaf_ORfA&s",
    title: "IRONHEART",
    original: "IRONHEART",
  }];

  const list = items.length ? items : fallback;

  return (
    <div className="relative w-full h-56 md:h-96 lg:h-[420px] overflow-hidden bg-black">
      {list.map((it, i) => (
        <img
          key={i}
          src={it.url}
          alt={it.title || it.original}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-linear ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      <div className="absolute inset-0 flex items-end">
        <div className="w-full bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 md:p-6">
          <div className="text-white font-extrabold text-lg md:text-3xl lg:text-4xl truncate">{list[index].title}</div>
          {list[index].original && list[index].original !== list[index].title ? (
            <div className="text-gray-200 text-sm md:text-base">Original: {list[index].original}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Baner;

// Rotating banner uses TMDB popular movies endpoint and cycles every 60s.
