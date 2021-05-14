import React from 'react';
import './movieDetails.css';

class MovieDetails extends React.Component {
    componentDidMount() {
        const { match: { params: id }} = this.props.params;
        this.props.getSingleMovieDetails(id.id);
    }

    render () {
        const { singleMovieDetails } = this.props;
        let posterIMG = 'https://image.tmdb.org/t/p/w500';

        return (
            <div className="moviePageStyle">
                <img alt="" src={posterIMG + singleMovieDetails.poster_path} className="poster"/>
                <h3>{singleMovieDetails.original_title} ({singleMovieDetails.title})</h3>
                <p>{singleMovieDetails.release_date}</p>
                <p>Rating IMDb: {singleMovieDetails.vote_average}</p>
                <p>{singleMovieDetails.overview}</p>
            </div>
        )
    }
}

export default MovieDetails;