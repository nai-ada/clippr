import React from "react";
import Favorites from "../components/Favorites";

const FavouritesPage = ({ favoriteMovies }) => {
  
  return (
    <div>
      <Favorites favoriteMovies={favoriteMovies} />
    </div>
  );
};

export default FavouritesPage;