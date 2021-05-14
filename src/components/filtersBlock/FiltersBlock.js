import React from 'react';
import './filtersBlock.css';

class FiltersBlock extends React.Component {
    render () {
        return (
            <div className="filtersMain">
                <div className="filtersBox">
                   <label>Filter by: </label>
                   <select className="select-checkbox">
                        <option value="popular">Популярные</option> 
                        <option value="topRating">С наивысшим рейтингом</option>
                        <option value="boxOfficeNow">Сейчас в прокате</option>
                   </select>
                </div>
                <div className="filtersBox">
                    <input type="search" id="search" name="search" placeholder="Find"></input>
                    <input type="submit" value="Submit"></input>
                </div>
            </div> 
        )
    }
}

export default FiltersBlock;