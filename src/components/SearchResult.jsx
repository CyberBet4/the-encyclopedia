import React, { useState, useEffect } from 'react'
import ResultCards from './ResultCards'
// import { css } from  '@emotion/react'
// import ClipLoader from 'react-spinners/ClipLoader'
import BarLoader from 'react-spinners/BarLoader'
import axios from 'axios'


const SearchResult = ({ keyword }) => {

    const [ stat, setStat ] = useState({ status : false, results : null, loading : false })
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
                setStat({ 
                    results : null,
                    status : false 
                })
            }
        }

        //run axios function when keyword is not empty
        if (keyword !== '') {
            setsearchInit(true)
            FetchData();
        }   
    }, [keyword])


    // display error
    const displayError = () => {
        return <p className="alert text-center alert-danger">Sorry! An error occurred</p>
    }
    
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
        // let esc = ''
         if(!searchInit){
            console.log('nothing');
            return <>Nothing Yet ! </>
        }
        if (stat.results === null && stat.loading === false){
            console.log('loading');
            setTimeout(()=> {
                setStat({ loading : true, status : false })
            }, 2000)
            return <div className="d-flex justify-content-center">
                <BarLoader color={"#0466C8"} height={4} size={40} />          
            </div>
        }
        else if(stat.results === null && stat.status){
            // if no results found
            return <>No response from server ! </>
        }
        else if(stat.status && searchInit && stat.results != null){
            return getDatas()
         }
         else{
            return displayError()
         }   
    } 

        console.log(stat.results);

    return (
        
        <div >
            <div style={{width : 450}}>
                {displayResult()}
            </div>
            
            <div className="d-flex justify-content-center">
                {/* <button className="btn btn-primary">Load more</button> */}
                {keyword}
                {/* <BarLoader color={"#0466C8"} height={4} size={40} /> */}
            </div>
            
        </div>
    )
}

export default SearchResult
