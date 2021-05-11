import React from 'react';
import { Link } from 'react-router-dom';
import './listMovie.css';

class ListMovie extends React.Component {
    componentDidMount() {
        this.props.getUpdatedListMovie();
    }

    render () {
        let posterIMG = 'https://image.tmdb.org/t/p/w500';
        const showMovies = this.props.updatedListMovie.map(movie => (
            <div className="mediaContainerMainMovie" key={movie.id}>
                <div className="mediaContainerMovie">
                    <img alt="" src={posterIMG + movie.poster_path} className="poster"/>
                    <div className="mediaContainerMovieInfo">
                        <h3>{movie.original_title}<br/>({movie.title})</h3>
                        <p>Rating IMDb: {movie.vote_average}</p>
                    </div>
                </div>
            </div>
        ));

        return (
            <div>
                <Link className="buttonMain" to="/">Main</Link>
                <br/>
                <br/>
                {showMovies} 
            </div>
        )
    }
}

export default ListMovie;