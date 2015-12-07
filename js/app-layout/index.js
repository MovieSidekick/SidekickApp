import angular from 'angular';

import HomeController from './controllers/home.controller';
import SearchController from './controllers/search.controller';

angular
  .module('app.layout', [])
  .controller('HomeController', HomeController)
  .controller('SearchController', SearchController)
;