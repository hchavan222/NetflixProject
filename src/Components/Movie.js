import React , {useState} from 'react'
import Axios from "axios"
import Youtube from "react-youtube"

import movieTrailer from "movie-trailer"

function Movie(props) {
    
    const[aval , setaval] = useState([])
    const[mname , setname] = useState()

    {
        Axios.get(props.url).then(function(output){
            setaval(output.data.results)
        }).catch(function(error){
            console.log(error)
        })
    }

    function collectm(namem){

        
        movieTrailer(namem).then(function(output){

            const mID = new URLSearchParams(new URL(output).search).get("v")
            setname(mID)

        }).catch(function(error){
            console.log(error)
        })

    }

    const additiondata = {

        height :"400px",
        width : "100%",
        playerVars : {
            autoplay:1
        }

    }
  return (<div>
    <h2 style={{color:'white' , fontWeight:"bolder"}}>{props.name}</h2>
    {mname && <Youtube videoId={mname} opts={additiondata}/>}

     <div className="tdiv" style={{display:"flex", overflowX:"scroll"} }>{
        aval.map(function(i){


            return(
                <img height="250px" width="150px" onClick={function(){

                    collectm(i.title)
                }
                } style={{}}src={"https://image.tmdb.org/t/p/original"+i.poster_path} />
            )

        })
        
    }

    </div>
    </div>
    
  )

}

export default Movie