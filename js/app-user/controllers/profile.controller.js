let ProfileController = function(ProfileService, MovieService, UserService, $stateParams, $cookies) {
  
  let vm = this;
  let user = $cookies.get('movie-tracker-name');
  let email = $cookies.get('movie-tracker-email');
  vm.user =user;
  vm.email = email;
  console.log(user);

  activate();

  function activate () {
    ProfileService.getUser($stateParams.id).then( (res) => {
      vm.user = [res.data.user];
      console.log(res.data.user);
    });
  }

};

ProfileController.$inject = ['ProfileService', 'MovieService', 'UserService', '$stateParams', '$cookies'];

 export default ProfileController;