let ProfileService = function($http, SERVER, $cookies) {
  
 let url = 'https://floating-mountain-2068.herokuapp.com/users/';

 this.getAllUsers   = getAllUsers;
 this.getUser       = getUser;

 function User (userObj) {
   this.user_name = user.user_name;
   this.pic = user.pic;
   this.email = user.email;
   this.review = user.review;
 }

 function getAllUsers () {
   return $http.get(url, SERVER);
 }

 function getUser (userObj) {
  console.log(userObj);
   return $http.get(url, { user_name: user.user_name, pic: user.pic, email: user.email}, SERVER); 
}
 
};

ProfileService.$inject = ['$http', 'SERVER','$cookies'];

export default ProfileService;