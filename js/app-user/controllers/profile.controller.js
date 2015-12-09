let ProfileController = function(ProfileService, UserService, $stateParams) {
  
  let vm = this;

  activate();

  function activate () {
    ProfileService.getUser($stateParams.id).then( (res) => {
      vm.user = [res.data.user];
      console.log(res.data.user);
    });
  }

};

ProfileController.$inject = ['ProfileService', 'UserService', '$stateParams'];

 export default ProfileController;