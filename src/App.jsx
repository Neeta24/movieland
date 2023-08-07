import {useEffect, useState} from 'react'
import './App.css';
import SearchIcon from './search.svg'

//d723dd67

const Api_Url = 'http://www.omdbapi.com?apikey=d723dd67';

const movie1 =
  {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}

const App =()=> {
  
  const [movies,setMovies] = useState([])
  const searchMovies = async(title)=>{

    const response = await fetch(`${Api_Url}&s=${title}`)
    const data = await response.json();
    console.log(data.Search);
  }
  useEffect(()=>{
   searchMovies('Spiderman');
  },[]);

  return (
   <div className='app'>
    <h1>MovieLand</h1>
    <div className='search'>
      <input placeholder='search for movies' value="Superman" onChange={()=>{}} />
      <img src={SearchIcon} alt="search" onClick={()=>{}}/>
    </div>

    <div className='container'>
   <div className='movie'>
    <div>
      <p>{movie1.Year}</p>
    </div>

    <div>
      <img src={movie1.Poster !== 'N/A'? movie1.Poster:'https//via.placeholder.com/400'} alt={movie1.Title} />
    </div>
   </div>
    </div>
   </div>
  )
}

export default App
