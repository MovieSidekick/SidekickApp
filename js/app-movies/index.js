import angular from 'angular';
import '../app-core/index';

import MoviesController from './controllers/movies.controller';
import MoviesAddController from './controllers/movies-add.controller';
import MovieSingleController from './controllers/movie-single.controller';

import MovieService from './services/movie.service';
import UploadService from './services/upload.service';
import MainService from './services/maintenance.service';

import movieItem from './directives/movie.directive';
import addImage from './directives/addImage.directive';

angular
  .module('app.movies', ['app.core'])
  .controller('MoviesController', MoviesController)
  .controller('MoviesAddController', MoviesAddController)
  .controller('MovieSingleController', MovieSingleController)
  .service('MovieService', MovieService)
  .service('UploadService', UploadService)
  .service('MainService', MainService)
  .directive('movieItem', movieItem)
  .directive('addImage', addImage)
;