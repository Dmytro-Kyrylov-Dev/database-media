import React from 'react';
import './tvShowDetails.css';

class TvShowDetails extends React.Component {
    componentDidMount() {
        const { match: { params: id }} = this.props.params;
        this.props.getSingleTvShowDetails(id.id);
    }

    render () {
        const { singleTvShowDetails } = this.props;
        let posterIMG = 'https://image.tmdb.org/t/p/w500';

        return (
            <div className="tvShowPageStyle">
                <img alt="" src={posterIMG + singleTvShowDetails.poster_path} className="poster"/>
                <h3>{singleTvShowDetails.original_name} ({singleTvShowDetails.title})</h3>
                <p>{singleTvShowDetails.release_date}</p>
                <p>Rating IMDb: {singleTvShowDetails.vote_average}</p>
                <p>{singleTvShowDetails.overview}</p>
            </div>
        )
    }
}

export default TvShowDetails;