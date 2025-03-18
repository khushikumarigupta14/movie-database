import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
const MovieDatabaseApp = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json"
      )
      .then((response) => {
        const movieList = response.data.slice(0, 12).map((movie) => ({
          ...movie,
          poster: `https://via.placeholder.com/300x450?text=${encodeURIComponent(
            movie.title
          )}`, // Placeholder Image
        }));
        setMovies(movieList);
      movies.forEach((movie) => console.log(movie.title));
    console.log("Fetched Movies:", movieList); 
      })
      .catch((error) => console.error("Error fetching movies", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        🎬 Movie Database
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-xl p-4 flex flex-col items-center neumorphism hover:scale-105 transition-transform duration-300"
            aria-label={`Movie: ${movie.title}`}
          >
            <img
              src={movie.poster}
              alt={`Poster of ${movie.title}`}
              className="w-full h-64 object-cover rounded-lg"
              loading="lazy"
            />
            <div className="text-center mt-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {movie.title}
              </h2>
              <p className="text-gray-600">
                <strong>Year:</strong> {movie.year}
              </p>
              <p className="text-gray-600">
                <strong>Director:</strong> {movie.director}
              </p>
              <p className="text-gray-600">
                <strong>Genres:</strong> {movie.genres.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDatabaseApp;
