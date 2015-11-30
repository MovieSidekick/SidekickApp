let MainService = function(PARSE, $http) {

  let url = PARSE.URL + 'classes/maintenance';
  
  this.attachMain = attachMain;

  function attachMain (mainObj, movie) {

    mainObj.movie = {
      __type: 'Pointer',
      className: 'movie',
      objectId: movie.objectId
    };

    return $http.post(url, mainObj, PARSE.CONFIG);
  }

};

MainService.$inject = ['PARSE', '$http'];

export default MainService;