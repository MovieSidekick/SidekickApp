let MovieSingleController = function(MovieService, $stateParams, $cookies) {
  
  let vm = this;
  let user = $cookies.get('movie-tracker-name');
  vm.user =user;
  console.log(user);

  activate();

  function activate () {
    MovieService.getMovie($stateParams.id).then( (res) => {
      vm.movies = [res.data.movie];
      console.log(res.data.movie);
    });
  }

};

MovieSingleController.$inject = ['MovieService', '$stateParams', '$cookies'];

export default MovieSingleController;