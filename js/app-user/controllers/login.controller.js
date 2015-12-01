let LoginController = function($scope, UserService, $cookies, $state) {

  let vm = this;

  this.login = login;

  $scope.login = function (user) {
    UserService.sendLogin(user).then( (res) => {
      UserService.loginSuccess(res);
      $state.go('/');
    });
  };

};

LoginController.$inject = ['$scope', 'UserService', '$cookies', '$state'];

export default LoginController;


// let LoginController = function(UserService) {
  
//   let vm = this;

//   this.login = login;

//   function login (userObj) {
//     UserService.login(userObj).then( (res) => {
//       UserService.storeAuth(res.data);
//     });
//   }

// };

// LoginController.$inject = ['UserService'];

// export default LoginController;