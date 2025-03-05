import styled from "styled-components";
const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`;
const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;
const AddToFav = styled.button`
  background: #f1c40f;
  color: black;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 30px;
  margin-left:65px;
  font-size: 16px;
  font-weight: 600;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #f39c12;
  }
`;
export default function MovieCard({ data = {}, onClick = () => {},favourite=()=>{},disabled=false } ) {
  return (
    <>
      <div>
      <MovieContainer
        onClick={() => {
          onClick(data.imdbID,data);
        }}
      >
        <CoverImage src={data.Poster} alt={data.Title} />
        <MovieName>{data.Title}</MovieName>
        <InfoColumn>
          <MovieInfo>Year : {data.Year}</MovieInfo>
          <MovieInfo>Type : {data.Type}</MovieInfo>
        </InfoColumn>
      </MovieContainer>
      <AddToFav onClick={(e)=>{favourite(e,data)}} disabled={disabled} >Add to Favourite</AddToFav>
      </div>
      
    </>
  );
}

MovieCard.propTypes = {
  data: Object,
  onClick: Function,
};
