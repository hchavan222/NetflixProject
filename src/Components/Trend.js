import React, { useState } from 'react'
import Axios from "axios"

function Trend() {

    const [movie , setmovie] = useState([])

    
        Axios.get("https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=d8163d9b294ca99b45d45f5f4718f596").then(function(output){
            setmovie(output.data.results)

        }).catch(function(error){
            console.log(error)
        })
    
  return (
    <div>
    <h2 style={{color:'white' , fontWeight:"bolder"}}>TRENDING MOVIES</h2>
     <div className="tdiv" style={{display:"flex", overflowX:"scroll"} }>{
        movie.map(function(i){

            return(
                <img height="250px" width="150px" style={{}}src={"https://image.tmdb.org/t/p/original"+i.poster_path} />
            )

        })
        
    }

    </div>
    </div>
    
  )
}

export default Trend