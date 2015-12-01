let UploadService = function($http, SERVER) {
  
  this.upload = upload;

  function upload (file) {

    let formData = new FormData();
    formData.append('upload', file);
    // formData.append('details', JSON.stringify({ name: 'Tim' }));

    return $http.post(SERVER.URL, formData, SERVER.CONFIG);
  }

};

UploadService.$inject = ['$http', 'SERVER'];

export default UploadService;