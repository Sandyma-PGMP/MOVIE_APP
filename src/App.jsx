import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import MovieDetails from './Pages/MovieDetails'
import { useState } from 'react';

function App() {

  const [favourites,setFavourites] = useState([]);

  function AddtoFav(e,data){
    setFavourites(prevFavourites => {
      const updatedFavourites = [...prevFavourites, data];
      console.log(updatedFavourites);
      return updatedFavourites;
    });
  }
  function onDelete(data){
    setFavourites(prevFavourites => {
      const updatedFavourites = prevFavourites.filter((item) => item.imdbID !== data.imdbID);
      return updatedFavourites;
    });
  }

  return (
    <>
    <div className='App'>
    <Routes>
          <Route path='/' element={<Home favourites={favourites} AddtoFav={AddtoFav} onDelete={onDelete}/>} />
          <Route path='/moviedetails/:movieId' element={<MovieDetails />} />
      </Routes>
    </div>
      
    </>
  )
}

export default App
