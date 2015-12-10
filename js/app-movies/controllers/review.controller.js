let ReviewController = function(ReviewService, $stateParams) {
  
  let vm = this;

  activate();

  function addReview (body) {
   ReviewService.addReview(review).then( (res) => {
     ReviewService.storeAuth(res.data);
   });
 }

  function activate () {
    ReviewService.getReview($stateParams.id).then( (res) => {
      vm.reviews = [res.data.review];
      console.log(res.data.review);
    });
  }

};

ReviewController.$inject = ['ReviewService', '$stateParams'];

export default ReviewController;


// The routes for reviews are up on the heroku server.  The path is /reviews with the post method to create a 
// ew review with the parameter body to be filled in for text field.  Also the show method can be accessed by 
// reviews/:id giving it the id of the review you are looking for.  Also the index method is /reviews.