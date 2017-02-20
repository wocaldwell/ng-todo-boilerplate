"use strict";

app.controller('ItemListCtrl', function($scope){
    $scope.items = [
      {
        id: 0,
        task: "mow the lawn",
        isCompleted: false,
        dueDate: "12/5/17",
        assignedTo: "Greg",
        location: "Joe's house",
        urgency: "low",
        dependencies: "sunshine, clippers, hat, water, headphones"
      },
      {
        id: 1,
        task: "grade quizzes",
        isCompleted: false,
        dueDate: "12/5/15",
        assignedTo: "Christina",
        location: "NSS",
        urgency: "high",
        dependencies: "wifi, tissues, vodka"
      },
      {
        id: 2,
        task: "take a nap",
        isCompleted: false,
        dueDate: "5/21/16",
        assignedTo: "Joe",
        location: "Porch of lakefront cabin",
        urgency: "medium",
        dependencies: "hammock, silence"
      }
    ];
    $scope.itemDelete = function(itemId) {
        console.log('you clicked delete for', itemId);
        for (var i = 0; i < $scope.items.length; i++) {
            if ($scope.items[i].id === itemId) {
                $scope.items.splice(i, 1);
            }
        }
    };
});