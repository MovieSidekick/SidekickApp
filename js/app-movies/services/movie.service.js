let MovieService = function($http, SERVER) {
  
  let url = URL + 'movies/title';

  this.getAllMovies   = getAllMovies;
  this.getMovie       = getMovie;

  function Movie (movieObj) {
    this.Poster = movieObj.Poster;
    this.Title = movieObj.Title;
    this.Rated = movieObj.Rated;
    this.Year = movieObj.Year;
    this.Released = movieObj.Released;
    this.Runtime = movieObj.Runtime;
    this.Director = movieObj.Director;
    this.Writer = movieObj.Writer;
    this.Actors = movieObj.Actors;
    this.Plot = movieObj.Plot;
    this.Language = movieObj.Language;
    this.Country = movieObj.Country;
    this.Awards = movieObj.Awards;
    this.Metascore = movieObj.Metascore;
    this.imdbRating = movieObj.imdbRating;
    this.imdbVotes = movieObj.imdbVotes;
    this.imdbID = movieObj.imdbID;
    this.Type = movieObj.Type;
  }

  function getAllMovies () {
    return $http.get(url, CONFIG);
  }

  function getMovie (id) {
    return $http.get(url + '/' + id, CONFIG);
  }

};

MovieService.$inject = ['$http','SERVER'];

export default MovieService;