var todoApp = angular.module('TodoApp', ['ngAnimate', 'image-toggle', 'like-btn', 'weather-directive']);
var fruitsAndVeggies = "js/script.js"

todoApp.run(function(){
  console.log('App started')
});

todoApp.controller('TodoApp',['$scope',function($scope){
  var obj = {done:false, name:"Meditate"}
  $scope.items = [];
  $scope.items.push({done:false, name:"Shower"})
  $scope.items.push({done:false, name:"Floss teeth"})
  $scope.items.push({done:false, name:"Make lunch for tomorrow"})
  $scope.items.push(obj)

  $scope.newItem="";

  $scope.addItem = function(){
    $scope.items.push({done:false, name:$scope.newItem});
    $scope.newItem='';
  }

  $scope.removeItem = function(index){
    $scope.items.splice(index,1)
  }

  $scope.move = function(currentIndex, direction){
    var targetIndex = currentIndex + direction;
    if (targetIndex < 0 || targetIndex >= $scope.items.length) {
      alert("invalid move");
      return;
    }
    var tempItem = $scope.items[currentIndex];
    $scope.items[currentIndex] = $scope.items[targetIndex]
    $scope.items[targetIndex] = tempItem
  }

  $scope.getData = function(){
    console.log($scope.items);
  }
}]);
