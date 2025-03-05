const apiKey = "220891d3";

export async function getMovieById(movieId) {
    const URi = `https://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`;
    let data = null;
    let error = null;

  try {
    const response = await fetch(URi);
    const result = await response.json();
    if (result.Title) {
       data = result;
    } else {
        error = "Movie not found";
    }
  } catch (e) {
    error =  e;
  }
  return [data, error]
}

export async function getDesiredMovieService(
  search = "",
  type = "",
) {
  let URi = `https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`;
  let data = null;
  let error = null;
  if (type && search) {
    URi = `https://www.omdbapi.com/?s=${search}&apikey=${apiKey}&type=${type}`;
  }
  try {
    const response = await fetch(URi);
    const result = await response.json();
    if (result.Response === "True") {
       data = result.Search;
    } else {
        error = result.Error;
    }
  } catch (e) {
    error =  e;
  }
  return [data, error]
}