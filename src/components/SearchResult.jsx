import React, { useState, useEffect } from 'react'
// require('dotenv').config()
import ResultCards from './ResultCards'
import img01 from '../assets/img/img01.jpg'
import img02 from '../assets/img/img02.jpg'
import axios from 'axios'


const SearchResult = () => {

    const [ stat, setStat ] = useState({})

     useEffect(() => {
        
        //api from News Api  
        const fetchData = async () => {
            try{
                const res = await axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=375033e55f524d279c9021abdf94f0ed') //6515b9f031004066b18e05b72c87aee1

                        const datas = res.data.articles

                        setStat({
                            errorMessage : '',
                            resDatas : datas,
                            status : true 
                        })
                } catch(err){
                    console.log(err);
                    // setStat({
                    //         status : false,
                    //         errorMessage : 'Sorry! Too many Requests sent'
                    //     })

                    //     console.log(stat);
                    // if(err.response.status === 429) {
                    //     // if error occurs from too many requests
                    //     setStat({
                    //         status : false,
                    //         errorMessage : 'Sorry! Too many Requests sent'
                    //     })
                        
                    // }
                    // else if(err.request) {
                    //     console.log(`Request Error: ${err.request}`);
                    // }else {
                    //     console.log(` Error: `);
                    // }
                }
        }
        fetchData(); //run axios function
    })
     
    const displayError = () => {
        return <>Sorry! An error occurred</>
        
    }
    
    const getDatas = () => {
        // displays the data received
        return (
        
        stat.resDatas.map(data => {
            return <ResultCards key={data.url}
                image={data.urlToImage} 
                title={data.title} 
                link={data.url}
                desc={data.description}
                date={data.publishedAt}
                />
            // </a>
        })
        )
    }

    return (
        
        <div >
            <div style={{width : 450}}>
                
                {stat.status ? 
                // if status of the search is true
                getDatas()
                : <>
                {/* if status of the search is false */}
                   <p className="alert text-center alert-danger">
                        {/* {stat.errorMessage} */}
                        {displayError()}
                    </p>     
                </>}
                {/* No Results found yet :) */}    
            </div>
            
            <div className="d-flex justify-content-center">
                {/* <button className="btn btn-primary">Load more</button> */}
            </div>
            
        </div>
    )
}

export default SearchResult
