app.factory('staticdata',function(){

    return {

      factoryCountry: function(){
            var Country= ["AU","US"];
            return Country;
        },
        factorygenresSoftware: function(){
            var GenreSoftware= ['All','Travel','Navigation','Social Networking','Utilities','Music','Productivity','Lifestyle',
            'Catalogues','Photo & Video','Business','Entertainment','Reference','Education','Games',"Books"];
            return GenreSoftware;
        },
        factorygenresMovies: function(){
            var GenreMovie = ['All','Comedy','Drama','Romance','Action & Adventure','Kids & Family','Documentary','Concert Films',
            'Sports','Thriller','Short Films'];
            return GenreMovie;
        },
        factorygenresEbook: function(){
           var GenreEbook = ['All','Biographies & Memoirs','Books','Non-Fiction','True Crime','Social Science','Crime & Thrillers',
           'Self-Improvement','Body, Mind & Spirit','Fantasy, Futuristic & Ghost','Romance','Law','Professional & Technical',
           'Horror','Fiction & Literature','Sports & Recreation','Travel & Adventure','Asia','History','Military','Epic',
           'Sci-Fi & Fantasy','Fantasy','Humour','Poetry','Arts & Entertainment','Games','Gay','Historical','Police Procedural',
           'Contemporary','Christianity','Religion & Spirituality','Spirituality','Psychology','Adventure','Business & Personal Finance',
           'Management & Leadership','Food & Drink'];
            return GenreEbook;
        },
        factorygenresTvShow: function(){
            var GenreTVShow = ['All','Comedy','Drama','Kids','Reality TV',
            'Sports','Sci-Fi & Fantasy','Animation','TV Shows','Nonfiction'];
            return GenreTVShow;
        },
        factorypaidunpaid :function(){
            var pricetypes = ['All','Free','Paid'];
            return pricetypes;
        },
         factoryMedia : function(){
            // var MediaTypes =['movie', 'podcast', 'music','musicVideo', 'audiobook', 'shortFilm', 'tvShow', 'software', 'ebook'];
            var MediaTypes =['movie', 'tvShow', 'software', 'ebook'];
            return MediaTypes;
         }
    }

});



app.factory('CallApi',function($http){
    // var server="https://itunes.apple.com/search?term=whatsapp&country=au&entity=software";
    return {
        GetAppList: function(searchname,searchmedia,searchcountry){
          var promise=  $http.jsonp("https://itunes.apple.com/search?term="+searchname+"&country="+searchcountry+"&media="+searchmedia+"&callback=JSON_CALLBACK").
                success(function(data) {
              
                    console.log("1");
                
                    
                }).

                error(function(data, status, headers, config) {
                    alert("ERROR: Could not get data.");
                });
                return promise;
        }

    }
});
