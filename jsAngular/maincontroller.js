

app.controller('Controller2', ['$scope','staticdata', 'CallApi',
     
 function($scope,staticdata,CallApi) {

  $scope.AppNameToSearch;
  

   $scope.prices=staticdata.factorypaidunpaid();
   $scope.medias=staticdata.factoryMedia();
   $scope.countries=staticdata.factoryCountry();
   $scope.selectedMedia = "software";
   $scope.selectedCountry="AU";
   $scope.selectedGenre="All";
   $scope.selectedPrice=$scope.prices[0];
  
  
  // Loads the values in Genre dropdown on the change of media type

$scope.$watch('selectedMedia', function() {
   $scope.selectedGenre="All";
    if($scope.selectedMedia=="software")
    {
      $scope.genres = staticdata.factorygenresSoftware();
    }
    else if($scope.selectedMedia=="movie")
    {
      $scope.genres = staticdata.factorygenresMovies();
    }
     else if($scope.selectedMedia=="ebook")
    {
      $scope.genres = staticdata.factorygenresEbook();
    }
    else if($scope.selectedMedia=="tvShow")
    {
      $scope.genres = staticdata.factorygenresTvShow();
    }
   }, true);


 
		 
// search() method is 

$scope.search = function search() {

  if(!angular.isUndefined($scope.AppNameToSearch) || $scope.AppNameToSearch!=NULL){
  CallApi.GetAppList($scope.AppNameToSearch,$scope.selectedMedia,$scope.selectedCountry).then(function(response){
        $scope.output = response.data;
    });


}
};
      
    



}]);