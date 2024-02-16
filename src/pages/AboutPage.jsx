import React from "react";

const AboutPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", 
        backgroundColor: "#222", 
        color: "#fff", 
        fontFamily: "Arial, sans-serif",
        padding: "20px", 
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
      <a href="https://www.themoviedb.org/" target="_blank">
  <img
    src="/src/pages/images/tmdb.png"
    alt="TMDB Logo"
    style={{ width: "300px" }}
  />
</a>
        <h1
          style={{
            fontSize: "2.5rem",
            color: "#fff", 
          }}
        >
          Welcome To CLIPPR
        </h1>
      </div>
      <p
        style={{
          padding: "0 30rem", 
          lineHeight: "1.6",
          textAlign: "justify",
          color: "#ddd"
        }}
      >
        Welcome to Clippr, your go-to destination for an immersive online
        journey. At Clippr, we're committed to delivering top-notch user
        experiences tailored to your preferences. Our platform prioritizes
        usability and efficiency, allowing you to effortlessly discover and
        indulge in content that resonates with you, be it entertainment,
        knowledge, or the latest trends. Dive into Clippr's diverse offerings,
        where every click unveils new avenues for exploration and inspiration.
        Join our vibrant community today and unlock a world of limitless
        possibilities, waiting just a click away.
      </p>
    </div>
  );
};

export default AboutPage;
