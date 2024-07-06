import React, { useState } from 'react';
import clipAndReplace from '../utils/textReplacer.js';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({
  movie,
  isFavoritePage,
  setFavoriteMovies,
  favoriteMovies,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isFavorite, setIsFavorite] = useState(
    JSON.parse(localStorage.getItem(`favorite_${movie.id}`)) || false,
  );

  const [likedMovieIds, setLikedMovieIds] = useState(
    JSON.parse(localStorage.getItem('likedMovieIds')) || [],
  );

  const navigate = useNavigate();

  const cardStyle = {
    position: 'relative',
    width: '300px',
    height: '450px',
    margin: '0 18px 30px',
    transition: 'transform .3s ease',
    boxShadow: '0 4px 8px rgba(0,0,0,.2)',
    transform: isHover ? 'scale(1.1)' : 'scale(1)',
  };

  const textContainerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    padding: '10px',
    background: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const likeButtonStyle = {
    marginTop: '10px',
    padding: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    transition: 'color .3s ease, background .3s ease',
    alignSelf: 'flex-end',
  };

  const clickMeButtonStyle = {
    marginTop: '10px',
    padding: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    transition: 'color .3s ease, background .3s ease',
    alignSelf: 'center',
  };

  const hoverStyle = {
    // color: "#000",
    // background: "#fff",
  };

  const activeStyle = {
    transform: 'scale(0.9)',
  };

  const heartStyle = {
    width: '40px',
    height: '40px',
    fill: isFavorite ? '#FF4500' : '#fff',
    transition: 'fill .3s ease',
  };

  const handleLikeButtonClick = () => {
    setIsFavorite((prevIsFavorite) => {
      const newFavoriteState = !prevIsFavorite;

      console.log('newFavoriteState:', newFavoriteState);
      console.log('movie.id:', movie.id);

      setLikedMovieIds((prevLikedMovieIds) => {
        console.log('prevLikedMovieIds:', prevLikedMovieIds);

        let updatedLikedMovieIds;

        if (newFavoriteState) {
          if (!prevLikedMovieIds.includes(movie.id)) {
            updatedLikedMovieIds = [...prevLikedMovieIds, movie.id];
          } else {
            updatedLikedMovieIds = prevLikedMovieIds;
          }
        } else {
          updatedLikedMovieIds = prevLikedMovieIds.filter(
            (id) => id !== movie.id,
          );
        }

        if (newFavoriteState) {
          const existingLikedMovieIds =
            JSON.parse(localStorage.getItem('likedMovieIds')) || [];

          const uniqueLikedMovieIds = [
            ...new Set([...existingLikedMovieIds, ...updatedLikedMovieIds]),
          ];

          localStorage.setItem(
            'likedMovieIds',
            JSON.stringify(uniqueLikedMovieIds),
          );
        } else {
          localStorage.setItem(
            'likedMovieIds',
            JSON.stringify(updatedLikedMovieIds),
          );
        }

        return updatedLikedMovieIds;
      });

      if (isFavoritePage) {
        setFavoriteMovies((prevFavorites) => {
          console.log('prevFavorites:', prevFavorites);

          let updatedFavorites;

          if (newFavoriteState) {
            if (!prevFavorites.find((m) => m.id === movie.id)) {
              updatedFavorites = [
                ...prevFavorites,
                { ...movie, isFavorite: newFavoriteState },
              ];
            } else {
              updatedFavorites = prevFavorites;
            }
          } else {
            updatedFavorites = prevFavorites.filter((m) => m.id !== movie.id);
          }

          console.log('updatedFavorites:', updatedFavorites);

          return updatedFavorites;
        });
      }

      localStorage.setItem(
        `favorite_${movie.id}`,
        JSON.stringify(newFavoriteState),
      );

      return newFavoriteState;
    });
  };

  const handleClickMeButtonClick = () => {
    navigate(`/clippr-movie/${movie.id}`);
  };

  return (
    <div
      style={{ ...cardStyle, overflow: 'hidden', display: 'inline-block' }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <img
        key={`movie_${movie.id}`}
        style={{ width: '100%', height: '100%' }}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      {isHover && (
        <div style={textContainerStyle}>
          <div>
            <h2>{movie.title}</h2>
            <h3>{movie.release_date}</h3>
            <p>{clipAndReplace(movie.overview, 200)}</p>
            {
              isFavoritePage
              // && movie.backdrop_path
              // && (
              //   <img
              //     src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              //     alt="Backdrop"
              //     style={{ width: "100%", height: "auto" }}
              //   />
              // )
            }
          </div>

          <button
            style={{
              ...clickMeButtonStyle,
              ...(isHover && hoverStyle),
              ...(isHover && activeStyle),
            }}
            onClick={handleClickMeButtonClick}
          >
            More Info
          </button>
          <button
            style={{
              ...likeButtonStyle,
              ...(isHover && hoverStyle),
              ...(isHover && activeStyle),
            }}
            onClick={handleLikeButtonClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style={heartStyle}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.28 2 7.5 2 4.42 4.42 2 7.5 2c1.74 0 3.41.81 4.5 2.09C15.09 2.81 16.76 2 18.5 2 21.58 2 24 4.42 24 7.5c0 3.78-3.4 6.75-8.55 12.54L12 21.35z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
