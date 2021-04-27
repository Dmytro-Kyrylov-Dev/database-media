import React from 'react';
import './main.css';
import '../../pages/main/main.css';
import movieImg from '../../assets/movie.jpg';
import tvImg from '../../assets/tv.jpg';
import { Link } from 'react-router-dom';

class MainPageBody extends React.Component {
    render () {
        return (
            <div className="navigation">
                <div className="navigationSection">
                    <Link to='/movies'>
                       <img className="cover" src={movieImg} alt="Movie" />
                       <div className="titleNavigation"><h5>Movies</h5></div>
                    </Link>
                </div>
                <div className="navigationSection">
                    <Link to='/tv-shows'>
                      <img className="cover" src={tvImg} alt="Movie" />
                      <div className="titleNavigation"><h5>TV Shows</h5></div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default MainPageBody;