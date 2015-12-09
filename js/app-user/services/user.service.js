let UserService = function($http, SERVER, $cookies, $state) {
 
 this.signup    = signup;
 this.login     = login;
 this.storeAuth = storeAuth;
 this.checkAuth = checkAuth;

 function storeAuth (user) {
   $cookies.put('movie-tracker-auth', user.sessionToken);
   $cookies.put('movie-tracker-user', user.objectId);
   setHeaders(user.sessionToken);
   // THIS REALLY NEEDS TO BE BETTER!!!
   alert('you are logged in');
   // SERIOUSLY
   $state.go('root.home');
 }

  function checkAuth () {
   let t = $cookies.get('movie-tracker-auth');
    // if (t) {
    //   setHeaders(t);
    // } else {
    //   $state.go('root.login');
    // }
  }

 function setHeaders (token) {
   SERVER.CONFIG.headers['auth_token'] = token;
 }

 function signup (userObj) {
   return $http.post(SERVER.URL + 'signup', userObj, SERVER.CONFIG);

 }

 function login (userObj) {
   return $http.post(SERVER.URL + 'login', userObj, SERVER.CONFIG);
 }
 

};

UserService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default UserService;