import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

import angular from 'angular';
import MyController from './controller/my_controller';
angular.module('app', [])

.controller('MyController', MyController);

