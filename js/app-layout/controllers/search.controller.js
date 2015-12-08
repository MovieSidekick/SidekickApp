let SearchController = function($http, SERVER, MovieService) {

// $scope alternative
  let vm = this;
  let url = 'https://floating-mountain-2068.herokuapp.com/' + 'movies';

  vm.search = search;

  vm.movies = [];
  vm.clicked = clicked;

// function to activate MovieService to getAllMovies
  activate();

    function search (query) {
     MovieService.getMovie().then( (res) => {
        vm.title = res.data.results;
      console.log(query)
    });
   }

  function getMovie (movieObj) {
    return $http.get(url, {type: 'Title'});
  };

  

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

SearchController.$inject = ['$http', 'SERVER', 'MovieService'];

export default SearchController;