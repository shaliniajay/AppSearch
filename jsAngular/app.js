var app = angular.module('MyApp',['MyCustomFilter']);
var customFilter = angular.module('MyCustomFilter', []);
app.config( [
    '$compileProvider',
    function( $compileProvider )
    {   
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|itms):/);
        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    }
]);

app.directive('a', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
            if(attrs.ngClick || attrs.href === "" || attrs.href === "#"){
                elem.on('click', function(e){
                    e.preventDefault();
                    // if(attrs.ngClick){
                    //     scope.$eval(attrs.ngClick);
                    // }
                });
            }
        }
   };
});