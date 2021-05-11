import React from 'react';
import { Link } from 'react-router-dom';
import './listTvShow.css';

class ListTvShow extends React.Component {
    
    componentDidMount() {
        this.props.getUpdatedListTvShow();
    }

    render () {
        let posterIMG = 'https://image.tmdb.org/t/p/w500';
        const showTvShow = this.props.updatedListTvShow.map(tvshow => (
            <div className="mediaContainerMainTv" key={tvshow.id}>
                <div className="mediaContainerTv">
                    <div>
                         <img alt="" src={posterIMG + tvshow.backdrop_path} className="posterTv"/>
                    </div>
                    <div className="mediaContainerTvInfo">
                        <h3>{tvshow.original_name}<br/>({tvshow.name})</h3>
                        <p>Rating IMDb: {tvshow.vote_average}</p>    
                    </div>
                </div>
            </div>
        ));

        return (
            <div>
                <Link className="buttonMain" to="/">Main</Link>
                <br/>
                <br/>
                {showTvShow}      
            </div>
        )
    }
}

export default ListTvShow;