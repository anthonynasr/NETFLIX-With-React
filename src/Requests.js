const key= '';
const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`,
    requestTopRated :`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US`,
    requestTrending : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`,

}
export default requests