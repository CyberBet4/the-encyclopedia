import React from 'react'
import ResultCards from './ResultCards'
import img01 from '../assets/img/img01.jpg'
import img02 from '../assets/img/img02.jpg'

const SearchResult = () => {
    const data = {
        title : 'This is the title',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, optio soluta repellendus exercitationem expedita laboriosam. Dolor repellendus fugit esse magnam.',
        date : '12/10/2021'

    }
    return (
        <div >
            <div style={{width : 450}}>
                <ResultCards 
                    image={img01} 
                    link={'#'} 
                    title={data.title} 
                    desc={data.desc}
                    date={data.date}
                />

                {/* No Results found yet :) */}    
            </div>
            
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary">Load more</button>
            </div>
            
        </div>
    )
}

export default SearchResult
