let reviewItem = function($state, ReviewService) {
  
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
        </div>
        <div class="panelRight">
          <ul>
          <li><span class="bold">Reviewer:  </span>{{ users.user_id }}</li><hr>
          <li><span class="bold">Review:  </span>{{ reviews.body}}</li>
          </ul>
          <p><i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>
        </div>

      </div>

    `,
    controller: 'ReviewController as vm',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        $state.go('root.singlemovie', { id: scope.movie.movie_id });
      });
    }
  };

};

reviewItem.$inject = ['$state', 'ReviewService'];

export default reviewItem;