let ReviewService = function($http, SERVER, $cookies) {
  let vm = this;
  let url = 'https://floating-mountain-2068.herokuapp.com/'; 

  // let user_name = $cookies.get('movie-tracker-name');
  
  // let auth_token = $cookies.get('movie-tracker-auth');
  // console.log(auth_token);

  this.getMovie = getMovie;
  this.attachReview = attachReview;


 

 

function getMovie (ourTitle) {
  console.log(ourTitle);
  return $http.post(url + 'movies', { type: 'title', title: ourTitle}, SERVER);
   }



function attachReview (ourReview, ID) {
  console.log(ourReview, ID);
  //console.log(movies.id);
  return $http.post(SERVER.URL + 'reviews', { body: ourReview, movie_id: ID}, SERVER.CONFIG);
}



};

ReviewService.$inject = ['$http', 'SERVER', '$cookies'];

export default ReviewService;