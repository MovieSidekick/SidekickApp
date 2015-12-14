import _ from 'underscore';

let ReviewService = function($http, SERVER, $cookies) {
  
 let url = 'https://floating-mountain-2068.herokuapp.com/';
 let review = [];

 this.getAllReviews   = getAllReviews;
 this.getReview       = getReview;
 // this.getID = getID;

 // {"review":[{"body":"This movie made me laugh, cry, and feel every emotion.","movie_id":1,"user_id":13}]}

 function Review (review) {
   this.body = review.body;
 }

 //  // let movie_id = _.filter(movie, function() {
 //  //  console.log(movie.id, 'movie.id');
 //  //  return movie.id;
 // });


function getReview (review) {
  $http.defaults.headers.common = {'auth_token' : $cookies.get('access_token')};
  console.log(review);
  return $http.post(url + 'movies/' + '1' + '/reviews', SERVER); 
};

getReview();

 function getAllReviews () {
   return $http.get(url, SERVER);
 }

function addReview () {
   var value = $('#reviewText').val();
   return $http.post(url + '/reviews', SERVER); 
}

function addStarRating () {
   var value = $('#reviewText').val();
   return $http.post(url, { user: 'user_name', review: 'value'}, SERVER);
}

 function getStarRating (starRating) {
  console.log(starRating);
   return $http.post(url, {  }, SERVER); 
}
 
};

ReviewService.$inject = ['$http', 'SERVER','$cookies'];

export default ReviewService;