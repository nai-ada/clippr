import React, { useState } from 'react';
import Favorites from './Favorites';
import MovieCard from './MovieCard';

const ParentComponent = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

 
  return (
    <div>
      <Favorites favoriteMovies={favoriteMovies} setFavoriteMovies={setFavoriteMovies} />
      <MovieCard favoriteMovies={favoriteMovies} setFavoriteMovies={setFavoriteMovies} />
    </div>
  );
};

export default ParentComponent;