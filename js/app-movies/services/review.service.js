import _ from 'underscore';

let ReviewService = function($http, SERVER, $cookies) {
  
 let url = 'https://floating-mountain-2068.herokuapp.com/';

 this.getAllReviews   = getAllReviews;
 this.getReview       = getReview;

 // {"review":[{"body":"This movie made me laugh, cry, and feel every emotion.","movie_id":1,"user_id":13}]}

 function Review (review) {
   this.body = review.body;
 }

 //  let movie_id = _.filter(movie, function() {
 //   console.log(movie.id, 'movie.id');
 //   return movie.id;
 // });

 function getAllReviews () {
   return $http.get(url, SERVER);
 }

function addReview () {
   var value = $('#reviewText').val();
   return $http.post(url + 'movies/' + 'movie.id' + '/reviews', SERVER); 
}

function getReview (review) {
  console.log('review:', review);
  return $http.post(url + 'movies/' + 'movie_id' + '/reviews', SERVER); 
}

getReview();

// function addStarRating () {
//    var value = $('#reviewText').val();
//    return $http.post(url, { user: 'user_name', review: 'value'}, SERVER);
// }

//  function getStarRating (starRating) {
//   console.log(starRating);
//    return $http.post(url, {  }, SERVER); 
// }
 
};

ReviewService.$inject = ['$http', 'SERVER','$cookies'];

export default ReviewService;