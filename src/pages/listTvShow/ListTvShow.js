import React from 'react';
import { Link } from 'react-router-dom';
import './listTvShow.css';
import FiltersBlock from '../../components/filtersBlock';

class ListTvShow extends React.Component {
    
    componentDidMount() {
        this.props.getUpdatedListTvShow();
    }

    render () {
        let posterIMG = 'https://image.tmdb.org/t/p/w500';
        const showTvShow = this.props.updatedListTvShow.map(tvshow => (
            <div className="mediaContainerMainTv" key={tvshow.id}>
                <Link to={`/tv-shows/${tvshow.id}`}>
                    <div className="mediaContainerTv">
                        <div>
                            <img alt="" src={posterIMG + tvshow.backdrop_path} className="posterTv"/>
                        </div>
                        <div className="mediaContainerTvInfo">
                            <h3>{tvshow.original_name}<br/>({tvshow.name})</h3>
                            <p>Rating IMDb: {tvshow.vote_average}</p>    
                        </div>
                    </div>    
                </Link>
            </div>
        ));

        return (
            <div>
                <Link className="buttonMain" to="/">Main</Link>
                <br/>
                <FiltersBlock />
                <br/>
                {showTvShow}      
            </div>
        )
    }
}

export default ListTvShow;