// let UserService = function($http, SERVER, $cookies, $state) {

//   console.log(SERVER);

//   this.checkAuth = function () {

//     let token = $cookies.get('access_token');

//     SERVER.CONFIG.headers['Access-Token'] = token;
    
//     if (token) {
//       return $http.get(SERVER.URL + 'check', SERVER.CONFIG);
//     } else {
//       $state.go('root.login');
//     }

//   };

//   this.sendLogin = function (userObj) {
//     return $http.post(SERVER.URL + 'login', userObj, SERVER.CONFIG);
//   };

//   this.loginSuccess = function (res) {

//     $cookies.put('access_token', res.data.user.access_token);
//     SERVER.CONFIG.headers['Access-Token'] = res.data.user.access_token;
//     $state.go('/');

//   };

//   this.logout = function () {
//     $cookies.remove('access_token');
//     SERVER.CONFIG.headers['Access-Token'] = null;
//     $state.go('root.login');
//   };

//   let Account = function(obj) {
//     this.user_name = obj.user_name;
//     this.email = obj.email;
//     this.password = obj.password;
//   };

//   this.signUp = function (user) {
//     let u = new Account(user);
//     return $http.post(SERVER.URL + 'signup', u, SERVER.CONFIG);
//   };

// };

// UserService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

// export default UserService;

let UserService = function($http, SERVER, $cookies, $state) {
  
  this.signup    = signup;
  this.login     = login;
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
    if (t) {
      setHeaders(t);
    } else {
      $state.go('root.login');
    }
  }

  function setHeaders (token) {
    SERVER.CONFIG.headers['X-Parse-Session-Token'] = token;
  }

  function signup (userObj) {
    return $http.post(SERVER.URL, + 'signup', userObj, SERVER.CONFIG);
  }

  function login (userObj) {
    return $http.get(SERVER.URL + 'login', userObj, SERVER.CONFIG);
  }
  

};

UserService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default UserService;