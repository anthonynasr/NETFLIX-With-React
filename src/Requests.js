const key= 'd7d6becf0c602339a3811613573359a9';
const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`,
    requestTopRated :`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US`,
    requestTrending : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`,

}
export default requests