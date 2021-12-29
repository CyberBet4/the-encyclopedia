import React, { useState, useEffect } from 'react'
import 'animate.css'
import ResultCards from './ResultCards'
import nothing from '../assets/svg/search-nothing.svg'
import BarLoader from 'react-spinners/BarLoader'
import { FiArrowUp } from 'react-icons/fi'
import axios from 'axios'


const SearchResult = ({ keyword }) => {

    const [ stat, setStat ] = useState({ status : false, results : null, loading : false })
    const [ searchInit, setsearchInit ] = useState(false)
    let [ ScrollPos, setScrollPos ] = useState(window.scrollY) // get screen viewport height

    

    useEffect(() => {

        // get Error function
        const getErrorStatus = (err) => {
            err === 0 ? displayError() : <></>
            console.log(err);
        } 

        //api from News Api  
    
        const FetchData = async () => {
            try{
                // run loader
                setStat({ status : false, results : null, loading : true }) 

                const res = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=6515b9f031004066b18e05b72c87aee1`) //6515b9f031004066b18e05b72c87aee1     375033e55f524d279c9021abdf94f0ed

                const datas = res.data.articles

                setStat({
                    errorMessage : '',
                    results : datas,
                    status : true,
                    loading : false // turn off loader
                })
                
            } catch(err){
                
                getErrorStatus(err.request.status);
                setStat({ 
                    results : null,
                    status : false,
                    loading : false 
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
        
         if(!searchInit){
            
            return <div className="d-flex justify-content-center">
                    <div>
                        <img src={nothing} alt="nothing here" style={{maxWidth : 150}} />
                        <p className='search-word' >Search Something !</p>
                    </div>
                </div>
        }
        if (stat.loading === true){
            return <div className="d-flex justify-content-center">
                <BarLoader color={"#0466C8"} height={4} size={40} />          
            </div>
        }
        else if(stat.results === null && stat.status){
            // if no results found
            return <>No response from server ! </>
        }
        else if(stat.status && searchInit && stat.results != null ){
            return getDatas()
         }
         else{
            return displayError()
         }   
    } 
    
    // set scroll position value to state
    useState(() => window.onscroll = () => setScrollPos(window.scrollY))

    const displayUpBtn = () => {
        // toggle up button function
        if(ScrollPos >= 123){
            return(
                <button onClick={() => window.scrollTo(0, 0)} className='btn up-btn animate__animated animate__fadeInUpBig'>
                    <FiArrowUp />
                </button> 
            )
        }else {
            return(
                <button className='btn up-btn animate__animated animate__fadeOutDownBig'>
                    <FiArrowUp />
                </button>
            )
        }
    }

    return (
        
        <div>
            <div style={{width : 450}}>
                {displayResult()}
            </div>
            
            <div className="d-flex justify-content-center">
                {/* <button className="btn btn-primary">Load more</button> */}
            </div>
            
            <div className='up' >
                {displayUpBtn()}
            </div>
        </div>
    )
}

export default SearchResult
