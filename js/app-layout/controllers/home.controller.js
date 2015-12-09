let HomeController = function(SERVER) {

  let vm = this;
  
  vm.title = 'Home Page';

  vm.name = 'user_name';
  console.log(vm.name);
  

};

HomeController.$inject = ['SERVER'];

export default HomeController;