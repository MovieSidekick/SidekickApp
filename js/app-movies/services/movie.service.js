let MovieService = function($http, SERVER, $cookies) {
  
 let url = 'https://floating-mountain-2068.herokuapp.com/';

 this.getAllMovies   = getAllMovies;
 this.getMovie       = getMovie;

 function getAllMovies (ourMovies) {
  //console.log(ourMovies);
   return $http.get(url + 'movies', SERVER);
   
 }

function getMovie (ourTitle) {
 // console.log(ourTitle);
  return $http.post(url + 'movies', { type: 'title', title: ourTitle}, SERVER);
   }  

// function getReview (ourReview) {
//   console.log(ourReview);
//   return $http.post(SERVER.URL + 'movies/' + 114 + '/reviews', SERVER.CONFIG);
//    }
 
};

MovieService.$inject = ['$http', 'SERVER','$cookies'];

export default MovieService;