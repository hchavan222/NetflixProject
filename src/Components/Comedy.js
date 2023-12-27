import React, {useState} from 'react'
import Axios from 'axios'


function Comedy() {
    const[aval , setaval] = useState([])

    {
        Axios.get("https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=d8163d9b294ca99b45d45f5f4718f596&language=en-US").then(function(output){
            setaval(output.data.results)
        }).catch(function(error){
            console.log(error)
        })
    }
  return (
    <div>
    <h2 style={{color:'white' , fontWeight:"bolder"}}>COMEDY MOVIES</h2>
     <div className="tdiv" style={{display:"flex", overflowX:"scroll"} }>{
        aval.map(function(i){

            return(
                <img height="250px" width="150px" style={{}}src={"https://image.tmdb.org/t/p/original"+i.poster_path} />
            )

        })
        
    }

    </div>
    </div>
    
  )
}

export default Comedy