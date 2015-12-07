let MoviesController = function(MovieService) {
  
  let vm = this;

  vm.movies = [];
  vm.clicked = clicked;

  activate();

  function activate () {
    MovieService.getAllMovies().then( (res) => {
      vm.movies = res.data.results;
    });
  }

  function clicked (movie) {
    console.log('clicked', movie.Title);
  }
  
};

MoviesController.$inject = ['MovieService'];

export default MoviesController;