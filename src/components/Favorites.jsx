import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [likedMovieIds, setLikedMovieIds] = useState([]);

  useEffect(() => {
   
    const storedLikedMovieIds = JSON.parse(localStorage.getItem('likedMovieIds')) || [];
    setLikedMovieIds(storedLikedMovieIds);

    
    const fetchFavoriteMovies = async () => {
      const movies = await Promise.all(
        storedLikedMovieIds.map(async (id) => {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bc1176d9182b4b78447ac54123a3d34a`);
          const data = await response.json();
          return data;
        })
      );
      setFavoriteMovies(movies);
    };

    fetchFavoriteMovies();
  }, []);

  const clearLocalStorage = () => {
    localStorage.clear();
    setLikedMovieIds([]);
    setFavoriteMovies([]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#282c34", color: "white" }}>
      <h1 style={{ textAlign: 'center', margin: '20px  0', fontSize: '2rem' }}>Your Favorite Movies</h1>
  
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        {favoriteMovies.length > 0 ? (
          favoriteMovies.map((movie) => (
            <MovieCard
              key={`favorite_${movie.id}`}
              movie={movie}
              isFavoritePage
              setFavoriteMovies={setFavoriteMovies}
              clearLocalStorage={clearLocalStorage} 
            />
          ))
        ) : (
          <p style={{ margin: "20px 0" }}>No favorite movies yet.</p>
        )}
      </div>
  
      <button style={{ margin: '20px auto', padding: '10px 20px', fontSize: '1rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={clearLocalStorage}>Clear Favorites</button>
    </div>
  );
};

export default Favorites;

