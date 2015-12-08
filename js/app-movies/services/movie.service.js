
let MovieService = function($http, SERVER, $cookies) {
  
  let url = 'https://floating-mountain-2068.herokuapp.com/movies';

  this.getAllMovies   = getAllMovies;
  this.getMovie       = getMovie;

  function Movie (movie) {
    this.Poster = movie.Poster;
    this.Title = movie.Title;
    this.Rated = movie.Rated;
    this.Year = movie.Year;
    this.Released = movie.Released;
    this.Runtime = movie.Runtime;
    this.Director = movie.Director;
    this.Writer = movie.Writer;
    this.Actors = movie.Actors;
    this.Plot = movie.Plot;
    this.Language = movie.Language;
    this.Country = movie.Country;
    this.Awards = movie.Awards;
    this.Metascore = movie.Metascore;
    this.imdbRating = movie.imdbRating;
    this.imdbVotes = movie.imdbVotes;
    this.imdbID = movie.imdbID;
    this.Type = movie.Type;
  }

  function getAllMovies () {
    return $http.get(url, SERVER);
  }

  function getMovie (ourTitle) {
    return $http.post(url, { type: 'title', title: ourTitle}, SERVER);
    console.log(ourTitle);
  }

  

};

MovieService.$inject = ['$http', 'SERVER','$cookies'];

export default MovieService;