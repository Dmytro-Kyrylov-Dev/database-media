import React from 'react';
import { Link } from 'react-router-dom';
import './listMovie.css';

class ListMovie extends React.Component {
    render () {
        return (
            <div>
                <Link to="/movies">Movie</Link>  
            </div>
        )
    }
}

export default ListMovie;