import angular from 'angular';
import '../app-core/index';

import MoviesController from './controllers/movies.controller';
import MovieSingleController from './controllers/movie-single.controller';

import MovieService from './services/movie.service';

import moviesItem from './directives/movies.directive';
import movieItem from './directives/movie.directive';


angular
  .module('app.movies', ['app.core'])
  .controller('MoviesController', MoviesController)
  .controller('MovieSingleController', MovieSingleController)
  .service('MovieService', MovieService)
  .directive('movieItem', movieItem)
  .directive('moviesItem', moviesItem)
