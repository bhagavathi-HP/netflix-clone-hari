import React, { useEffect, useState } from "react";
import axios from "./axios";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    };
    fetchdata();
  }, [fetchUrl]);
  console.log("movie row", movies);
  const base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="row">
      <h2>{title}</h2>
      {movies.map((movie) => (
        <img
          src={`${base_url}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.name}
        />
      ))}
    </div>
  );
};

export default Row;
