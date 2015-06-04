'use strict';
angular.module('choreApp.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('UsersCtrl', function($scope, Users) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.users = Users.all();
  $scope.remove = function(user) {
    Users.remove(user);
  };
})

.controller('UserDetailCtrl', function($scope, $stateParams, Users) {
  $scope.user = Users.get($stateParams.userId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
