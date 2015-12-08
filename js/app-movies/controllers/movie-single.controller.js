let MovieSingleController = function(MovieService, $stateParams) {
  
  let vm = this;


  activate();

  function activate () {
    MovieService.getMovie($stateParams.id).then( (res) => {
      vm.movie = res.data;
    });
  }

};

MovieSingleController.$inject = ['MovieService', '$stateParams'];

export default MovieSingleController;