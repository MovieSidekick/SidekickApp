let reviewItem = function($state, MovieService, ReviewService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      review: '='
    },
    template: `
      <div class="allr" ng-click="vm.clicked(review)">
        
        
        
          <ul>
          <li><span class="bold">Summary:  </span>{{ review.body }}</li><hr>
          <li><span class="bold">Starring:  </span>{{ review.movie_id }}</li>
          <li><span class="bold">Released:  </span>{{ movie.year }}</li>
         
           <li><span class="bold">Genre:  </span>{{ movie.genre }}</li>
           <li><span class="bold">Director:  </span>{{ movie.director }}</li>
           <li><span class="bold">Writer:  </span>{{ movie.writer }}</li>
           <li><span class="bold">Sidekick ID:  </span><a href>{{ movie.id }}</a></li>
           
           
           
           
           <li><span class="bold">Awards:  </span>{{ movie.awards }}</li>
          
          </ul>
        

      </div>

    `,
    controller: 'MovieSingleController as vm',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        $state.go('root.singleMovie', { id: scope.review.body});
      });
    }
  };

};

reviewItem.$inject = ['$state', 'MovieService', 'ReviewService'];

export default reviewItem;