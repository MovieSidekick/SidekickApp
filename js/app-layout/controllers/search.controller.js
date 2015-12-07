let SearchController = function(MovieService) {

// $scope alternative
  let vm = this;

  vm.movies = [];
  vm.clicked = clicked;

// function to activate MovieService to getAllMovies
  activate();

// Get all the movies and return results
  function activate() {
    MovieService.getAllMovies().then( (res) => {
      vm.movies = res.data.results;
    });
  }

// when click on movie in movies view, go to movie view
  function clicked (movie) {
    console.log('clicked', movie.Title);
  }

};

SearchController.$inject = [$http];

export default SearchController;