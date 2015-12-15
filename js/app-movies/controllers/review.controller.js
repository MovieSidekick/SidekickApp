let ReviewController = function(ReviewService, $stateParams, $cookies) {
  
  let vm = this;

  activate();

    function activate () {
    ReviewService.getReview($stateParams.id).then( (res) => {
      vm.reviews = [res.data.review];
      console.log(res.data.review);
    });
  }

  function addReview () {
   ReviewService.addReview(review).then( (res) => {
     ReviewService.storeAuth(res.data);
   });
 }

};

ReviewController.$inject = ['ReviewService', '$stateParams', '$cookies'];

export default ReviewController;