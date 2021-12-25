import React from 'react'
import { FiChevronRight, FiSearch } from 'react-icons/fi'
const SearchBar = () => {
    return (
        <div>
            <div  style={{width : 450 }}>
                <div class="main-search">
                    <div style={{height : 48, position : 'relative'}}>
                        <FiSearch className='search-icon' />
                        <input type="text" class="form-control" placeholder="Search something.." aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-primary rounded" type="button" id="button-addon2">Search <FiChevronRight /> </button>
                    </div>
                    <small>Processing time: 5ms</small>
                    <div className="d-flex align-content-center justify-content-end">
                        <label className="mr-3" style={{fontSize : 16, cursor : 'pointer'}}>
                            <input type="checkbox" name="" className="mr-1" id="" />
                            Language
                        </label>
                        
                        <select name="" id="" className="">
                            <option value="">Relevant</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
