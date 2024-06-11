import { useState, useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import placeholderImage from '../../placeholder_image.gif';
import Message from "../UI/Message";
import MovieDetails from "./MovieDetails";
import './Movies.css';

function Movies({
    movies,
    activeGenre,
    setShowFilters
}) {
    const [selectedMovie, setSelectedMovie] = useState(null);

    // Scroll to top when a genre is clicked
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeGenre]);

    // Display movie details based on clicked item
    const handleMovieSelection = (id) => {
        setSelectedMovie(id);
        setShowFilters(false);
    }

    // Close movie details on back
    const handleCloseMovieDetail = () => {
        setSelectedMovie(null);
        setShowFilters(true);
    }

    // Filter movies based on the active genre
    const filteredMovies = activeGenre
        ? movies.flatMap(({ year, movies }) => {
            const genreFilteredMovies = movies.filter((movie) =>
                movie.genre_ids.includes(activeGenre)
            );
            return genreFilteredMovies.length > 0
                ? [{ year, movies: genreFilteredMovies }]
                : [];
        })
        : movies;

    return (
        <>
            {!selectedMovie ? (
                <div className="movies">
                    {filteredMovies && filteredMovies.length > 0 ? (
                        <div className="movies_yearly">
                            {filteredMovies.map(({ year, movies }) => (
                                <div key={year}>
                                    <h2 className="movies_year">{year}</h2>
                                    <ul className="movies_list">
                                        {movies.map(movie => (
                                            <li className="movie" key={movie.id} onClick={() => handleMovieSelection(movie.id)}>
                                                <LazyLoadImage
                                                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                                                    alt={movie.title}
                                                    height='auto'
                                                    placeholderSrc={placeholderImage}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <Message text='⛔ No movies found. Please come back later.' />
                    )}
                </div>
            ) : (
                <MovieDetails selectedMovie={selectedMovie} onClose={handleCloseMovieDetail} />
            )}
        </>
    )
}

export default Movies;
