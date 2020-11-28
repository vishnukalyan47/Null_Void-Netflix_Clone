import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './requests';
import './Banner.css';



function Banner() {
    const[movie, setMovie] = useState([]);
    
    // Top bar which displays Null Void originals 

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNullVoidOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            ); // [1st movie, 2nd movie ....]
            return request;

        }
        fetchData();
    }, []);

    console.log(movie);
    return (
        <header className= "banner"
        style ={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center"
        }}
        
        >
            <div className = "banner__contents">

            {/*Background image*/}
            {/* title */}
            <h1 className="banner__title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <br></br>
            <h1 className="about__us">About Us</h1>
            
                {/* --------------------- */}
            <div className="banner__buttons">
            
                <button className="banner__button">Log In</button>
                <button className="banner__button">Sign Up</button>

            </div>
                {/* --------------------- */}

            {/* div */}

            <h2 className="banner__description">
                Hey👋 NullVoiders 🎥!! Null Void is an over-the-top content platform. Here you can find all your favourite movies and tv shows. Also, if you don't find a movie you want to watch, you can ask for it through the Request movie page.
                    ❤️Happy Watching❤️

                
            </h2>
            {/* description */}

                </div>   

                <div className="banner--fadeBottom">
                    </div> 
            
        </header>
    )
}

export default Banner
