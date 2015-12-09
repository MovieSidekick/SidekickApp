let ProfileService = function($http, SERVER, $cookies) {
  
 let url = 'https://floating-mountain-2068.herokuapp.com/users/';

 this.getAllProfiles   = getAllProfiles;
 this.getProfile       = getProfile;

 function Profile (user) {
   this.user_name = user.user_name;
   this.pic = user.pic;
   this.email = user.email;
   this.review = user.review;
 }

 function getAllProfiles () {
   return $http.get(url, SERVER);
 }

 function getProfile (user) {
  console.log(user);
   return $http.post(url, { user_name: '', pic: '', email: '', review: ''}, SERVER); 
}
 
};

ProfileService.$inject = ['$http', 'SERVER','$cookies'];

export default ProfileService;