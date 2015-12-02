let SignupController = function($scope, UserService, $cookies, $state) {
  
  let vm = this;

  vm.signUp = signUp;


  $scope.signUp = function (obj){
    UserService.signUp(obj).then( (res) => {
      UserService.loginSuccess(res);
      $state.go('root.login');
    });

  };

};

//   function signUp (user) {
//     UserService.signup(user).then( (res) => {
//       UserService.storeAuth(res.data);
//     });
//   }
  

// };

SignupController.$inject = ['$scope','UserService', '$cookies', '$state'];

export default SignupController;