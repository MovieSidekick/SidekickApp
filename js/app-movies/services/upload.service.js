// let UploadService = function($http, SERVER) {
  
//   this.upload = upload;

//   function upload (textarea) {

//     let formData = new FormData();
//     formData.append('upload', textarea);
//     // formData.append('details', JSON.stringify({ name: 'Tim' }));

//     return $http.post(SERVER.URL, formData, SERVER.CONFIG);
//   }

// };

// UploadService.$inject = ['$http', 'SERVER'];

// export default UploadService;

// Enable CORS on the Backend - the gem is called rack-cors