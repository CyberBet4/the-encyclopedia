import React from 'react'
import { FiChevronRight, FiSearch } from 'react-icons/fi'
const SearchBar = () => {
    return (
        <div>
            <div>
            <div class="main-search">
                <div style={{height : 48, position : 'relative'}}>
                    <FiSearch className='search-icon' />
                    <input type="text" class="form-control" placeholder="Search something.." aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-primary" type="button" id="button-addon2">Search <FiChevronRight /> </button>
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default SearchBar
