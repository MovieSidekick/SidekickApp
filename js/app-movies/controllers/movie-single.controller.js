
let MovieSingleController = function(MovieService, ReviewService, ReviewsService, $stateParams, $cookies) {
  
  let vm = this;
   let user = $cookies.get('movie-tracker-name');
   vm.user = user;
   
  // let user_id = $cookies.get('movie-tracker-id');
  // console.log(user);


  vm.showImageUpload = false;
  vm.showReviewFormNow = false;
  
  
  vm.showReviewForm    = showReviewForm;
  vm.addReview         = addReview;
  vm.reviews        = [];

  
  activate();
  

  function activate () {
    MovieService.getMovie($stateParams.id).then( (res) => {
      vm.movies = [res.data.movie];
      vm.movie_id = (res.data.movie.id);
      //console.log(res.data.movie.id);
      //console.log(res.data.movie);
      allreviews();
    });
  }
  function allreviews () {
    ReviewsService.getAllReviews(vm.movie_id).then( (res) => {
        vm.reviews = res.data.review;
      });
    
  }

  function addReview (ourReview) {
    ReviewService.attachReview(ourReview, vm.movie_id).then( (res) => {
      vm.review=[res.data.user.body];
      console.log(res.data.user.body);
    });
  }



  

  function showReviewForm () {
    vm.showReviewFormNow = (vm.showReviewFormNow) ? false : true;
  }

};


MovieSingleController.$inject = ['MovieService', 'ReviewService', 'ReviewsService', '$stateParams', '$cookies'];

export default MovieSingleController;