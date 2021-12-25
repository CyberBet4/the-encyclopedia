import React from 'react'
import SearchBar from '../components/SearchBar'
import SearchResult from '../components/SearchResult'

const HomeSearch = () => {
    return (
        <div className="">
            
                <div className=" p-5 d-flex justify-content-center">
                    <div>
                        {/* Search Bar shows here */}
                        <SearchBar />
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    {/* Search Result Shows here */}
                    <SearchResult />
                </div>
        </div>
    )
}

export default HomeSearch


