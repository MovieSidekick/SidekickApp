let movieItem = function($state, MovieService, ReviewsService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      movie: '=',
      review: '='
    },
    template: `
      <div class="panelBig">
        <div class="banner">
        <a ng-if="movie.year === 2015" href="http://www.imdb.com/showtimes/title/{{movie.imdb_id}}?ref_=sh_ov_tt">Now Showing!!!  Click to purchase tickets</a>
        <a ng-if="movie.year != 2015" href="http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Dinstant-video&field-keywords={{movie.title}}">This movie is currently available on <i class="fa fa-amazon"></i></a>
</div>
        <div class = "panelLeft"> 
          <h5>{{ movie.title }}</h5>
          <img ng-src = "{{ movie.poster }}">
        </div>
        <div class="panelRight">
          <ul>
          <li><span class="bold">Summary:  </span>{{ movie.plot }}</li><hr>
          <li><span class="bold">Starring:  </span>{{ movie.actor }}</li>
          <li><span class="bold">Released:  </span>{{ movie.year }}</li>
         
           <li><span class="bold">Genre:  </span>{{ movie.genre }}</li>
           <li><span class="bold">Director:  </span>{{ movie.director }}</li>
           <li><span class="bold">Writer:  </span>{{ movie.writer }}</li>
           <li><span class="bold">Sidekick ID:  </span><a href>{{ movie.id }}</a></li>
           
           
           
           <li><span class="bold">Awards:  </span>{{ movie.awards }}</li>
          
          </ul>
          <p><i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>
        </div>

      </div>

    `,
    controller: 'MovieSingleController as vm',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        $state.go('root.singleMovie', { id: scope.movie.title });
      });
    }
  };

};

movieItem.$inject = ['$state', 'MovieService', 'ReviewsService'];

export default movieItem;