let movieItem = function($state, MovieService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      movie: '='
    },
    template: `
      <div class="panelBig" ng-click="vm.clicked(movie)">
        <div class = "panelLeft"> 
          <h5>{{ movie.title }}</h5>
          <img src = "{{ movie.poster }}">
        </div>
        <div class="panelRight">
          <ul>
          <li><span class="bold">Summary:  </span>{{ movie.plot }}</li><hr>
          <li><span class="bold">Starring:  </span>{{ movie.actor }}</li>
          <li><span class="bold">Released:  </span>{{ movie.year }}</li>
         
           <li><span class="bold">Genre:  </span>{{ movie.genre }}</li>
           <li><span class="bold">Director:  </span>{{ movie.director }}</li>
           <li><span class="bold">Writer:  </span>{{ movie.writer }}</li>
           
           
           
           
           <li><span class="bold">Awards:  </span>{{ movie.awards }}</li>
          
          </ul>
          <p><i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>
        </div>

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