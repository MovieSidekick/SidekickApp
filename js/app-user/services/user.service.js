let UserService = function($http, SERVER, $cookies, $state) {
 
 this.signup    = signup;
 this.login     = login;
 this.storeAuth = storeAuth;
 this.checkAuth = checkAuth;

 function storeAuth (user) {
   $cookies.put('movie-tracker-auth', user.auth_token);
   $cookies.put('movie-tracker-user', user.id);
   $cookies.put('movie-tracker-name', user.user_name);
   setHeaders(user.auth_Token);
   // THIS REALLY NEEDS TO BE BETTER!!!
   alert('you are logged in');
   // SERIOUSLY
   $state.go('root.movies');
 }

  function checkAuth () {
   let t = $cookies.get('movie-tracker-auth');
     if (t) {
       setHeaders(t);
     } else {
       $state.go('root.login');
     }
  }

 function setHeaders (token) {
   SERVER.CONFIG.headers['auth_token'] = token;
 }

 function signup (user) {
   return $http.post(SERVER.URL + 'signup', user, SERVER.CONFIG);
 }

 function login (user) {
   return $http.post(SERVER.URL + 'login', user, SERVER.CONFIG);
console.log(user);
 }
 

};

UserService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default UserService;