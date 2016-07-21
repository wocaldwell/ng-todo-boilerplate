"use strict";

var app = angular.module("TodoApp", ['ngRoute'])
.constant('FirebaseURL', "https://ng-todo-demo-4c81b.firebaseio.com/");

app.config(function($routeProvider) {
  $routeProvider.
    when('/items/list', {
      templateUrl: 'partials/item-list.html',
      controller: 'ItemListCtrl'
    }).
    when('/items/new', {
      templateUrl: 'partials/item-new.html',
      controller: 'ItemNewCtrl'
    }).
    when('/items/details/:itemId',  {
      templateUrl: 'partials/item-details.html ',
      controller: 'ItemViewCtrl'
    }).
    otherwise('/items/list');
});