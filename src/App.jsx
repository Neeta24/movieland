import {useEffect} from 'react'
import './App.css';
import SearchIcon from './search.svg'

//d723dd67

const Api_Url = 'http://www.omdbapi.com?apikey=d723dd67'
const App =()=> {
  
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
      <img src={SearchIcon} alt="search" />
    </div>
   </div>
  )
}

export default App
