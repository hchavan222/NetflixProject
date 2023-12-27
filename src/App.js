import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Trend from './Components/Trend';
import Action from './Components/Action';
import { useState } from 'react';
import Comedy from './Components/Comedy';
import Movie from './Components/Movie';

function App() {

  
  return (
    <div>
       <Navbar />
       {/* <Trend />
       <Action />
       <Comedy /> */}

       <Movie name="Action" url="https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=d8163d9b294ca99b45d45f5f4718f596&language=en-US"/>
       <Movie name="Comedy" url="https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=d8163d9b294ca99b45d45f5f4718f596&language=en-US"/>
       <Movie name="Trending" url="https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=d8163d9b294ca99b45d45f5f4718f596"/>
    </div>
    
    
  );
}

export default App;
