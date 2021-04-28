import React from 'react';
import { Link } from 'react-router-dom';
import './listTvShow.css';

class ListTvShow extends React.Component {
    render () {
        return (
            <div>
                <Link to="/tv-shows">TV Shows</Link>      
            </div>
        )
    }
}

export default ListTvShow;