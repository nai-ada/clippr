import React, { useState } from "react";

const MovieCard = ({movie}) => {
  const [isHover, setIsHover] = useState(false);

  const cardStyle = {
    width: "300px",
    height: "450px",
    marginLeft: "33px",
    marginTop: "15px",
    marginBottom: "22px",
    transition: "transform .3s ease",
    boxShadow: "0   4px   8px rgba(0,0,0,.2)",
    transform: isHover ? "scale(1.1)" : "scale(1)",
  };

  return (
    <img
      key={movie.id}
      style={cardStyle}
      onMouseEnter={(event) => {
        setIsHover(true);
      }}
      onMouseLeave={(event) => {
        setIsHover(false);
      }}
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
    />
  );
};

export default MovieCard;
