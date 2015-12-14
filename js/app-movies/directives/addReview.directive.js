let addReview = function(MovieService, UploadService, $state) {
  
  return {

    restrict: 'E',
    replace: true,
    scope: {
      movie: '='
    },
    templateUrl: 'templates/app-movies/upload.tpl.html',
    link: function (scope, element, attrs) {
    element.on('submit', function () {
        $state.go('root.singlemovie', { id: movie.movie_id });
      });
    }
  };

};//       element.on('submit', function () {

//         let textarea = element.find('input')[0].review[0];
//         UploadService.upload(textarea).then( (res) => {
//           MovieService.addReview(res.data.upload.textarea, scope.movie)
//             .then( (res) => {
              
//             });
//         });

//       });
//     }
//   };

// };

addReview.$inject = ['MovieService', 'UploadService', '$state'];

export default addReview;