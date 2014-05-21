//Custum filter to to filter the results on Paid and Free Criteria

customFilter.filter('FreePaidFilter', [function () {
    return function (apps, selectedPrice) {
        if (!angular.isUndefined(apps) && !angular.isUndefined(selectedPrice) && selectedPrice.length > 0) {

            var tempApps = [];
            if(selectedPrice=="Free"){
                 angular.forEach(apps, function(val, index){
                      
                        if(val.price=="0")
                        {
                        tempApps.push(val);
                        }
           });
           return tempApps;
         }
         else if(selectedPrice=="Paid")
            {
                 angular.forEach(apps, function(val, index){
                      
                        if(val.price!="0")
                        {
                          tempApps.push(val);
                        }
           });
           return tempApps;
            }

            else if(selectedPrice=="All")
            {
              return apps;
            }
        } 
        else 
        {
            return apps;
        }
    };
}]);

//Custum filter to to filter the results on Genre Basis

    customFilter.filter('GenreFilter', [function () {
     return function (apps, selectedGenre,selectedMedia) {
        if (!angular.isUndefined(apps) && !angular.isUndefined(selectedGenre) && selectedGenre.length > 0 && selectedGenre != "All") {
          var tempApps = [];
          if(selectedMedia=="ebook"|| selectedMedia=="software")
          {
            angular.forEach(apps, function(val, index){
                var varGenres = val.genres;
                var continueloop = true;
                if(continueloop)
                {
          
            for (var i=0; i<varGenres.length; i++)
            {
                if(varGenres[i]==selectedGenre)
                {
                   tempApps.push(val);
                   continueloop=false; 
                }
            }
            
            }

            });
            return tempApps;
          }
          else
        {
          angular.forEach(apps, function(val, index){
                      
                        if(val.primaryGenreName==selectedGenre)
                        {
                        tempApps.push(val);
                        }
           });
           return tempApps;
          
        } 
    }
        else 
        {
            return apps;
        }
    };
}]);