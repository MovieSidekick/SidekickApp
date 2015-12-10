let LoginController = function(UserService) {
  
   let vm = this;
  
    vm.login = login;

   function login (user) {
     UserService.login(user).then( (res) => {
       UserService.storeAuth(res.data.user);
     });
   }

 };

 LoginController.$inject = ['UserService'];

 export default LoginController;