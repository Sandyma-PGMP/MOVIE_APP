import SearchMovie from "../Components/SearchMovie";
import ".././App.css";
import { useState } from "react";
import { getDesiredMovieService } from "../service/movie";
import MovieCard from "../Components/MovieCard";
import nodata from "../assets/nodata.webp";
import { useNavigate } from "react-router-dom";
import Pagination from "../Components/Pagination";
import PaginationforFav from "../Components/PageforFav";
import FavCard from "../Components/FavCard";

function Home({ favourites, AddtoFav = () => {}, onDelete = () => {} }) {
  const navigator = useNavigate();
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [, setError] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  let [favcurentPage, setFavCurrentPage] = useState(1);
   let [favPostsPerPage, setFavPostsPerPage] = useState(4);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
   let lastFavPostIndex = favcurentPage * favPostsPerPage;
   let firstFavPostIndex = lastFavPostIndex - favPostsPerPage;
  const currentmovies = movies.slice(firstPostIndex, lastPostIndex);
   let favmovies = favourites.slice(firstFavPostIndex, lastFavPostIndex);

   console.log(favmovies,firstFavPostIndex,lastFavPostIndex,favcurentPage,favPostsPerPage);

   console.log(currentmovies,firstPostIndex,lastPostIndex,currentPage,postsPerPage);  
 

  function onChange(e) {
    if (e) {
      setSearch(e.target.value);
    }
  }

  function onSelect(e) {
    if (e) {
      setType(e.target.value);
    }
  }

  function handleMovieClick(id, data) {
    if (id) {
      navigator(`/moviedetails/${id}`);
    }
  }

  function onClick(e) {
    if (e && search) {
      getDesiredMovieService(search, type, page).then((data) => {
        if (data[0]) {
          setMovies(data[0]);
          setError("");
        } else {
          setMovies([]);
          setError(data[1]);
        }
      });
    } else {
      alert("Data missing");
    }
  }

  function onPage(e) {
    if (e) {
      setPage(Number(e.target.value));
    }
  }
  function isFavourite(favourites, data) {
    return favourites.some((fav) => fav.imdbID === data.imdbID);
  }

  return (
    <>
      <SearchMovie
        onSearch={onChange}
        onSelect={onSelect}
        onClick={onClick}
        onPage={onPage}
      />

      <div className="movie-card-container  ">
        {currentmovies.length > 0 ? (
          currentmovies.map((movie, index) => (
            <MovieCard
              key={index}
              data={movie}
              onClick={handleMovieClick}
              favourite={AddtoFav}
              disabled={isFavourite(favourites, movie)}
            />
          ))
        ) : (
          <div className="home">
            {" "}
            <h1>Welcome to netflix</h1>
            <p>
              A place where can u can find information on any movie or series{" "}
            </p>
          </div>
        )}
      </div>
      <Pagination
        totalPosts={movies.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <div>
        <h1 style={{marginLeft:"20px"}}>Favourites</h1>
        <div className="movie-card-container">
          {favmovies.length > 0 ? (
            favmovies.map((movie, index) => (
              <FavCard
                key={index}
                data={movie}
                onClick={handleMovieClick}
                onDelete={onDelete}
              />
            ))
          ) : (
            <div>
              <img src={nodata} width={300} />
              <p style={{textAlign:"center",fontSize:"20px" }}>No favourites</p>
            </div>
          )}
        </div>
        <PaginationforFav
          TotalPosts={favourites.length}
          PostsPerPage={favPostsPerPage}
          setCurrentPage={setFavCurrentPage}
          CurrentPage={favcurentPage}
        /> 
      </div>
    </>
  );
}

export default Home;
