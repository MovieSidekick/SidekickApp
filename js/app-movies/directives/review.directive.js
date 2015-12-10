let reviewItem = function($state, reviewService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      review: '='
    },
    template: `
      <div class="panelBig" ng-click="vm.clicked(review)">
        <div class = "panelLeft"> 
          <h5>{{ movie.title }}</h5></li>
          <img src = "{{ movie.poster }}">
        </div>
        <div class="panelRight">
          <ul>
          <li><span class="bold">Reviewer:  </span>{{ users.user_name }}</li><hr>
          <li><span class="bold">Review:  </span>{{ reviews.review }}</li>
          <li><span class="bold">IMDB ID:  </span>{{ movie.imdbID }}</li>
          </ul>
          <p><i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>
        </div>

      </div>

    `,
    controller: 'ReviewController as vm',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        $state.go('root.singleReview', { id: scope.movie.title });
      });
    }
  };

};

reviewItem.$inject = ['$state', 'reviewService'];

export default reviewItem;