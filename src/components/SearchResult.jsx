import React, { useState, useEffect } from 'react'
import ResultCards from './ResultCards'
import img01 from '../assets/img/img01.jpg'
import img02 from '../assets/img/img02.jpg'
import axios from 'axios'


const SearchResult = ({ keyword }) => {

    const [ stat, setStat ] = useState({})
    
    // get Error function
    const getErrorStatus = (err) => {
        err === 0 ? displayError() : <></>
        console.log(err);
    }

     useEffect(() => {
        
        //api from News Api  
        const fetchData = async () => {
            try{
                const res = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=375033e55f524d279c9021abdf94f0ed`) //6515b9f031004066b18e05b72c87aee1

                        const datas = res.data.articles

                        setStat({
                            errorMessage : '',
                            results : datas,
                            status : true 
                        })
                } catch(err){
                    console.log(err);
                    getErrorStatus(err.request.status);
                    // Hook doesn't work here, it'll just be doing unlimited rendering
                }
        }
        fetchData(); //run axios function
    })
     
    // display error
    const displayError = () => <p className="alert text-center alert-danger">Sorry! An error occurred</p>
    
    const getDatas = () => {
        // displays the data received
        return (
        
        stat.results.map(data => {
            return <ResultCards key={data.url}
                image={data.urlToImage} 
                title={data.title} 
                link={data.url}
                desc={`${data.description.slice(0, 200)}...`}
                date={`${data.publishedAt.slice(0, 10)}`}
                />
        })
        )
    }

    return (
        
        <div >
            <div style={{width : 450}}>
                
                {stat.status ? 
                // if status of the search is true
                getDatas()
                : 
                // if status of the search is false   
                displayError()
                // No Results found yet :)  
                }
            </div>
            
            <div className="d-flex justify-content-center">
                {/* <button className="btn btn-primary">Load more</button> */}
                {keyword}
            </div>
            
        </div>
    )
}

export default SearchResult
