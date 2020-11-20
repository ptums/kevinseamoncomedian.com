'use strict';
angular.module('MyApp', [
			"ngSanitize",
			"com.2fdevs.videogular",
			"com.2fdevs.videogular.plugins.controls",
			"com.2fdevs.videogular.plugins.overlayplay",
			"com.2fdevs.videogular.plugins.poster"
		]);
  angular.module('MyApp').controller('HomeCtrl',
		["$sce", function ($sce) {
			this.config = {
				sources: [
					{src: $sce.trustAsResourceUrl("https://sh-site-assets.nyc3.digitaloceanspaces.com/2020-What-A-Year-Presentation.pdf"), type: "video/mp4"},
					{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
					{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
				],
				tracks: [
					{
						src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
						kind: "subtitles",
						srclang: "en",
						label: "English",
						default: ""
					}
				],
				theme: "resources/js/vg/videogular.min.css",
				plugins: {
					poster: "img/Kevlatest.jpg"
				}
			};
		}]
	);
angular.module('MyApp').controller('PreviousShowSection',function($scope){
     $scope.PreviousShows=[
       {
         "title": "Leap Year Comedy Show",
         "date" : "1-7-14",
         "shortname": "kevpub",
         "link":"https://vimeo.com/37763096"
     },

     {
         "title": "Gotham Comedy Club",
         "date" : "8-8-12",
         "shortname": "kevingotham8812",
         "link": "https://www.youtube.com/watch?v=qAMY9WejjyE"
     },
     {
         "title": "Eastville Comedy Club",
         "date" : "6-9-12",
         "shortname": "keveast",
         "link": "https://www.youtube.com/watch?v=kyQCvx1BZYU"
     },
     {
         "title": "Eastville Comedy Club",
         "date" : "5-19-12",
         "shortname": "kevstandup",
         "link": "https://www.youtube.com/watch?v=kyQCvx1BZYU"
     }
   ]
});
angular.module('MyApp').controller('FilmSection',function($scope){
     $scope.Films=[
       {
         "title": "Five To Places",
         "date" : "4-8-14",
         "shortname": "kevplace",
         "link":"https://www.youtube.com/watch?v=kwmWYswWObE"
     },
     {
         "title": "Blanket Statement",
         "date" : "2-10-14",
         "shortname": "kevblanket",
         "link": "https://www.youtube.com/watch?v=P6t36b2sRWs"
     },
     {
         "title": "Paid Driver For Hire",
         "date" : "11-28-13",
         "shortname": "paiddriver",
         "link": "https://www.youtube.com/watch?v=ldc93jBaIUA"
     }
   ]
});
