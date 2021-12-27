import React, { useState } from 'react'
import { FiChevronRight, FiSearch } from 'react-icons/fi'
import SearchResult from '../components/SearchResult'

const SearchBar = () => {

    const [ keyword, setKeyword ] = useState('')

    const searchKeyword = event => {
        event.preventDefault()
        setKeyword(event.target[0].value)
    }

    return (
        <div>
            <div  style={{width : 450 }}>
                <div className="main-search">
                    <form onSubmit={searchKeyword}>
                        <div style={{height : 48, position : 'relative'}}>
                            <FiSearch className='search-icon' />
                            <input type="text" name='keyword' className="form-control" placeholder="Search a word.." />
                            <button className="btn btn-primary rounded" type="submit" id="button-addon2">Search <FiChevronRight /> </button>
                        </div>
                    </form>
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

                <div className="d-flex mt-5 justify-content-center">
                {/* search result */}
                    <SearchResult keyword={keyword} />
                </div>
            </div>
        </div>
    )
}

export default SearchBar
