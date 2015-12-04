let SearchController = function($scope, $http) {

  let vm = this;
  
  let url = '';

// Search OMDB with encoded URI
  $scope.search = (query) => { 
    query = encodeURI(query);

    $http.get(url + '&q=' + query).then( (res) => {
      $scope.movies = res.data;
    });
  };

};

SearchController.$inject = [$scope, $http];

export default SearchController;