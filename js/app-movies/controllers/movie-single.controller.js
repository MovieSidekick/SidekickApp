
let MovieSingleController = function(MovieService, ReviewService, $stateParams, $cookies) {
  
  let vm = this;
  // let user = $cookies.get('movie-tracker-name');
   
  // let user_id = $cookies.get('movie-tracker-id');
  // console.log(user);


  vm.showImageUpload = true;
  vm.showReviewFormNow = true;
  
  
  vm.showReviewForm    = showReviewForm;
  vm.addReview         = addReview;
  

let MovieSingleController = function(MovieService, $stateParams, $cookies) {
  
  let vm = this;
  let user = $cookies.get('movie-tracker-name');
  vm.user =user;
  console.log(user);

  activate();

  function activate () {
    MovieService.getMovie($stateParams.id).then( (res) => {
      vm.movies = [res.data.movie];
      vm.movie_id = (res.data.movie.id);
      console.log(res.data.movie.id);
      console.log(res.data.movie);
    });
  }

  function addReview (ourReview) {
    ReviewService.attachReview(ourReview, vm.movie_id).then( (res) => {
      vm.review=[res.data.user.body];
      console.log(res.data.user.body);
    });
  }

  // function search (query) {
  //   MovieService.getMovie(query).then( (res) => {
  //       vm.movies = [res.data.movie];
  //     console.log(res.data.movie);
  //   })
  // }

//   this.attachReview = attachReview;

// function attachReview (ourReview) {
//   MovieService.getMovie($stateParams.id).then( (res) => {
//    vm.review = [res.data.movie.body];
//     console.log(ourReview);
//   console.log(movie.id);
// });
   

//   }

  

  function showReviewForm () {
    vm.showReviewFormNow = (vm.showReviewFormNow) ? false : true;
  }

};


MovieSingleController.$inject = ['MovieService', 'ReviewService', '$stateParams', '$cookies'];

export default MovieSingleController;