let MoviesController = function(MovieService, $cookies) {
 
 let vm = this;
 let user = $cookies.get('movie-tracker-name');
 vm.user =user;
 console.log(user);
 
 vm.movies = [];
 vm.search=search;
 
 
 activate();

    function activate () {
      MovieService.getAllMovies().then( (res) => {
        vm.movies = res.data.results;
      });
    }
  // function get (user) {
  //    MovieService.getUser(user).then( (res) => {
  //      vm.user = res.data.user;
  //      console.log(res.data.user);
  //    });
  //  }




    function search (query) {
    MovieService.getMovie(query).then( (res) => {
        vm.movies = [res.data.movie];
      console.log(res.data.movie);
    })
  }
  
};

MoviesController.$inject = ['MovieService', '$cookies'];

export default MoviesController;
   function search (query) {
   MovieService.getMovie(query).then( (res) => {
       vm.movies = res.data.results;
     console.log(query)
   })
 }