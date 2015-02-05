angular.module('like-btn',[])
.directive('likeBtn', function(){
  return {
    restrict:'E',
    scope: {
      startingValue:'=?startingValue',
    },
    controller: ['$scope','$element',function($scope,$element){

      $scope.addLike=function(){
        $scope.quantity = $scope.startingValue || 0
        $scope.startingValue += 1

        console.log($scope.startingValue)
      }

    }],
    template:'<button class="btn btn-default" ng-click="addLike()">Like {{quantity}}</button>'

  }
})
