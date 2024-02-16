import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("popular");
  const [movieList, setMovieList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [discoverMovie, setDiscoverMovie] = useState();

  const featMovie = {
    width: "65%",
    position: "relative", 
  };
  

  const overlayStyle = {
    position: "absolute", 
    top: 0,
    left: 0,
    width: "100%",
    height: "99.1%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    padding: "20px",
    boxSizing: "border-box",
  };

  
  const discMovie = () => {
    let url =
      "https://api.themoviedb.org/3/discover/movie?api_key=bc1176d9182b4b78447ac54123a3d34a";
    fetch(url)
      .then((res) => res.json())
      .then((json) => setDiscoverMovie(json.results[1]))
      .catch((error) => console.error("Error fetching movies:", error));
      
  };

  const getMovies = (category) => {
    let url = "";
    switch (category) {
      case "popular":
        url =
          "https://api.themoviedb.org/3/movie/popular?api_key=bc1176d9182b4b78447ac54123a3d34a";
        break;
      case "upcoming":
        url =
          "https://api.themoviedb.org/3/movie/upcoming?api_key=bc1176d9182b4b78447ac54123a3d34a";
        break;
      case "now_playing":
        url =
          "https://api.themoviedb.org/3/movie/now_playing?api_key=bc1176d9182b4b78447ac54123a3d34a";
        break;
      case "top_rated":
        url =
          "https://api.themoviedb.org/3/movie/top_rated?api_key=bc1176d9182b4b78447ac54123a3d34a";
        break;
      default:
        return;
    }
    fetch(url)
      .then((res) => res.json())
      .then((json) => setMovieList(json.results))
      .catch((error) => console.error("Error fetching movies:", error));
  };

  useEffect(() => {
    discMovie();
    getMovies(activeTab);
  }, [activeTab]);

  const handleTabClick = (newCategory) => {
    setActiveTab(newCategory);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    const apiKey = "bc1176d9182b4b78447ac54123a3d34a";
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`;

    fetch(searchUrl)
      .then((res) => res.json())
      .then((json) => {
        setMovieList(json.results);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={featMovie}>

        {/* Overlay */}
        <div style={overlayStyle}>
          <h1>{discoverMovie?.title}</h1>
          <h3>{discoverMovie?.release_date}</h3>
          <p>{discoverMovie?.overview}</p>
          <div style={{ fontSize: '20px', color: 'white' }}>
            <a href="https://example.com" style={{ textDecoration: 'none', borderColor: 'white', borderRadius: '10px', backgroundColor: 'rgba(0, 0, 0, 0.7)', opacity: '80%', padding: '13px', display: 'flex', justifyContent: 'left'}}>Watch Trailer</a>
          </div>
        </div>

        {/* Header Banner */}
        <img
          style={{ maxWidth: "100%" }}
          src={`https://image.tmdb.org/t/p/original${discoverMovie?.backdrop_path}`}
        ></img>
      </div>

   
      {/* Search Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={{
              marginRight: "10px",
              padding: "10px",
              borderRadius: "10px",
              borderColor: "white",
            }}
          />
          <button onClick={handleSearchSubmit} style={{ marginTop: "15px" }}>
            Search
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() => handleTabClick("popular")}
          style={{ marginRight: "10px" }}
        >
          Popular
        </button>
        <button
          onClick={() => handleTabClick("upcoming")}
          style={{ marginRight: "10px" }}
        >
          Upcoming
        </button>
        <button
          onClick={() => handleTabClick("now_playing")}
          style={{ marginRight: "10px" }}
        >
          Now Playing
        </button>
        <button onClick={() => handleTabClick("top_rated")}>Top Rated</button>
      </div>
      
      {/* Movie List */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          {movieList.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

