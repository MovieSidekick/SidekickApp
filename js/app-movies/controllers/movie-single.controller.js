let MovieSingleController = function(MovieService, $stateParams, MainService) {
  
  let vm = this;

  vm.showImageUpload = false;
  vm.showMainFormNow = false;
  vm.showForm        = showForm;
  vm.uploadImage     = uploadImage;
  vm.showMainForm    = showMainForm;
  vm.addMain         = addMain;

  activate();

  function activate () {
    MovieService.getMovie($stateParams.id).then( (res) => {
      vm.movie = res.data;
    });
  }

  function addMain (mainObj, movie) {
    MainService.attachMain(mainObj, movie).then( (res) => {
      console.log(res);
    });
  }

  function showForm () {
    vm.showImageUpload = (vm.showImageUpload) ? false : true;
  }

  function showMainForm () {
    vm.showMainFormNow = (vm.showMainFormNow) ? false : true;
  }

  function uploadImage (data) {
    console.log(data);
  }

};

MovieSingleController.$inject = ['MovieService', '$stateParams', 'MainService'];

export default MovieSingleController;