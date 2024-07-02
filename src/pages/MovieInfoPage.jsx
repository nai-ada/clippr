import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieInfoPage = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [cast, setCast] = useState([]);
    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bc1176d9182b4b78447ac54123a3d34a`);
                if (response.ok) {
                    const data = await response.json();
                    setMovieDetails(data);
                } else {
                    throw new Error('Failed to fetch movie details');
                }
            } catch (error) {
                console.error(error);
            }
        };
        const fetchMovieCast = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=bc1176d9182b4b78447ac54123a3d34a`);
                if (response.ok) {
                    const data = await response.json();
                    setCast(data.cast.slice(0, 16));
                } else {
                    throw new Error('Failed to fetch movie cast');
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchMovieDetails();
        fetchMovieCast();
        return () => {
        };
    }, [id]);
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#1F1F1F',
            padding: '20px',
        },
        movieDetailsContainer: {
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
            width: '70%',
            margin: '0 auto',
            borderRadius: '8px',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
            backgroundColor: '#2F2F2F',
            color: '#fff',
            padding: '20px',
        },
        image: {
            maxWidth: '100%',
            maxHeight: '800px',
            width: '100%',
            borderRadius: '8px',
            marginBottom: '20px',
        },
        title: {
            fontSize: '24px',
            margin: '10px 0',
            display: 'flex',
            alignItems: 'center',
        },
        ratingCircle: {
            width: '70px',
            height: '60px',
            borderRadius: '70%',
            backgroundColor: '#202020',
            color: '#FFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '15px',
            fontWeight: 'bold',
            marginLeft: '10px',
        },
        overview: {
            fontSize: '16px',
            marginBottom: '20px',
        },
        castContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
        },
        actorContainer: {
            margin: '0 10px 20px 0',
            textAlign: 'center',
            width: 'calc(50% - 20px)',
            maxWidth: '150px',
        },
        actorImage: {
            width: '100%',
            height: '215px',
            borderRadius: '8px',
            marginBottom: '5px',
        },
        actorName: {
            fontSize: '14px',
        },
    };
    return (
        <div style={styles.container}>
            {movieDetails ? (
                <div style={styles.movieDetailsContainer}>
                    <img src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`} alt={movieDetails.title} style={styles.image} />
                    <div style={styles.title}>
                        <h2>{movieDetails.title}</h2>
                        <div style={styles.ratingCircle}>{movieDetails.vote_average}</div>
                    </div>
                    <p style={styles.overview}>{movieDetails.overview}</p>
                    <div style={styles.castContainer}>
                        {cast.map(actor => (
                            <div key={actor.id} style={styles.actorContainer}>
                                <img src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`} alt={actor.name} style={styles.actorImage} />
                                <p style={styles.actorName}>{actor.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};
export default MovieInfoPage;