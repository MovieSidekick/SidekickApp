let ProfileService = function($http, SERVER, $cookies, $state) {
  
 let url = 'https://floating-mountain-2068.herokuapp.com/';

 // this.getAllUsers   = getAllUsers;
 this.getUser       = getUser;

 function User (user) {
   this.user = user.user;
   this.pic = user.pic;
   this.email = user.email;
   this.review = user.review;
 }

 // function getAllUsers () {
 //   return $http.post(url, SERVER.CONFIG);
 // }

 function getUser (email) {
  console.log();
   return $http.post(url, email, SERVER.CONFIG); 
}
 
};

ProfileService.$inject = ['$http', 'SERVER','$cookies', '$state'];

export default ProfileService;