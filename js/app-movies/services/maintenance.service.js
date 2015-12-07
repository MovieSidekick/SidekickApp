let MainService = function($http) {

  let url = URL + 'movies/movie';  
  this.attachMain = attachMain;

  function attachMain (mainObj, movie) {

    mainObj.movie = {
      __type: 'Pointer',
      className: 'movie',
      objectId: movie.objectId
    };

    return $http.post(url, mainObj);
  }

};

MainService.$inject = ['$http'];

export default MainService;