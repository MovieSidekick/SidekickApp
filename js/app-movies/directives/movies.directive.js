let moviesItem = function($state, MovieService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      movie: '='
    },
    template: `
      <div class="panelSmall" ng-click="vm.clicked(movie)">
      
        <h5>{{ movie.title }}  {{ movie.year }}</h5>
        <img ng-src = "{{ movie.poster }}">
        <h5>Starring: {{ movie.actor }}</h5>

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

moviesItem.$inject = ['$state', 'MovieService'];

export default moviesItem;