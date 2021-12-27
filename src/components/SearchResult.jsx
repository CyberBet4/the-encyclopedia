import React, { useState, useEffect } from 'react'
import ResultCards from './ResultCards'
import img01 from '../assets/img/img01.jpg'
import img02 from '../assets/img/img02.jpg'
import axios from 'axios'


const SearchResult = ({ keyword }) => {

    const [ stat, setStat ] = useState({})
    const [ searchInit, setsearchInit ] = useState(false)
    
    useEffect(() => {

        // get Error function
        const getErrorStatus = (err) => {
            err === 0 ? displayError() : <></>
            console.log(err);
        } 

        //api from News Api  
    
        const FetchData = async () => {
            try{
                const res = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=375033e55f524d279c9021abdf94f0ed`) //6515b9f031004066b18e05b72c87aee1

                const datas = res.data.articles

                setStat({
                    errorMessage : '',
                    results : datas,
                    status : true 
                })
                
                // console.log(searchInit);
            } catch(err){
                    console.log(err);
                    getErrorStatus(err.request.status);
                    // Hook doesn't work here, it'll just be doing unlimited rendering
            }
        }

        //run axios function when keyword is not empty
        if (keyword !== '') {
            FetchData();
            setsearchInit(true) 
        }   
    }, [keyword])


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

    const displayResult = () => {
        console.log(searchInit);
        if(!searchInit){
            return <>Nothing Yet!</>
        }
        else if(stat.status && searchInit){
            return getDatas()
         }else{
            return displayError()
         }        
    }

    return (
        
        <div >
            <div style={{width : 450}}>
                {displayResult()}
            </div>
            
            <div className="d-flex justify-content-center">
                {/* <button className="btn btn-primary">Load more</button> */}
                {keyword}
            </div>
            
        </div>
    )
}

export default SearchResult
