let MovieService = function($http, PARSE, $cookies) {
  
  let url = PARSE.URL + 'classes/movie';

  this.getAllMovies   = getAllMovies;
  this.addMovie       = addMovie;
  this.destroy      = destroy;
  this.toggleFuzzy  = toggleFuzzy;
  this.getMovie       = getMovie;
  this.addImage     = addImage;

  function Movie (movieObj) {
    this.make = movieObj.make;
    this.model = movieObj.model;
    this.year = Number(movieObj.year);
    this.name = movieObj.name;
    this.color = movieObj.color;
    this.fuzzydice = true;
  }

  function toggleFuzzy (movieObj) {
    movieObj.fuzzydice = movieObj.fuzzydice ? false : true;
    return $http.put(url + '/' + movieObj.objectId, movieObj, PARSE.CONFIG);
  }

  function getAllMovies () {
    return $http.get(url, PARSE.CONFIG);
  }

  function getMovie (id) {
    return $http.get(url + '/' + id, PARSE.CONFIG);
  }

  function addMovie (movieObj) {
    let userId = $cookies.get('movie-tracker-user');
    let c = new Movie(movieObj);

    let ACLObj = {};
    ACLObj[userId] = {
      read: true,
      write: true
    };

    c.ACL = ACLObj;

    c.user = {
      __type: 'Pointer',
      className: '_User',
      objectId: userId
    };

    return $http.post(url, c, PARSE.CONFIG);
  }

  function addImage (imageUrl, movie) {
    movie.image = imageUrl;
    return $http.put(url + '/' + movie.objectId, movie, PARSE.CONFIG);
  }

  function destroy (name) {
    return console.log(name + ' has been destroyed');
  }

};

MovieService.$inject = ['$http', 'PARSE', '$cookies'];

export default MovieService;