let allmoviesItem = function($state, MovieService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      movie: '=',
      review: '='
    },
    template: `
      <div class="panelAll" ng-click="vm.clicked(movie)">
      
        <h5>{{ movie.title }}</h5>
        
      <img ng-if="movie.poster === 'N/A'" src="http://placehold.it/200x300?text=Sorry+this+image+is+not+available">
      <img ng-if="movie.poster != 'N/A'" ng-src="{{ movie.poster }}">
        


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

allmoviesItem.$inject = ['$state', 'MovieService'];

export default allmoviesItem;