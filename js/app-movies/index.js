import angular from 'angular';
import '../app-core/index';

import MoviesController from './controllers/movies.controller';
import MovieSingleController from './controllers/movie-single.controller';
import ReviewController from './controllers/review.controller';

import MovieService from './services/movie.service';
import ReviewService from './services/review.service';

import moviesItem from './directives/movies.directive';
import movieItem from './directives/movie.directive';
import reviewItem from './directives/review.directive';


angular
 .module('app.movies', ['app.core'])
 .controller('MoviesController', MoviesController)
 .controller('MovieSingleController', MovieSingleController)
 .controller('ReviewController', ReviewController)
 .service('MovieService', MovieService)
 .service('FeviewService', ReviewService)
 .directive('movieItem', movieItem)
 .directive('moviesItem', moviesItem)
 .directive('reviewItem', reviewItem)