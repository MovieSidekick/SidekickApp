let movieItem = function($state, MovieService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      movie: '='
    },
    template: `
      <div class="panel" ng-click="vm.clicked(movie)">
        <h5>{{ movie.color }} {{ movie.year }} {{ movie.make }} {{ movie.model }}</h5>
      </div>
    `,
    controller: 'MoviesController as vm',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        $state.go('root.singleMovie', { id: scope.movie.objectId });
      });
    }
  };

};

movieItem.$inject = ['$state', 'MovieService'];

export default movieItem;