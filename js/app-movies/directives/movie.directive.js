let movieItem = function($state, MovieService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      movie: '='
    },
    template: `
      <div class="panel" ng-click="vm.clicked(movie)">
<<<<<<< HEAD
        <h5>{{ movie.title }} {{ movie.poster }} {{ movie.genre }} {{ movie.actor }}</h5>
=======
        <h5>{{ movie.Poster }} {{ movie.Title }} {{ movie.year }}</h5>
>>>>>>> jef
      </div>
    `,
    controller: 'MoviesController as vm',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        $state.go('root.singleMovie', { id: scope.movie.title });
      });
    }
  };

};

movieItem.$inject = ['$state', 'MovieService'];

export default movieItem;