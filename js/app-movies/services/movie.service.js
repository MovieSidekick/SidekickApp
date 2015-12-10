let MovieService = function($http, SERVER, $cookies) {
  
 let url = 'https://floating-mountain-2068.herokuapp.com/';

 //this.getUser         = getUser;
 this.getAllMovies   = getAllMovies;
 this.getMovie       = getMovie;
 //this.getId = getId;

 

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
   return $http.get(url + 'movies', SERVER);
 }
  
function getMovie (ourTitle) {
  console.log(ourTitle);
  return $http.post(url + 'movies', { type: 'title', title: ourTitle}, SERVER);
   }

function addStarRating () {
   var value = $('#reviewText').val();
   return $http.post(url, { user: 'user_name', review: 'value'}, SERVER);
}

 function getStarRating (starRating) {
  console.log(starRating);
   return $http.post(url, {  }, SERVER); 
}

function addReview () {
   var value = $('#reviewText').val();
   return $http.post(url, { user: 'user_name', review: 'value'}, SERVER);
}

function getReview (review) {
  console.log(review);
   return $http.post(url, { imdbID }, SERVER); 
}
 
};

MovieService.$inject = ['$http', 'SERVER','$cookies'];

export default MovieService;