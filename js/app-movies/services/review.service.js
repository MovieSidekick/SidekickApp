import _ from 'underscore';

let ReviewService = function($http, SERVER, $cookies) {
  
 let url = 'https://floating-mountain-2068.herokuapp.com/';
 let reviews = [];
 let review = [];


//  this.getReviews   = getReviews;
//  this.getReview       = getReview;
//  // this.getID = getID;

//  // {"review":[{"body":"This movie made me laugh, cry, and feel every emotion.","movie_id":1,"user_id":13}]}

//  function Review (review) {
//    this.body = review.body;
//  }

//   function Reviews (reviews) {
//    this.body = reviews.body;
 }

// function getReview (review) {
//   $http.defaults.headers.common = {'auth_token' : $cookies.get('access_token')};
//   console.log(review);
//   return $http.post(url + 'movies/' + '1' + '/reviews', SERVER); 
// };

// getReview();
//   return $http.post(url + 'movies/' + '{ id: ourID}' + '/reviews', SERVER); 

//  getReviews () {
//    return $http.get(url, + 'reviews', SERVER);
//  }

// function addReview () {
//    var value = $('#reviewText').val();

//    return $http.post(url + '/reviews', SERVER); 

//    return $http.post(url + 'movies/' + '{ id: ourID}' + '/reviews', SERVER); 

// }

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