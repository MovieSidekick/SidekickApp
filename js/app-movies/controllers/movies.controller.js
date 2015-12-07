let MoviesController = function(MovieService) {
  
  let vm = this;

  vm.movies = [];
  vm.search=search;

  activate();

  function activate () {
    MovieService.getAllMovies().then( (res) => {
      vm.movies = res.data.results;
    });
  }

    function search (query) {
    MovieService.getMovie(query).then( (res) => {
        vm.movies = res.data.results;
      console.log(query)
    })
  }
  
};

MoviesController.$inject = ['MovieService'];

export default MoviesController;