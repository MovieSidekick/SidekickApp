let ReviewController = function(ReviewsService, $stateParams, $cookies) {
  
  let vm = this;
   let user = $cookies.get('movie-tracker-name');
   vm.user = user;
   
  // let user_id = $cookies.get('movie-tracker-id');
  // console.log(user);


  vm.showImageUpload = false;
  vm.showReviewFormNow = false;
  
  
  vm.showReviewForm    = showReviewForm;
  vm.addReview         = addReview;
  vm.allreviews        = allreviews;
  activate();

  function activate () {
    MovieService.getMovie($stateParams.id).then( (res) => {
      vm.movies = [res.data.movie];
      vm.movie_id = (res.data.movie.id);
      //console.log(res.data.movie.id);
      //console.log(res.data.movie);
    });
  }
  function allreviews () {
    ReviewsService.getAllReviews($stateParams.id).then( (res) => {
        vm.reviews = (res.data.review);
        console.log(vm.reviews);
      });
    
  }



  

  function showReviewForm () {
    vm.showReviewFormNow = (vm.showReviewFormNow) ? false : true;
  }

};


ReviewController.$inject = ['ReviewsService', '$stateParams', '$cookies'];

export default ReviewController;


// The routes for reviews are up on the heroku server.  The path is /reviews with the post method to create a 
// ew review with the parameter body to be filled in for text field.  Also the show method can be accessed by 
// reviews/:id giving it the id of the review you are looking for.  Also the index method is /reviews.