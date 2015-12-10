let ReviewService = function($http, SERVER, $cookies) {
  
 let url = 'https://floating-mountain-2068.herokuapp.com/reviews/';

 this.getAllReviews   = getAllReviews;
 this.getReview       = getReview;

 function Review (review) {
   this.Poster = movie.Poster;
   this.Title = movie.Title;
   this.imdbID = movie.imdbID;
   this.user_name = users.user_name;
   this.review = reviews.review;
 }

 function getAllReviews () {
   return $http.get(url, SERVER);
 }

function addReview (body) {
   var value = $('#reviewText').val();
   return $http.post(url, { imdbID: 'value', }, SERVER);
}

function getReview (review) {
  console.log(review);
   return $http.post(url, { imdbID: 'value', user: 'user_name', review: 'value' }, SERVER); 
}

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