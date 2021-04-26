import React from 'react';
import { Link } from 'react-router-dom';
import './listMovie.css';

class ListMovie extends React.Component {
    render () {
        return (
            <div className="NavBar">
                <div>
                   <h1>Database-Media</h1> 
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Main</Link>
                        </li>
                        <li>
                            <Link to="/movies">Movie</Link>  
                        </li>
                        <li>
                            <Link to="/tv-shows">TV Shows</Link>  
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ListMovie;