import React from 'react';
import './filtersBlock.css';

class FiltersBlock extends React.Component {

    render () {
        const { handleFilterChange, handleSearch } = this.props;

        return (
            <div className="filtersMain">
                <div className="filtersBox">
                   <label>Filter by: </label>
                   <select className="select-checkbox" onChange={(e) => handleFilterChange(e.target.value)}>
                        <option value="popular">Популярные</option> 
                        <option value="topRating">С наивысшим рейтингом</option>
                        <option value="boxOfficeNow">Сейчас в прокате</option>
                   </select>
                </div>
                <div className="filtersBox">
                    <input onChange={(e) => handleSearch(e.target.value)} type="search" id="search" name="search" placeholder="Find"></input>
                </div>
            </div> 
        )
    }
}

export default FiltersBlock;