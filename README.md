# 🎬 Movie Database App

A simple React-based movie database application that fetches movie data from a public API and displays it in a responsive UI. This project utilizes `axios` for data fetching and Tailwind CSS for styling.

## 🚀 Features

- Fetches movie data from an open-source API
- Displays movies with title, year, director, and genres
- Uses placeholder images for movie posters
- Responsive design with grid layout

## 🛠 Technologies Used

- React.js
- Axios
- Tailwind CSS

## 📷 Screenshot

![Movie Database Preview](https://via.placeholder.com/800x400?text=Movie+Database+App+Preview)

## 📦 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/movie-database-app.git
   ```

2. Navigate to the project directory:
   ```sh
   cd movie-database-app
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

## 🔧 Usage

- Open `http://localhost:5173` (or as specified in your terminal) in your browser.
- Browse through the fetched movies displayed in a grid.
- Hover over movies to see the interactive effects.

## 📜 Code Overview

```jsx
import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const MovieDatabaseApp = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json")
      .then((response) => {
        const movieList = response.data.slice(0, 12).map((movie) => ({
          ...movie,
          poster: `https://via.placeholder.com/300x450?text=${encodeURIComponent(movie.title)}`,
        }));
        setMovies(movieList);
        console.log("Fetched Movies:", movieList);
      })
      .catch((error) => console.error("Error fetching movies", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🎬 Movie Database</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <div key={index} className="relative bg-white shadow-lg rounded-xl p-4 flex flex-col items-center neumorphism hover:scale-105 transition-transform duration-300">
            <img src={movie.poster} alt={`Poster of ${movie.title}`} className="w-full h-64 object-cover rounded-lg" loading="lazy" />
            <div className="text-center mt-4">
              <h2 className="text-xl font-semibold text-gray-800">{movie.title}</h2>
              <p className="text-gray-600"><strong>Year:</strong> {movie.year}</p>
              <p className="text-gray-600"><strong>Director:</strong> {movie.director}</p>
              <p className="text-gray-600"><strong>Genres:</strong> {movie.genres.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDatabaseApp;
```



