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

SignupController.$inject = ['$scope','UserService', '$cookies', '$state'];

export default SignupController;