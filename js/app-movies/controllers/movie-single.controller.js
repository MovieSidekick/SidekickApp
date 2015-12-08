let MovieSingleController = function(MovieService, $stateParams) {
  
  let vm = this;


  activate();

  

  function activate () {
    MovieService.getMovie($stateParams.id).then( (res) => {
      vm.movies = [res.data.movie];
      console.log(res.data.movie);
    });
  }

};

MovieSingleController.$inject = ['MovieService', '$stateParams'];

export default MovieSingleController;