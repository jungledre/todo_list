angular.module('weather-directive',[])
.directive('weatherDirective',function(){

  console.log("controller stuff!!!")
  return {
    restrict:'E',
    scope: {
      location:'@location'
    },
  controller: ['$scope','$http','$element',function($scope,$http,$element){

    console.log("controller stuff!!!")

      var req = {
        url: "http://api.openweathermap.org/data/2.5/weather",
        params: {
          q: $scope.location
        }
      }

      $http(req).success(function(data){
        $scope.weather = data
        $scope.temp = Math.round(((data.main.temp - 273.15) * 1.8000) + 32)
      });
    }],
    template:'<h3>{{weather.name}}</h3><h1>{{temp}}&deg;</h1><h3>{{weather.weather[0].description}}</h3>'
  }
})
