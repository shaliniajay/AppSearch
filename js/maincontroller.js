
app.controller("Controller", function($scope){
		 $scope.understand = "I now understand how the scope works!";
		 $scope.items=[{name:'Shalini'},{name:'Manish'}];
});

app.controller("Controller2", function($scope,$http){
		 $scope.a = "Lets find";
		 $scope.nicks=[{name:'Preeti'},{name:'Sonu'}];
  $http.jsonp(
  	'https://itunes.apple.com/search?term=whatsapp&country=au&entity=software&callback=JSON_CALLBACK').
  success(function (data) {
  	$scope.output =data.results;;
    // $scope.count ="Total Result is " + data.resultCount;
    angular.forEach(data, function(value, index){
                angular.forEach(value.results, function(val, index){
                    $scope.varkind=val.kind;
                });
            });
  }).
  error(function (error) {
    alert("failed");
  });
});
