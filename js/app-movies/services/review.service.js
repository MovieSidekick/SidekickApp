let ReviewsService = function($http, SERVER, $cookies) {
  let vm = this;
  let url = 'https://floating-mountain-2068.herokuapp.com/';


this.getAllReviews = getAllReviews;

function getAllReviews (ID) {
    return $http.post(SERVER.URL + 'movies/' + ID + '/reviews', {movie_id: ID} , SERVER.CONFIG);
  }
// function attachReview (ourReview, ID) {
//   console.log(ourReview, ID);
//   //console.log(movies.id);
//   return $http.post(SERVER.URL + 'reviews', { body: ourReview, movie_id: ID}, SERVER.CONFIG);
// }

};

ReviewsService.$inject = ['$http', 'SERVER', '$cookies'];

export default ReviewsService;