let addReview = function(ReviewService) {
  
  return {

    restrict: 'E',
    replace: true,
    scope: {
      review: '='
    },
    templateUrl: 'templates/app-movies/movie-single.tpl.html',
    link: function (scope, element, attrs) {
      element.on('submit', function () {

        let file = element.find('input')[0].files[0];
        UploadService.upload(file).then( (res) => {
          MovieService.addImage(res.data.upload.file_url, scope.movie)
            .then( (res) => {
              
            });
        });

      });
    }
  };

};

addImage.$inject = ['MovieService', 'UploadService'];

export default addImage;