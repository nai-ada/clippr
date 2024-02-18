import React, { useState } from "react";
import clipAndReplace from "../utils/textReplacer.js";

const MovieCard = ({ movie }) => {
  const [isHover, setIsHover] = useState(false);
  const [isFavorite, setIsFavorite] = useState(
    JSON.parse(localStorage.getItem(`favorite_${movie.id}`)) || false
  );

  const cardStyle = {
    position: "relative",
    width: "300px",
    height: "450px",
    margin: "0 18px 30px", // Adjusted margin for spacing
    transition: "transform .3s ease",
    boxShadow: "0   4px   8px rgba(0,0,0,.2)",
    transform: isHover ? "scale(1.1)" : "scale(1)",
  };

  const textContainerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    padding: "10px",
    background: "rgba(0, 0, 0, 0.7)",
    color: "#fff",
    boxSizing: "border-box", // Ensure padding is included in the width and height
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const likeButtonStyle = {
    marginTop: "10px",
    padding: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
    outline: "none", // Remove outline on hover
    transition: "color .3s ease, background .3s ease",
    alignSelf: "flex-end", // Align like button to the bottom right
  };

  const clickMeButtonStyle = {
    marginTop: "10px",
    padding: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
    outline: "none", // Remove outline on hover
    transition: "color .3s ease, background .3s ease",
    alignSelf: "center", // Align click me button to the center
  };

  const hoverStyle = {
    color: "#000", // Change text color on hover
    background: "#fff", // Change background color on hover
  };

  const activeStyle = {
    transform: "scale(0.9)", // Change scale on click
  };

  const heartStyle = {
    width: "40px", // Adjust the width and height as needed
    height: "40px",
    fill: isFavorite ? "#FF4500" : "#fff", // Change fill color based on whether it's liked or not
    transition: "fill .3s ease",
  };

  const handleLikeButtonClick = () => {
    const newFavoriteState = !isFavorite;
    setIsFavorite(newFavoriteState);
    localStorage.setItem(`favorite_${movie.id}`, JSON.stringify(newFavoriteState));
  };

  const handleClickMeButtonClick = () => {
    // Implement your click me button click functionality here
    console.log("Click me button clicked!");
  };

  return (
    <div
      style={{ ...cardStyle, overflow: "hidden", display: "inline-block" }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <img
        key={movie.id}
        style={{ width: "100%", height: "100%" }}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      {isHover && (
        <div style={textContainerStyle}>
          <div>
            <h2>{movie.title}</h2>
            <h3>{movie.release_date}</h3>
            <p>{clipAndReplace(movie.overview, 200)}</p>
          </div>
          
          {/* Click me button */}
          <button
            style={{ ...clickMeButtonStyle, ...(isHover && hoverStyle), ...(isHover && activeStyle) }}
            onClick={handleClickMeButtonClick}
          >
            Click me
          </button>{/* Like button */}
          <button
            style={{ ...likeButtonStyle, ...(isHover && hoverStyle), ...(isHover && activeStyle) }}
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