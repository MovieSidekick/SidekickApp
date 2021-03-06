import angular from 'angular';

import 'angular-ui-router';
import 'angular-cookies';

import config from './config';
import run from './run';

import SERVER from './constants/fileserver.constant';


angular
  .module('app.core', ['ui.router', 'ngCookies'])
  .config(config)
  .constant('SERVER',SERVER)
  .run(run)
;