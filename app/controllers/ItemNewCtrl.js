"use strict";

app.controller("ItemNewCtrl", function($scope) {
    $scope.newTask = {};
    $scope.addNewItem = function() {
        $scope.newTask.isCompleted = false;
        $scope.newTask.id = $scope.items.length;
        console.log('You added a new task: ', $scope.newTask);
        $scope.items.push($scope.newTask);
        $scope.newTask = {};
    };
});