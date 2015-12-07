import angular from 'angular';

import SearchController from './controllers/search.controller';

angular
  .module('app.layout', [])

  .controller('SearchController', SearchController)
;