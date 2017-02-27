"use strict";

app.controller('myCtrl', function($scope) {
  $scope.applyThis = function() {
    console.log("Clicked");
    $scope.color = {
      'background-color': '#387ef5',
      'color': 'white'
    };
  }
})
