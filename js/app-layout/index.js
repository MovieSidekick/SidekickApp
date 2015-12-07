import angular from 'angular';

import HomeController from './controllers/home.controller';

angular
  .module('app.layout', [])

  .controller('HomeController', HomeController)


  .controller('SearchController', SearchController)
;