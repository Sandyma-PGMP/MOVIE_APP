import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieById } from "../service/movie";
import styled from "styled-components";
import "../App.css";


const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 350px;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;

  & span {
    opacity: 0.5;
  }
`;
const Close = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: black;
  background: lightgray;
  height: fit-content;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
`;


export default function MovieDetails() {
   const params =  useParams();
   const [mov,setMov]=useState([])
  

   useEffect(() => {
     if(params.movieId) {
        getMovieById(params.movieId).then((result) => {
            setMov(result)
        })
     }
   }, [params])
   
  return (
    <><div className="MovieComponent">
        <Container>
        <>
          <CoverImage src={mov[0]?.Poster} alt={mov[0]?.Title} />
          <InfoColumn>
            <MovieName>
              {mov[0]?.Type}: <span>{mov[0]?.Title}</span>
            </MovieName>
            <MovieInfo>
              IMDB Rating: <span>{mov[0]?.imdbRating}</span>
            </MovieInfo>
            <MovieInfo>
              Year: <span>{mov[0]?.Year}</span>
            </MovieInfo>
            <MovieInfo>
              Language: <span>{mov[0]?.Language}</span>
            </MovieInfo>
            <MovieInfo>
              Rated: <span>{mov[0]?.Rated}</span>
            </MovieInfo>
            <MovieInfo>
              Released: <span>{mov[0]?.Released}</span>
            </MovieInfo>
            <MovieInfo>
              Runtime: <span>{mov[0]?.Runtime}</span>
            </MovieInfo>
            <MovieInfo>
              Genre: <span>{mov[0]?.Genre}</span>
            </MovieInfo>
            <MovieInfo>
              Director: <span>{mov[0]?.Director}</span>
            </MovieInfo>
            <MovieInfo>
              Actors: <span>{mov[0]?.Actors}</span>
            </MovieInfo>
            <MovieInfo>
              Plot: <span>{mov[0]?.Plot}</span>
            </MovieInfo>
          </InfoColumn>
          
        </>
    </Container>
    
    </div>
      
    </>
   
  )
}
